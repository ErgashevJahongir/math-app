import { Button, Col, Row } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import exam3 from "../../Assets/Images/Exams-3.svg";

const cardVariants2 = {
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
            duration: 2,
        },
    },
};

const cardVariants3 = {
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
            duration: 2,
        },
    },
};

const OnlineTest = () => {
    const navigate = useNavigate();
    return (
        <div className="textAlignCenter sectionCont onlineTest">
            <div className="container">
                <Row gutter={[16, 16]} justify="space-between">
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
                        className="about__content"
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
                                variants={cardVariants3}
                            >
                                <div>
                                    <div className="sec-title">
                                        <h2>Testlar uchun ro'yxatdan o'tish</h2>
                                        <p
                                            style={{
                                                color: "rgb(49, 70, 89)",
                                                marginBottom: 15,
                                            }}
                                            className="text"
                                        >
                                            “Fanlar bo‘yicha testlar” opsiyasida
                                            tanlangan fan bo‘yicha 30ta test
                                            savoli taqdim etiladi
                                        </p>
                                        <p
                                            style={{
                                                color: "rgb(49, 70, 89)",
                                                marginBottom: 15,
                                            }}
                                            className="text"
                                        >
                                            “Mavzulashtirilgan testlar”
                                            opsiyasida tegishlida fandagi
                                            tanlangan mavzu bo‘yicha test
                                            savollari taqdim etiladi
                                        </p>
                                        <p
                                            style={{
                                                color: "rgb(49, 70, 89)",
                                                marginBottom: 15,
                                            }}
                                            className="text"
                                        >
                                            “Sinov imtihoni” opsiyasida 5ta fan
                                            bo‘yicha DTM standartiga mos 105ta
                                            test savollari taqdim etiladi
                                        </p>
                                        <Button
                                            style={{
                                                backgroundColor:
                                                    "rgb(43,83,144)",
                                                color: "#fff",
                                                padding: "6px 40px",
                                                height: 40,
                                            }}
                                            onClick={() => navigate("/exams")}
                                        >
                                            Testlarga ro'yxatdan o'tish
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={10}
                        xl={10}
                        className="about__imgcontent"
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
                                variants={cardVariants2}
                            >
                                <div>
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        src={exam3}
                                        alt="payment yo'lov usuli haqida"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default OnlineTest;
