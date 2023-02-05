import { useMutation } from "@tanstack/react-query";
import {
    Button,
    Col,
    Drawer,
    Form,
    Input,
    message,
    Row,
    Space,
    Steps,
} from "antd";
import { useState } from "react";
import {
    createCondedate,
    createPayment,
    createPaymentCodeVerify,
} from "../../Api/api";
import { useData } from "../../Hook/UseData";
import CustomSelect from "../../Module/Select/Select";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const CondidateRegister = ({ examId, amaunt }) => {
    const [current, setCurrent] = useState(0);
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const CondidateInfo = ({ examId }) => {
        const [errorList, setErrorList] = useState({
            phoneNumber: "",
            phoneNumberMessage: "",
        });
        const { examsData, districtsData } = useData();
        const [form] = Form.useForm();

        const createMutationCondidate = useMutation(
            (body) => createCondedate(body),
            {
                onSuccess: (data) => {
                    console.log(data);
                    const getError = (error) => {
                        message.error(error?.message);
                        setErrorList((prev) => ({
                            ...prev,
                            phoneNumber: "error",
                            phoneNumberMessage: error.message,
                        }));
                    };
                    data?.code === 211 && getError(data);
                    data?.code === 200 &&
                        setUser({
                            ...data?.data,
                        });
                    data?.code === 200 && setCurrent(1);
                },
                onError: (error) => {
                    message.error("Kandidateni qo'shishda muammo bo'ldi");
                    console.error(error);
                },
            }
        );

        const onFinish = (values) => {
            createMutationCondidate.mutate({
                ...values,
                phoneNumber: "+998" + values.phoneNumber,
            });
        };

        const onFinishFailed = (errorInfo) => {
            console.error("Failed:", errorInfo);
        };

        const onReset = () => {
            form.resetFields();
        };

        return (
            <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                initialValues={{
                    examId: examId,
                    ...user,
                    phoneNumber: user?.phoneNumber?.slice(4, 13),
                }}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <h3
                            style={{
                                textAlign: "center",
                                margin: "10px 0",
                            }}
                        >
                            Abuturient ma'lumotlari
                        </h3>
                    </Col>
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
                            validateStatus={errorList.phoneNumber}
                            help={errorList.phoneNumberMessage}
                            name="phoneNumber"
                            label="Telefon nomeri"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos qatnashchi nomerini kiriting",
                                },
                                {
                                    required: true,
                                    validator(_, value) {
                                        if (!value || value.length === 9) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            "13 ta sondan iborat bulishi kerak"
                                        );
                                    },
                                },
                            ]}
                        >
                            <Input
                                maxLength={9}
                                addonBefore="+998"
                                placeholder="Qatnashchi nomerini kiriting"
                            />
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
                                DValue={user?.districtId}
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
                    <Col
                        span={24}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                        }}
                    >
                        <Space>
                            <Button htmlType="button" onClick={onReset}>
                                Tozalash
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Keyingisi
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Form>
        );
    };

    const PaymentInfo = ({ user, examId, amaunt }) => {
        const [form] = Form.useForm();

        const createMutation = useMutation((body) => createPayment(body), {
            onSuccess: (data) => {
                data?.code === 500 && message.error(data.message);
                data?.code === 200 && setCurrent(2);
            },
            onError: (error) => {
                message.error("To'lov ma'lumotda muammo bo'ldi");
                console.error(error);
            },
        });
        const onFinish = (values) => {
            createMutation.mutate({
                amount: amaunt,
                candidateId: user.id,
                examId: examId,
                expire: values.expire,
                number: values.number,
            });
        };

        const onFinishFailed = (errorInfo) => {
            console.error("Failed:", errorInfo);
        };

        const onPrev = () => {
            setCurrent((prev) => prev - 1);
        };

        const onReset = () => {
            form.resetFields();
        };

        return (
            <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <p
                            style={{
                                textAlign: "center",
                                margin: "10px 0",
                            }}
                        >
                            Kartangizda{" "}
                            <span style={{ fontWeight: 600 }}>
                                {amaunt} so'm
                            </span>{" "}
                            pul bor ekanligiga ishonch hosil qiling
                        </p>
                    </Col>
                    <Col span={24}>
                        <h3
                            style={{
                                textAlign: "center",
                                margin: "10px 0",
                            }}
                        >
                            To'lov qilish uchun ma'lumotlar
                        </h3>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="number"
                            label="Karta nomeri"
                            rules={[
                                {
                                    required: true,
                                    message: "Iltimos karta nomerini kiriting",
                                },
                                {
                                    required: true,
                                    validator(_, value) {
                                        if (!value || value.length === 16) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            "Karta nomer 16 ta sondan iborat bulishi kerak"
                                        );
                                    },
                                },
                            ]}
                        >
                            <Input
                                showCount
                                maxLength={16}
                                placeholder="Karta nomerini kiriting"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="expire"
                            label="Muddati(misol: 04/25)"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos karta amal qilish muddatini kiritig",
                                },
                            ]}
                        >
                            <Input
                                style={{ width: "100%" }}
                                maxLength={5}
                                minLength={5}
                                showCount
                                placeholder="Karta amal qilish muddatini kiritig"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col
                        span={24}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                        }}
                    >
                        <Space>
                            <Button htmlType="button" onClick={onPrev}>
                                Orqaga
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Tozalash
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Keyingisi
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Form>
        );
    };

    const CodeVerifyInfo = ({ user, onClose }) => {
        const [form] = Form.useForm();
        const downloadFunc = (id) => {
            const link = document.createElement("a");
            link.href = `${REACT_APP_BASE_URL}/api/candidate/ticket-file/${id}`;
            link.setAttribute("download", `Imtihon.pdf`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        };

        const createMutationVerify = useMutation(
            (body) => createPaymentCodeVerify(body),
            {
                onSuccess: (data) => {
                    data.code === 230 && message.error(data.data.message);
                    data?.code === 200 &&
                        message.success("Abuturient muvaffaqiyatli qo'shildi");
                    data?.code === 200 && downloadFunc(user.id);
                    data?.code === 200 && onClose();
                    data?.code === 200 && setUser({});
                    data?.code === 200 && setCurrent(0);
                },
                onError: (error) => {
                    message.error("To'lov qilishda xatolik bo'ldi ");
                    console.error(error);
                },
            }
        );

        const onFinish = (values) => {
            createMutationVerify.mutate({
                candidateId: user.id,
                examId: user.exam.id,
                code: values.code,
            });
        };

        const onFinishFailed = (errorInfo) => {
            console.error("Failed:", errorInfo);
        };

        const onReset = () => {
            form.resetFields();
        };

        const onPrev = () => {
            setCurrent((prev) => prev - 1);
        };

        return (
            <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <Row
                    gutter={16}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Col span={24}>
                        <p
                            style={{
                                textAlign: "center",
                                margin: "10px 0",
                            }}
                        >
                            Telefon nomeringizga kelgan tasdiqlash kodini
                            kiriting
                        </p>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="code"
                            label="Tasdiqlash kodi"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Iltimos tasdiqlash kodini kiriting",
                                },
                            ]}
                        >
                            <Input
                                showCount
                                maxLength={6}
                                placeholder="Tasdiqlash kodini kiriting"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col
                        span={24}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                        }}
                    >
                        <Space>
                            <Button htmlType="button" onClick={onPrev}>
                                Orqaga
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Tozalash
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Keyingisi
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Form>
        );
    };

    const progresFun = (current, son) => {
        if (current < 3) {
            if (current === son) return "Ish jarayonida";
            if (current < son) return "Kutilmoqda";
            if (current > son) return "Tugatildi";
        } else setCurrent(0);
        return "Ish jarayonida";
    };

    const stepsCont = [
        {
            title: progresFun(current, 0),
            content: <CondidateInfo examId={examId} />,
            description: "O'z ma'lumotlarini kiriting",
        },
        {
            title: progresFun(current, 1),
            content: (
                <PaymentInfo user={user} examId={examId} amaunt={amaunt} />
            ),
            description: "Karta ma'lumotlarini kiritish",
        },
        {
            title: progresFun(current, 2),
            content: <CodeVerifyInfo user={user} onClose={onClose} />,
            description: "Tasdiqlash kodi",
        },
    ];

    const items = stepsCont.map((item) => ({
        key: item.title,
        title: item.title,
        description: item.description,
    }));

    return (
        <>
            <button
                className="subscribe"
                style={{ padding: "10px 20px" }}
                onClick={showDrawer}
            >
                Ro'yxatdan o'tish
            </button>
            <Drawer
                title="Imtihon uchun ro'yxatdan o'tish"
                width={window.innerWidth > 720 ? 720 : "100%"}
                onClose={onClose}
                open={open}
                bodyStyle={{
                    padding: 16,
                }}
            >
                <Steps current={current} items={items} />
                <div className="steps-content">
                    {stepsCont[current].content}
                </div>
            </Drawer>
        </>
    );
};

export default CondidateRegister;
