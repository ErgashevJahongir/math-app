import { Col } from "antd";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import english from "../../Assets/Images/English-teacher-rafiki.svg";
import math from "../../Assets/Images/Professor-amico.svg";

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

const Courses = () => {
    return (
        <section className="courses textAlignCenter" id="courses">
            <div className="container">
                <h2 className="future-heading">Kurslar</h2>
                <h3 className="courses-title">
                    O'quv markazimizdagi eng ommabop kurslar bilan tanishing
                </h3>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
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
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay, Keyboard, Pagination]}
                    className="teachersSwipwr"
                >
                    <SwiperSlide>
                        <Col className="courses__card">
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
                                        src={math}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            marginBottom: 5,
                                        }}
                                    />
                                    <div className="courses__card-title">
                                        <h3 className="itemTitleH3">
                                            Matematika
                                        </h3>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col className="courses__card">
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
                                        src={english}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            marginBottom: 5,
                                        }}
                                    />
                                    <div className="courses__card-title">
                                        <h3 className="itemTitleH3">
                                            Ingliz tili
                                        </h3>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col className="courses__card">
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
                                        src={math}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            marginBottom: 5,
                                        }}
                                    />
                                    <div className="courses__card-title">
                                        <h3 className="itemTitleH3">
                                            Matematika
                                        </h3>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Courses;
