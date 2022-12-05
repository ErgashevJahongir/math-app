import { Avatar, Button, Dropdown, Layout, Menu, Space } from "antd";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useToken from "../../Hook/UseToken";
import DrapdownMenu from "./DrapdownMenu";
import { useAuth } from "../../Hook/UseAuth";
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
} from "@ant-design/icons";
import logoSvg from "./logo-math.svg";

const { Header } = Layout;

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { user, signOut } = useAuth();
    const { token } = useToken();
    const { examIdWith } = useParams();
    const { setExamIdWithUrl } = useTable();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogOut = (e) => {
        e.preventDefault();
        if (sessionStorage.getItem("math-test-app"))
            sessionStorage.removeItem("math-test-app", token);
        if (sessionStorage.getItem("math-test-app")) {
            sessionStorage.removeItem("math-test-app", token);
        }
        signOut(() => signOut(() => navigate("/", { replace: true })));
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

    const menu = (
        <Menu
            items={[
                {
                    key: "2",
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
                zIndex: 1,
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
                            <img src={logoSvg} alt="logo" width={80} />
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
                                  ],
                              }
                            : null,
                    ]}
                />
                {user ? (
                    <span className={"inline-navber"}>
                        <Dropdown
                            menu={menu}
                            overlay={menu}
                            placement="bottomRight"
                            trigger={["click", "hover"]}
                            arrow
                        >
                            <Avatar
                                size="large"
                                style={{
                                    color: "#f56a00",
                                    backgroundColor: "#fde3cf",
                                    cursor: "pointer",
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
                        <DrapdownMenu onClose={onClose} isVisible={isVisible} />
                    </span>
                </div>
            </div>
        </Header>
    );
}

export default Navbar;
