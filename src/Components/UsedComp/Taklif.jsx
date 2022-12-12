import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const cardVariants = {
    offscreen: {
        y: 400,
        opacity: 0,
        scale: 0.5,
    },
    onscreen: {
        y: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            delay: 0.3,
            bounce: 0.3,
            duration: 1,
        },
    },
};
const cardVariants1 = {
    offscreen: {
        y: 400,
        opacity: 0,
        scale: 0.5,
    },
    onscreen: {
        y: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            delay: 0.8,
            bounce: 0.3,
            duration: 1,
        },
    },
};
const cardVariants2 = {
    offscreen: {
        y: 400,
        opacity: 0,
        scale: 0.5,
    },
    onscreen: {
        y: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            delay: 1.3,
            bounce: 0.3,
            duration: 1,
        },
    },
};

const Taklif = () => {
    return (
        <section className="textAlignCenter sectionCont">
            <div className="container">
                <h2 style={{ marginBottom: 20 }}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Navoiy Qorako'l o'quv markazi")
                                .start();
                        }}
                        options={{
                            delay: 70,
                        }}
                    />
                </h2>
                <Row>
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        style={{
                            marginBottom: 20,
                        }}
                    >
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 1 }}
                        >
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: [1, 1.03] }}
                                transition={{ duration: 0.4 }}
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
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        style={{ marginBottom: 20 }}
                    >
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 1 }}
                        >
                            <motion.div
                                variants={cardVariants1}
                                whileHover={{ scale: [1, 1.03] }}
                                transition={{ duration: 0.4 }}
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
                            </motion.div>
                        </motion.div>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        style={{ marginBottom: 20 }}
                    >
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 1 }}
                        >
                            <motion.div
                                variants={cardVariants2}
                                whileHover={{ scale: [1, 1.03] }}
                                transition={{ duration: 0.4 }}
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
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Taklif;
