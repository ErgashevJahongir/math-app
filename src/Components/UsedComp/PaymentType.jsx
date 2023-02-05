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
                                            Onlayn to‘lov tizimi imtihon
                                            topshiruvchilar uchun afzallik
                                            ekanini isbotlamoqda, chunki ular
                                            endi o‘z telefonlari orqali test
                                            to‘lovini bemalol to‘lashlari
                                            mumkin. Bu nafaqat imtihon
                                            topshiruvchilarning vaqtini va
                                            mehnatini qisqartiradi, balki to‘lov
                                            jarayonini ham qulaylashtiradi.
                                            Bundan tashqari, u hech qanday
                                            muammosiz tez va samarali to'lovni
                                            amalga oshirish imkonini berdi.
                                            Ushbu tizim bo'lajak imtihonga
                                            tayyorlanishni intiqlik bilan
                                            kutayotgan barcha imtihon
                                            topshiruvchilar uchun katta foyda va
                                            bo'lajak imtihonga tayyorlanishni
                                            boshlashlari mumkin.
                                            <br />
                                            <br />
                                        </div>
                                        <img
                                            loading="lazy"
                                            decoding="async"
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
                                        loading="lazy"
                                        decoding="async"
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
