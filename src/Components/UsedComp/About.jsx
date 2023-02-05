import { Col, Row } from "antd";
import { motion } from "framer-motion";
import center from "./Mathematics-amico.svg";
import "./about.css";
import CountUp from "react-countup";

const cardVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
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

const cardVariants1 = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 4,
        },
    },
};

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <Row gutter={[16, 16]}>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
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
                                        alt="education center img"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
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
                                        <h2>Biz haqimizda</h2>
                                        <div className="text">
                                            Navoiy Qorako'l o‘quv markazi
                                            2010-yildan o‘z faoliyatini
                                            boshlagan. Ushbu qisqa vaqt
                                            mobaynida 2000 nafardan ziyod
                                            abituriyentlarni Oliy o‘quv
                                            yutlariga tayyorlagan.
                                            <br />
                                            <br />
                                            Bizning bitiruvchilarimiz
                                            O‘zbekistonning eng nufuzli Oliy
                                            o‘quv yurtlarining talabalari bo‘lib
                                            kelmoqda. O‘quv markazi tashkil
                                            etilishidan maqsad abituriyentlarni
                                            qisqa muddatda (10 oyda) talabalik
                                            baxtiga muyassar etish.
                                        </div>
                                    </div>
                                    <div className="count">
                                        <Row>
                                            <Col span={12}>
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
                                                        <div className="counter-number">
                                                            <CountUp
                                                                className="number-son"
                                                                start={0}
                                                                end={2010}
                                                                duration={3}
                                                                delay={4}
                                                                enableScrollSpy
                                                            />
                                                            +
                                                        </div>
                                                        <h4 className="counter-title">
                                                            2000 dan ortiq
                                                            talabalar
                                                        </h4>
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                            <Col span={12}>
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
                                                        <div className="counter-number">
                                                            <CountUp
                                                                className="number-son"
                                                                start={0}
                                                                end={12}
                                                                duration={3}
                                                                delay={4}
                                                                enableScrollSpy
                                                            />
                                                        </div>
                                                        <h4 className="counter-title">
                                                            yillik tajriba
                                                        </h4>
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={12}>
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
                                                        <div className="counter-number">
                                                            <CountUp
                                                                className="number-son"
                                                                start={0}
                                                                end={35}
                                                                duration={3}
                                                                delay={4}
                                                                enableScrollSpy
                                                            />
                                                        </div>
                                                        <h4 className="counter-title">
                                                            ortiq tajribali
                                                            ustozlar
                                                        </h4>
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                            <Col span={12}>
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
                                                        <div className="counter-number">
                                                            <CountUp
                                                                className="number-son"
                                                                start={0}
                                                                end={90}
                                                                duration={3}
                                                                delay={4}
                                                                enableScrollSpy
                                                            />
                                                            %
                                                        </div>
                                                        <h4 className="counter-title">
                                                            muvaffaqiyat
                                                        </h4>
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default About;
