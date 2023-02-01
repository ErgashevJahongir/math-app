import { Button, Col, Row } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import exam1 from "../../Assets/Images/Exams-1.svg";
import exam2 from "../../Assets/Images/Exams-2.svg";
import exam3 from "../../Assets/Images/Exams-3.svg";

const cardVariants = {
    offscreen: {
        opacity: 0,
        scale: 0.8,
        x: -200,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2,
        },
    },
};

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
                {/* <h2 className="future-heading">Testlar</h2> */}
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
                                                // lineHeight: 1.5,
                                                // fontSize: 16,
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
                                                // lineHeight: 1.5,
                                                // fontSize: 16,
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
                                                // lineHeight: 1.5,
                                                // fontSize: 16,
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
                                        src={exam3}
                                        alt="payment yo'lov usuli haqida"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
                {/* <Row gutter={30}>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div
                                className="card"
                                variants={cardVariants}
                                transition={{ duration: 0.2 }}
                            >
                                <img
                                    src={exam1}
                                    alt="Fanlar bo‘yicha testlar"
                                    style={{
                                        display: "inline-block",
                                        width: 300,
                                        height: 300,
                                        marginBottom: 5,
                                    }}
                                />
                                <h3 className="itemTitleH3">
                                    Fanlar bo‘yicha testlar
                                </h3>
                                <p
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: 16,
                                        color: "rgb(49, 70, 89)",
                                        marginBottom: 15,
                                    }}
                                >
                                    “Fanlar bo‘yicha testlar” opsiyasida
                                    tanlangan fan bo‘yicha 30ta test savoli
                                    taqdim etiladi
                                </p>
                                <Button
                                    style={{
                                        backgroundColor: "rgb(43,83,144)",
                                        color: "#fff",
                                        padding: "6px 40px",
                                        height: 40,
                                    }}
                                    onClick={() => navigate("/exams")}
                                >
                                    Ro'yxatdan o'tish
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div
                                className="card"
                                variants={cardVariants}
                                transition={{ duration: 0.2 }}
                            >
                                <img
                                    src={exam2}
                                    alt="Mavzulashtirilgan testlar"
                                    style={{
                                        display: "inline-block",
                                        width: 300,
                                        height: 300,
                                        marginBottom: 5,
                                    }}
                                />
                                <h3 className="itemTitleH3">
                                    Mavzulashtirilgan testlar
                                </h3>
                                <p
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: 16,
                                        color: "rgb(49, 70, 89)",
                                        marginBottom: 15,
                                    }}
                                >
                                    “Mavzulashtirilgan testlar” opsiyasida
                                    tegishlida fandagi tanlangan mavzu bo‘yicha
                                    test savollari taqdim etiladi
                                </p>
                                <Button
                                    style={{
                                        backgroundColor: "rgb(43,83,144)",
                                        color: "#fff",
                                        padding: "6px 40px",
                                        height: 40,
                                    }}
                                    onClick={() => navigate("/exams")}
                                >
                                    Ro'yxatdan o'tish
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div
                                className="card"
                                variants={cardVariants}
                                transition={{ duration: 0.2 }}
                            >
                                <img
                                    src={exam3}
                                    alt="Sinov imtihonini topshirish"
                                    style={{
                                        display: "inline-block",
                                        width: 300,
                                        height: 300,
                                        marginBottom: 5,
                                    }}
                                />
                                <h3 className="itemTitleH3">
                                    Sinov imtihonini topshirish
                                </h3>
                                <p
                                    style={{
                                        lineHeight: 1.5,
                                        fontSize: 16,
                                        color: "rgb(49, 70, 89)",
                                        marginBottom: 15,
                                    }}
                                >
                                    “Sinov imtihoni” opsiyasida 5ta fan bo‘yicha
                                    DTM standartiga mos 105ta test savollari
                                    taqdim etiladi
                                </p>
                                <Button
                                    style={{
                                        backgroundColor: "rgb(43,83,144)",
                                        color: "#fff",
                                        padding: "6px 40px",
                                        height: 40,
                                    }}
                                    onClick={() => navigate("/exams")}
                                >
                                    Ro'yxatdan o'tish
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row> */}
            </div>
        </div>
    );
};

export default OnlineTest;
