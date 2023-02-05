import { useMutation } from "@tanstack/react-query";
import {
    Avatar,
    Button,
    Col,
    Form,
    Input,
    message,
    Row,
    Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import { editUser } from "../Api/api";
import { useAuthStore } from "../store/auth";
const { Title } = Typography;

const Profil = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { user } = useAuthStore((state) => state);

    const editUserMutation = useMutation((id, body) => editUser(id, body), {
        onSuccess: (data) => {
            data?.code === 211 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Foydalanuvchi muvaffaqiyatli taxrirlandi");
            data?.code === 200 && navigate("/profil");
            data?.code === 200 && form.resetFields();
        },
        onError: (error) => {
            message.error("Foydalanuvchini taxrirlashda muammo bo'ldi");
            console.error(error);
        },
    });

    const formValidate = () => {
        form.validateFields()
            .then((values) => {
                editUserMutation.mutate(user.id, {
                    ...values,
                    id: user.id,
                });
            })
            .catch((info) => {
                console.error("Validate Failed:", info);
            });
    };

    return (
        <div className="container" style={{ marginTop: 30 }}>
            <Row className="profilWrapper">
                <Col
                    xs={24}
                    sm={24}
                    md={7}
                    lg={10}
                    xl={10}
                    className="profilCard"
                >
                    <Avatar
                        style={{
                            width: 100,
                            height: 100,
                            fontSize: 36,
                            color: "#f56a00",
                            backgroundColor: "#fde3cf",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                        }}
                    >
                        {user?.firstName?.charAt(0)}
                    </Avatar>
                    <Title
                        level={4}
                        style={{ textAlign: "center", marginTop: 30 }}
                    >{`${user?.lastName} ${user?.firstName}`}</Title>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={16}
                    lg={13}
                    xl={13}
                    className="profilCard"
                >
                    <Form
                        form={form}
                        layout="vertical"
                        name="table_adddata_modal"
                        initialValues={{
                            number: user?.number,
                            lastName: user?.lastName,
                            firstName: user?.firstName,
                        }}
                    >
                        <Row gutter={12}>
                            <Col span={12}>
                                <Form.Item
                                    key={"firstName"}
                                    name={"firstName"}
                                    label="Foydalanuvchi nomi"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Foydalanuvchi nomini kiriting`,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Foydalanuvchi nomini kiriting" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    key={"lastName"}
                                    name={"lastName"}
                                    label="Foydalanuvchi familiyasi"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Foydalanuvchi familiyasini kiriting`,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Foydalanuvchi familiyasini kiriting" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    key={"number"}
                                    name={"number"}
                                    label="Foydalanuvchi nomeri"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Foydalanuvchi nomerini kiriting`,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Foydalanuvchi nomerini kiriting" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    key={"password"}
                                    name={"password"}
                                    label="Foydalanuvchi paroli"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Foydalanuvchi parolini kiriting`,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Foydalanuvchi parolini kiriting" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30 }}>
                            <Col span={24} style={{ textAlign: "right" }}>
                                <Button type="primary" onClick={formValidate}>
                                    Saqlash
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Profil;
