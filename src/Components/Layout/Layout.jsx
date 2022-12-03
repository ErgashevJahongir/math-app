import { Layout, FloatButton } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const { Content } = Layout;

function LayoutMenu() {
    return (
        <Layout>
            <Layout className="site-layout">
                <Navbar />
                <Content
                    className="site-layout-background"
                    style={{
                        minHeight: "calc(100vh - 115px)",
                    }}
                >
                    <FloatButton.BackTop />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutMenu;
