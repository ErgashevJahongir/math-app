import { Button, Drawer, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    DashboardOutlined,
    LogoutOutlined,
    LoginOutlined,
    SettingOutlined,
    UserOutlined,
    UnorderedListOutlined,
    ProfileOutlined,
    OrderedListOutlined,
} from "@ant-design/icons";
import useToken from "../../Hook/UseToken";
import { useAuth } from "../../Hook/UseAuth";
import { useData } from "../../Hook/UseData";

function DrapdownMenu({ onClose, isVisible }) {
    const { token } = useToken();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { examsData } = useData();
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

    return (
        <Drawer
            placement="right"
            closable={false}
            size="200px"
            onClose={onClose}
            open={isVisible}
        >
            <Menu
                style={{
                    height: "100%",
                    paddingTop: 10,
                }}
                defaultSelectedKeys={[location.pathname]}
                defaultOpenKeys={["6"]}
                mode="inline"
                theme="dark"
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
                    user
                        ? {
                              label: "Chiqish",
                              key: "/logout",
                              icon: (
                                  <Button
                                      type="link"
                                      onClick={(e) => handleLogOut(e)}
                                      className="logout-btn"
                                  >
                                      <LogoutOutlined
                                          style={{ fontSize: "18px" }}
                                      />
                                  </Button>
                              ),
                          }
                        : {
                              label: "Kirish",
                              key: "/auth/signin",
                              icon: (
                                  <Button
                                      type="link"
                                      onClick={() => navigate("auth/signin")}
                                      className="logout-btn"
                                  >
                                      <LoginOutlined
                                          style={{ fontSize: "18px" }}
                                      />
                                  </Button>
                              ),
                          },
                ]}
            />
        </Drawer>
    );
}

export default DrapdownMenu;
