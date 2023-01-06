import { Spin } from "antd";
import logoSvg from "../Assets/Images/logo-math-qora.svg";

const Loading = () => (
    <div className="example">
        <img
            src={logoSvg}
            alt="logo Qorako'l Navoiy o'quv markazi"
            width={120}
            style={{ marginBottom: 15 }}
        />
        <Spin size="large" />
    </div>
);

export default Loading;
