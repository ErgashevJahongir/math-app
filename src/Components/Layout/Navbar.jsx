import { Avatar, Button, Dropdown, Layout, Menu, Space } from "antd";
import { useState, useEffect } from "react";
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
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useToken from "../../Hook/UseToken";
import DrapdownMenu from "./DrapdownMenu";
import { useAuth } from "../../Hook/UseAuth";
import { useTable } from "../../Hook/UseTable";
import { useData } from "../../Hook/UseData";

const { Header } = Layout;

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { user } = useAuth();
    const { token } = useToken();
    const { examsData } = useData();
    const { examIdWith } = useParams();
    const { setExamIdWithUrl } = useTable();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogOut = (e) => {
        e.preventDefault();
        if (sessionStorage.getItem("math-test-app"))
            sessionStorage.removeItem("math-test-app", token);
        if (localStorage.getItem("math-test-app")) {
            localStorage.removeItem("math-test-app", token);
        }
        navigate("/auth/signin");
    };

    useEffect(() => {
        setExamIdWithUrl(examIdWith);
    }, [examIdWith]);

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
                    <Link
                        to="/"
                        style={{ marginTop: "10px", display: "block" }}
                    >
                        <h1
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#ff5722",
                            }}
                        >
                            LOGO
                            <i
                                className="bx bxs-gas-pump"
                                style={{ marginLeft: "10px", fontSize: "26px" }}
                            />
                        </h1>
                    </Link>
                </div>
                <Menu
                    className="inline-navber"
                    theme="dark"
                    defaultSelectedKeys={[location.pathname]}
                    mode="horizontal"
                    items={[
                        {
                            label: "Bosh Sahifa",
                            key: "/",
                            icon: (
                                <Link to="/">
                                    <DashboardOutlined
                                        style={{ fontSize: "18px" }}
                                    />
                                </Link>
                            ),
                        },
                        {
                            label: "Imtihonlar",
                            key: "/exams",
                            icon: (
                                <Link to="/exams">
                                    <UnorderedListOutlined
                                        style={{ fontSize: "18px" }}
                                    />
                                </Link>
                            ),
                        },
                        user
                            ? {
                                  label: "Qo'shimcha",
                                  key: "/others",
                                  icon: (
                                      <Link to="/others">
                                          <SettingOutlined
                                              style={{ fontSize: "18px" }}
                                          />
                                      </Link>
                                  ),
                                  children: [
                                      {
                                          label: "Tumanlar",
                                          key: "/others/district",
                                          icon: (
                                              <Link to="/others/district">
                                                  <ProfileOutlined
                                                      style={{
                                                          fontSize: "18px",
                                                      }}
                                                  />
                                              </Link>
                                          ),
                                      },
                                      {
                                          label: "Fanlar",
                                          key: "/others/subject",
                                          icon: (
                                              <Link to="/others/subject">
                                                  <OrderedListOutlined
                                                      style={{
                                                          fontSize: "18px",
                                                      }}
                                                  />
                                              </Link>
                                          ),
                                      },
                                      {
                                          label: "Imtixonlar",
                                          key: "/others/exam",
                                          icon: (
                                              <Link to="/others/exam">
                                                  <UnorderedListOutlined
                                                      style={{
                                                          fontSize: "18px",
                                                      }}
                                                  />
                                              </Link>
                                          ),
                                      },
                                      {
                                          label: "Qatnashchilar",
                                          key: "/others/condidates",
                                          icon: (
                                              <UserOutlined
                                                  style={{ fontSize: "18px" }}
                                              />
                                          ),
                                          children: examsData.map((item) => ({
                                              label: item.title,
                                              key: `/others/condidates/${item.id}`,
                                              icon: (
                                                  <Link to="/others/condidates/1">
                                                      <ProfileOutlined
                                                          style={{
                                                              fontSize: "18px",
                                                          }}
                                                      />
                                                  </Link>
                                              ),
                                          })),
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
