import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import { useData } from "../../Hook/UseData";
import CustomSelect from "../../Module/Select/Select";

const CondidateRegister = ({ onClose, open, examId }) => {
    const { examsData, districtsData } = useData();
    const [form] = Form.useForm();

    return (
        <Drawer
            title="Create a new account"
            width={window.innerWidth > 720 ? 720 : "100%"}
            onClose={onClose}
            open={open}
            bodyStyle={{
                padding: 16,
            }}
            extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} type="primary">
                        Submit
                    </Button>
                </Space>
            }
        >
            <Form layout="vertical" form={form} hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="firstName"
                            label="ismi"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos qatnashchi ismini kiriting",
                                },
                            ]}
                        >
                            <Input placeholder="Qatnashchi ismini kiriting" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="lastName"
                            label="Familiyasi"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos qatnashchi familiyasini kiriting",
                                },
                            ]}
                        >
                            <Input placeholder="Qatnashchi familiyasini kiriting" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="phoneNumber"
                            label="Telefon nomeri"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos qatnashchi nomerini kiriting",
                                },
                            ]}
                        >
                            <Input placeholder="Qatnashchi nomerini kiriting" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="classNumber"
                            label="Sinfi"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos qatnashchi nechanchi sinifda o'qishini kiritig",
                                },
                            ]}
                        >
                            <Input placeholder="Nechanchi sinifda o'qishi" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="districtId"
                            label="Tuman nomi"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos qatnashchi tumanini tanlang",
                                },
                            ]}
                        >
                            <CustomSelect
                                selectData={districtsData}
                                placeholder="Tumanni tanlang"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="examId"
                            label="Imtihon nomi"
                            rules={[
                                {
                                    required: true,
                                    message: "Iltimos imtihon nomini tanlang",
                                },
                            ]}
                        >
                            <CustomSelect
                                selectData={examsData?.map((item) => ({
                                    ...item,
                                    name: item.title,
                                }))}
                                placeholder="Imtihonni tanlang"
                                DValue={examId}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                    message: "please enter url description",
                                },
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="please enter url description"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
};

export default CondidateRegister;
