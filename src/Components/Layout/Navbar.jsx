import {
    Avatar,
    Button,
    Col,
    Dropdown,
    Form,
    Input,
    Layout,
    Menu,
    message,
    Modal,
    Row,
    Space,
    Tooltip,
} from "antd";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DrapdownMenu from "./DrapdownMenu";
import { useTable } from "../../Hook/UseTable";
import {
    DashboardOutlined,
    MenuOutlined,
    LogoutOutlined,
    LoginOutlined,
    SettingOutlined,
    UserOutlined,
    UnorderedListOutlined,
    ProfileOutlined,
    OrderedListOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import logoSvg from "../../Assets/Images/logo-math.svg";
import { createUser } from "../../Api/api";
import { useAuthStore } from "../../store/auth";
import { useMutation } from "@tanstack/react-query";

const { Header } = Layout;

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const { user } = useAuthStore((state) => state);
    const { examIdWith } = useParams();
    const { setExamIdWithUrl } = useTable();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogOut = (e) => {
        e.preventDefault();
        if (sessionStorage.getItem("math-test-app"))
            sessionStorage.removeItem("math-test-app");
        useAuthStore.setState({ token: null, user: null });
        navigate("/");
    };

    const onClickGoPage = (e) => {
        navigate(e.key);
    };

    useEffect(() => {
        setExamIdWithUrl(examIdWith);
    }, [examIdWith, location.pathname]);

    const showDrawer = () => {
        setIsVisible(true);
    };

    const onClose = () => {
        setIsVisible(false);
    };

    const createUserMutation = useMutation((body) => createUser(body), {
        onSuccess: (data) => {
            data?.code === 211 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Foydalanuvchi muvaffaqiyatli qo'shildi");
            data?.code === 200 && setVisible(false);
            data?.code === 200 && form.resetFields();
        },
        onError: (error) => {
            message.error("Foydalanuvchini qo'shishda muammo bo'ldi");
            console.error(error);
        },
    });

    const formValidate = () => {
        form.validateFields()
            .then((values) => {
                createUserMutation.mutate({ ...values });
            })
            .catch((info) => {
                console.error("Validate Failed:", info);
            });
    };

    const menu = (
        <Menu
            onClick={onClickGoPage}
            items={[
                {
                    label: "Profil",
                    key: "/profil",
                    icon: <UserOutlined style={{ fontSize: "18px" }} />,
                },
                {
                    key: "/",
                    danger: true,
                    icon: <LogoutOutlined />,
                    label: (
                        <div
                            onClick={(e) => handleLogOut(e)}
                            style={{ width: "100px" }}
                        >
                            Chiqish
                        </div>
                    ),
                },
            ]}
        />
    );

    return (
        <Header
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                position: "sticky",
                top: 0,
                zIndex: 2,
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div className="logo">
                    <Link to="/" style={{ display: "block" }}>
                        <h1
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#ff5722",
                            }}
                        >
                            <img
                                loading="lazy"
                                decoding="async"
                                src={logoSvg}
                                alt="logo"
                                width="80px"
                                height="60px"
                            />
                        </h1>
                    </Link>
                </div>
                <Menu
                    className="inline-navber"
                    theme="dark"
                    defaultSelectedKeys={[location.pathname]}
                    mode="horizontal"
                    onClick={onClickGoPage}
                    style={{ width: "100%", textAlign: "left" }}
                    items={[
                        {
                            label: "Bosh Sahifa",
                            key: "/",
                            icon: (
                                <DashboardOutlined
                                    style={{ fontSize: "18px" }}
                                />
                            ),
                        },
                        {
                            label: "Imtihonlar",
                            key: "/exams",
                            icon: (
                                <UnorderedListOutlined
                                    style={{ fontSize: "18px" }}
                                />
                            ),
                        },
                        user
                            ? {
                                  label: "Qo'shimcha",
                                  key: "/others",
                                  icon: (
                                      <SettingOutlined
                                          style={{ fontSize: "18px" }}
                                      />
                                  ),
                                  children: [
                                      {
                                          label: "Tumanlar",
                                          key: "/others/district",
                                          icon: (
                                              <ProfileOutlined
                                                  style={{
                                                      fontSize: "18px",
                                                  }}
                                              />
                                          ),
                                      },
                                      {
                                          label: "Fanlar",
                                          key: "/others/subject",
                                          icon: (
                                              <OrderedListOutlined
                                                  style={{
                                                      fontSize: "18px",
                                                  }}
                                              />
                                          ),
                                      },
                                      {
                                          label: "O'qituvchilar",
                                          key: "/others/teachers",
                                          icon: (
                                              <OrderedListOutlined
                                                  style={{
                                                      fontSize: "18px",
                                                  }}
                                              />
                                          ),
                                      },
                                      {
                                          label: "Yo'nalishlar",
                                          key: "/others/direction",
                                          icon: (
                                              <OrderedListOutlined
                                                  style={{
                                                      fontSize: "18px",
                                                  }}
                                              />
                                          ),
                                      },
                                      {
                                          label: "Imtixonlar",
                                          key: "/others/exam",
                                          icon: (
                                              <UnorderedListOutlined
                                                  style={{
                                                      fontSize: "18px",
                                                  }}
                                              />
                                          ),
                                      },
                                      {
                                          label: "Qatnashchilar",
                                          key: "/others/candidate",
                                          icon: (
                                              <UserOutlined
                                                  style={{ fontSize: "18px" }}
                                              />
                                          ),
                                      },
                                      {
                                          label: "Kontakt ma'lumotlari",
                                          key: "/others/contacts",
                                          icon: (
                                              <UserOutlined
                                                  style={{ fontSize: "18px" }}
                                              />
                                          ),
                                      },
                                  ],
                              }
                            : null,
                    ]}
                />
                <div style={{ display: "flex" }}>
                    {user ? (
                        <span className={"inlineMenu"}>
                            {user.roles[0] === "SUPER_ADMIN" ? (
                                <div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        onClick={() => {
                                            setVisible(true);
                                        }}
                                    >
                                        <Tooltip title="Admin qo'shish">
                                            <UserAddOutlined
                                                style={{
                                                    fontSize: 30,
                                                    color: "#fff",
                                                    marginRight: 20,
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </Tooltip>
                                    </div>
                                    <Modal
                                        open={visible}
                                        title={"Foydalanuvchi qo'shish"}
                                        okText="Qo'shish"
                                        cancelText="Bekor qilish"
                                        width={350}
                                        onCancel={() => {
                                            setVisible(false);
                                        }}
                                        onOk={formValidate}
                                        forceRender
                                    >
                                        <Form
                                            form={form}
                                            layout="vertical"
                                            name="table_adddata_modal"
                                        >
                                            <Row gutter={12}>
                                                <Col span={24}>
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
                                                <Col span={24}>
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
                                                <Col span={24}>
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
                                                <Col span={24}>
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
                                        </Form>
                                    </Modal>
                                </div>
                            ) : null}
                            <Dropdown
                                menu={menu}
                                overlay={menu}
                                placement="bottomRight"
                                trigger={["click", "hover"]}
                                arrow
                                className="inline-navber"
                            >
                                <Avatar
                                    size="large"
                                    style={{
                                        color: "#f56a00",
                                        backgroundColor: "#fde3cf",
                                        cursor: "pointer",
                                        display: "block",
                                    }}
                                >
                                    {user?.firstName?.charAt(0)}
                                </Avatar>
                            </Dropdown>
                        </span>
                    ) : (
                        <Space className="inline-navber">
                            <Button
                                type="primary"
                                shape="round"
                                ghost
                                onClick={() => navigate("auth/signin")}
                                icon={<LoginOutlined />}
                            >
                                Kirish
                            </Button>
                        </Space>
                    )}
                    <div className="burger-menu">
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MenuOutlined
                                onClick={showDrawer}
                                rotate={180}
                                style={{ fontSize: "28px", color: "#fff" }}
                            />
                            <DrapdownMenu
                                onClose={onClose}
                                isVisible={isVisible}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </Header>
    );
}

export default Navbar;
