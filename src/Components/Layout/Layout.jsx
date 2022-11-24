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
                        margin: "12px 8px",
                        padding: 12,
                        minHeight: "calc(100vh - 115px)",
                    }}
                >
                    <div className="container">
                        <FloatButton.BackTop />
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutMenu;
