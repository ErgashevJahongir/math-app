import { Col, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";
import CondidateRegister from "./CondidateRegister";
import { useData } from "../../Hook/UseData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper";
import { motion } from "framer-motion";
import moment from "moment";
import "swiper/css";
import "swiper/css/pagination";
import "./userComp.css";

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

const OurExams = () => {
    const { examsData } = useData();
    const navigate = useNavigate();

    return (
        <section className="textAlignCenter sectionCont">
            <div className="container">
                <h2 className="future-heading">Imtihonlar</h2>
                {examsData.length < 3 ? (
                    <Row gutter={[20, 20]}>
                        {examsData.map((item, key) => {
                            return (
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                    lg={8}
                                    xl={8}
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
                                                    src="https://validthemes.tech/templatebucket/lasson/lasson/assets/img/course/course-2.jpg"
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
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <p className="exam-text">
                                                        Narxi: {item.price} so'm
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
                ) : (
                    <div>
                        <div style={{ marginBottom: 15 }}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                                breakpoints={{
                                    700: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Autoplay, Keyboard, Pagination]}
                                className="examsSwipwr"
                            >
                                {examsData.map((item, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Col>
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
                                                                src="https://validthemes.tech/templatebucket/lasson/lasson/assets/img/course/course-2.jpg"
                                                                alt="sratistic"
                                                                style={{
                                                                    display:
                                                                        "inline-block",
                                                                    width: "100%",
                                                                    height: "auto",
                                                                    marginBottom: 10,
                                                                }}
                                                            />
                                                            <h3 className="itemTitleH3">
                                                                {item.title}
                                                            </h3>
                                                            <Space
                                                                style={{
                                                                    marginBottom: 10,
                                                                }}
                                                            >
                                                                <span>
                                                                    Bo'lish
                                                                    vaqti:
                                                                </span>
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
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "space-between",
                                                                    alignItems:
                                                                        "center",
                                                                }}
                                                            >
                                                                <p className="exam-text">
                                                                    Narxi:{" "}
                                                                    {item.price}{" "}
                                                                    so'm
                                                                </p>
                                                                <CondidateRegister
                                                                    examId={
                                                                        item.id
                                                                    }
                                                                    amaunt={
                                                                        item.price
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <button
                            className="subscribe"
                            style={{
                                marginLeft: 0,
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                            onClick={() => navigate("exams")}
                        >
                            Hammasini ko'rish
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OurExams;
