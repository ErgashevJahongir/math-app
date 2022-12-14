import { Button, Col, Row } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import rasm from "./Formula-amico.svg";
import "./showContent.css";

const ShowContent = () => {
    return (
        <section className="showcontent">
            <div className="container">
                <Row className="showwrapper" gutter={[16, 16]}>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={10}
                        xl={10}
                        className="showcontent__textcontent"
                    >
                        <h1>
                            10 oyda <br /> Talaba bo'l!
                        </h1>
                        <div className="text">
                            <p>
                                Bizning o'quv markaz 2010-yildan buyon faoliyat
                                yuritib keladi. Har yili o'quvchilarimizning{" "}
                                <b>90%</b> abiturient talaba bo'lishmoqda!
                            </p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <a href="#contact">
                                <Button className="register-btn">
                                    Hoziroq Bog'laning
                                </Button>
                            </a>
                            <div className="call-phone">
                                <div className="phone">
                                    <a href="tel:+998903778990">
                                        <span class="material-icons">
                                            <PhoneOutlined
                                                style={{
                                                    color: "#fff",
                                                    fontSize: 22,
                                                }}
                                            />
                                        </span>
                                    </a>
                                </div>
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={10}
                        xl={10}
                        className="showcontent__imgcontent"
                    >
                        <img src={rasm} alt="show content image, test exam" />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ShowContent;
