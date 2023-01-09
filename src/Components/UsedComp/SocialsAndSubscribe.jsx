import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import "./userComp.css";
import { Col, Row } from "antd";

const SocialsAndSubscribe = ({ contact }) => {
    return (
        <div className="socials">
            <Row gutter={20} style={{ paddingTop: 20, paddingBottom: 40 }}>
                <Col span={24}>
                    <ul className="location_icon">
                        <li>
                            {" "}
                            <a href={`https://t.me/${contact?.telegramName}`}>
                                <FaTelegram />
                            </a>
                        </li>
                        <li>
                            {" "}
                            <Link href="#">
                                <FaFacebook />
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <a
                                href={`https://www.instagram.com/${contact?.instagramName}`}
                            >
                                <FaInstagram />
                            </a>
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
                    Muhammadqodir
                </a>
            </p>
        </div>
    );
};

export default SocialsAndSubscribe;
