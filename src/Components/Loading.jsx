import { Spin } from "antd";
import logoSvg from "../Assets/Images/logo-math-qora.svg";

const Loading = () => (
    <div className="example">
        {/* Rasm masalasi bu yerda rasmni hajmini ekran sizega moslash kerak, kichik ekranda hajmi kichikroq rasm joylang */}
        {/* https://www.linkedin.com/posts/cyrus-zachariah-81612711_are-you-loading-images-as-optimally-as-you-ugcPost-7024945165647646720-9P-t?utm_source=share&utm_medium=member_ios */}
        {/* shu yerda image optimisation keltirilgan */}
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
