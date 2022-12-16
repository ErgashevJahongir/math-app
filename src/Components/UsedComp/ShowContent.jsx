import { Button, Col, Row } from "antd";
import { motion } from "framer-motion";
import { PhoneOutlined } from "@ant-design/icons";
import rasm from "./Formula-amico.svg";
import "./showContent.css";

const cardVariants = {
    offscreen: {
        opacity: 0,
        x: 200,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 3,
        },
    },
};

const cardVariants1 = {
    offscreen: {
        opacity: 0,
        x: -200,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 3,
        },
    },
};

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
                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{
                                once: true,
                                amount: 0.8,
                            }}
                        >
                            <motion.div
                                className="card"
                                variants={cardVariants1}
                            >
                                <h1>
                                    10 oyda <br /> Talaba bo'l!
                                </h1>
                                <div className="text">
                                    <p>
                                        Bizning o'quv markaz 2010-yildan buyon
                                        faoliyat yuritib keladi. Har yili
                                        o'quvchilarimizning <b>90%</b>{" "}
                                        abiturient talaba bo'lishmoqda!
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
                                                        }}
                                                    />
                                                </span>
                                            </a>
                                        </div>
                                        <div className="circle1"></div>
                                        <div className="circle2"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={10}
                        xl={10}
                        className="showcontent__imgcontent"
                    >
                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{
                                once: true,
                                amount: 0.8,
                            }}
                        >
                            <motion.div
                                className="card"
                                variants={cardVariants}
                            >
                                <img
                                    src={rasm}
                                    alt="show content img, test exam"
                                />
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ShowContent;
