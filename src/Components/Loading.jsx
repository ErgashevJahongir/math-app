import { Spin } from "antd";
import logoSvg from "../Assets/Images/logo-math-qora.svg";

const Loading = () => (
    <div className="example">
        <img
            loading="lazy"
            decoding="async"
            src={logoSvg}
            alt="logo Qorako'l Navoiy o'quv markazi"
            width={120}
            height={90}
            style={{ marginBottom: 15 }}
        />
        <Spin size="large" />
    </div>
);

export default Loading;
