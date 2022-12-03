import { Col, Row } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import "./Contact.css";

const Contacts = () => {
    return (
        <section className="contact">
            <div className="container">
                <h2>Kontaktlar</h2>
                <Row gutter={20}>
                    <Col
                        xs={24}
                        sm={12}
                        md={8}
                        lg={6}
                        xl={6}
                        style={{ marginBottom: 20 }}
                    >
                        <h3
                            style={{
                                fontSize: 20,
                                fontWeight: 600,
                                color: "#fff",
                                lineHeight: "24px",
                                marginBottom: 10,
                            }}
                        >
                            Manzilimiz
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "#fff",
                                marginBottom: 20,
                            }}
                        >
                            O'zbekiston, TOSHKENT, Mirzo-Ulug'bek BUYUK IPAK
                            YO'LI ko'chasi, 115 uy
                        </p>
                        <h3
                            style={{
                                fontSize: 20,
                                fontWeight: 600,
                                color: "#fff",
                                lineHeight: "24px",
                                marginBottom: 10,
                            }}
                        >
                            Telefon nomerlarimiz
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: 5,
                            }}
                        >
                            <PhoneOutlined style={{ fontSize: "18px" }} />
                            <p
                                style={{
                                    lineHeight: 1.5,
                                    fontSize: 16,
                                    color: "#fff",
                                    marginLeft: 10,
                                }}
                            >
                                +998911236353
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: 20,
                            }}
                        >
                            <PhoneOutlined style={{ fontSize: "18px" }} />
                            <p
                                style={{
                                    lineHeight: 1.5,
                                    fontSize: 16,
                                    color: "#fff",
                                    marginLeft: 10,
                                }}
                            >
                                +998911236353
                            </p>
                        </div>
                        <h3
                            style={{
                                fontSize: 20,
                                fontWeight: 600,
                                color: "#fff",
                                lineHeight: "24px",
                                marginBottom: 10,
                            }}
                        >
                            Elektron manzilimiz
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: 5,
                            }}
                        >
                            <MailOutlined style={{ fontSize: "18px" }} />
                            <p
                                style={{
                                    lineHeight: 1.5,
                                    fontSize: 16,
                                    color: "#fff",
                                    marginLeft: 10,
                                }}
                            >
                                new-centername@mail.ru
                            </p>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={16}
                        lg={18}
                        xl={18}
                        style={{ marginBottom: 20 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.629984716106!2d65.37459509943395!3d40.10704417012549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c70627169851%3A0x6ebac45bbfcc24d5!2s%22Elegant%22%20o&#39;quv%20markazi!5e0!3m2!1suz!2s!4v1670030850357!5m2!1suz!2s"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Contacts;
