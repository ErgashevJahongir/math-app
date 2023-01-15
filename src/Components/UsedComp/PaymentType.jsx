import { Col, Row } from "antd";
import { motion } from "framer-motion";
import center from "../../Assets/Images/PaymentType.svg";
import payme from "../../Assets/Images/payme_01.svg";

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

const PaymentType = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <Row gutter={[16, 16]}>
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
                                        <h2>
                                            To'lov uchun faqat telefon yetarli
                                        </h2>
                                        <div className="text">
                                            Jismoniy bank kartalari va naqd pul
                                            mablag'laridan ko'ra qulay va
                                            xavfsizroq, bundan tashqari Sizning
                                            shaxsiy ma'lumotlaringizni
                                            do'konlarda to'lov jarayonida
                                            himoyalashga yordam beradi.
                                            <br />
                                            <br />
                                        </div>
                                        <img
                                            src={payme}
                                            alt="payme icon"
                                            width={130}
                                            style={{
                                                padding: "6px 10px 5px",
                                                borderRadius: 5,
                                                backgroundColor: "#eee",
                                            }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
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
                                        src={center}
                                        alt="payment yo'lov usuli haqida"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default PaymentType;
