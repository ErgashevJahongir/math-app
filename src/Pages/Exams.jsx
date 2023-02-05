import { Col, Row, Space } from "antd";
import { motion } from "framer-motion";
import moment from "moment";
import CondidateRegister from "../Components/UsedComp/CondidateRegister";
import "../Components/UsedComp/userComp.css";
import { useData } from "../Hook/UseData";
import pana from "../Assets/Images/Editing-body-text-rafiki.svg";
import rfiki from "../Assets/Images/Online-test-rafiki.svg";

const cardVariants = {
    offscreen: {
        opacity: 0,
        scale: 0.8,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.1,
        },
    },
};

const Exams = () => {
    const { examsData } = useData();

    return (
        <section className="examsData textAlignCenter sectionCont">
            <div className="container">
                <h2 className="future-heading">Imtihonlar</h2>
                <Row gutter={[20, 20]}>
                    {examsData.map((item, key) => {
                        return (
                            <Col
                                xs={24}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={8}
                                xxl={6}
                                key={key}
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
                                        whileHover={{
                                            scale: [1, 1.01],
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        <div className="examCard">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                src={
                                                    key % 2 === 1 ? rfiki : pana
                                                }
                                                alt="sratistic"
                                                style={{
                                                    display: "inline-block",
                                                    width: "100%",
                                                    height: "auto",
                                                    marginBottom: 10,
                                                }}
                                            />
                                            <h3 className="itemTitleH3">
                                                {item.title}
                                            </h3>
                                            <Space style={{ marginBottom: 10 }}>
                                                <span>Bo'lish vaqti:</span>
                                                <span>
                                                    {moment(
                                                        item.startedDate
                                                    ).format(
                                                        "YYYY-MM-DD hh:mm"
                                                    )}
                                                </span>
                                            </Space>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        lineHeight: 1.5,
                                                        fontWeight: 600,
                                                        fontSize: 16,
                                                        color: "rgb(49, 70, 89)",
                                                    }}
                                                >
                                                    Narxi: {item.price} So'm
                                                </p>

                                                <CondidateRegister
                                                    examId={item.id}
                                                    amaunt={item.price}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </section>
    );
};

export default Exams;
