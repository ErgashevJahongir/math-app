import { Col, Row } from "antd";
// import { motion } from "framer-motion";

const Taklif = () => {
    return (
        <section className="textAlignCenter sectionCont">
            <div className="container">
                <h2 className="future-heading">Biz sizga nima takif qilamiz</h2>
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
                        <h3 className="itemTitleH3">Arzon narxlar</h3>
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
                        <h3 className="itemTitleH3">
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
                        <h3 className="itemTitleH3">
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
