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
    const { user, signOut } = useAuth();
    const { examsData } = useData();
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
                defaultOpenKeys={["/others"]}
                onClick={onClickGoPage}
                mode="inline"
                theme="dark"
                items={[
                    {
                        label: "Bosh Sahifa",
                        key: "/",
                        icon: (
                            <DashboardOutlined style={{ fontSize: "18px" }} />
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
                                              <ProfileOutlined
                                                  style={{
                                                      fontSize: "18px",
                                                  }}
                                              />
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
