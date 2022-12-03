import { Col, Row } from "antd";
// import { motion } from "framer-motion";

const Taklif = () => {
    return (
        <section
            style={{ marginTop: 30, marginBottom: 40, textAlign: "center" }}
        >
            <div className="container">
                <h2
                    style={{
                        marginBottom: 50,
                        fontSize: 32,
                        fontWeight: 600,
                        color: "rgb(49, 70, 89)",
                        lineHeight: 1.5,
                    }}
                    className="future-heading"
                >
                    Biz sizga nima takif qilamiz
                </h2>
                <Row>
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        style={{ marginBottom: 20 }}
                    >
                        <img
                            src="https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 100,
                                height: 100,
                                marginBottom: 20,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
                            Arzon narxlar
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "rgb(49, 70, 89)",
                            }}
                        >
                            Sem integer vitae justo eget magna fermentum iaculis
                        </p>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        style={{ marginBottom: 20 }}
                    >
                        <img
                            src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png"
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 100,
                                height: 100,
                                marginBottom: 20,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
                            Qiyinlashtirilgan testlar
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "rgb(49, 70, 89)",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        style={{ marginBottom: 20 }}
                    >
                        <img
                            src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png"
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 100,
                                height: 100,
                                marginBottom: 20,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
                            Bilim darajangizni oshirish
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "rgb(49, 70, 89)",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                        </p>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Taklif;
