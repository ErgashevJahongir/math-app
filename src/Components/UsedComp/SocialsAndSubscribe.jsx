import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./userComp.css";
import { Col, Input, Row } from "antd";

const SocialsAndSubscribe = () => {
    return (
        <div className="socials">
            <div className="container">
                <Row
                    gutter={[20, 20]}
                    style={{ paddingTop: 30, paddingBottom: 30 }}
                >
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <div className="Follow">
                            <h3>Ijtimoiy tarmoqlarda bizga azo bo'ling!</h3>
                        </div>
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
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <div className="Follow">
                            <h3>To'liq ma'lumot oling</h3>
                            <p>
                                Siz telefon nomeringizni qoldiring, biz siz
                                bilan bog'lanamiz va sizga to'liq malumot
                                beramiz
                            </p>
                        </div>
                        <div style={{ display: "flex" }} className="input-com">
                            <Input
                                placeholder="Telefon nomeringizni kiriting"
                                style={{
                                    maxWidth: 400,
                                    padding: "8px 0 8px 30px",
                                }}
                            />
                            <button className="subscribe">Subscribe</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SocialsAndSubscribe;
