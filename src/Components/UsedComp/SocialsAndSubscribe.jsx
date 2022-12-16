import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./userComp.css";
import { Col, Row } from "antd";

const SocialsAndSubscribe = () => {
    return (
        <div className="socials">
            <Row gutter={20} style={{ paddingTop: 20, paddingBottom: 40 }}>
                <Col span={24}>
                    <ul className="location_icon">
                        <li>
                            {" "}
                            <Link href="#">
                                <FaTelegram />
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="#">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="#">
                                <FaFacebook />
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link href="#">
                                <FaInstagram />
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <p style={{ marginBottom: 20 }}>
                © Barcha huquqlar himoyalangan 2022. Developed by{" "}
                <a
                    href="https://t.me/muhammadqodir_0612"
                    style={{ textDecoration: "underline" }}
                >
                    Muhammadqadir
                </a>
            </p>
        </div>
    );
};

export default SocialsAndSubscribe;
