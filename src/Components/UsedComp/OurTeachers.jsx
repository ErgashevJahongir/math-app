import { Col } from "antd";
import { motion } from "framer-motion";
import teacher from "./jo5avbdelzqwm6avdw6p-removebg-preview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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

const OurTeachers = () => {
    return (
        <div className="textAlignCenter sectionCont teachersCont">
            <div className="container">
                <h2 className="future-heading">Bizning O'qituvchilar</h2>
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
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Keyboard, Pagination]}
                    className="teachersSwipwr"
                >
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                <motion.div
                                    className="card"
                                    variants={cardVariants}
                                    whileHover={{ scale: [1, 1.03] }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={teacher}
                                        alt="sratistic"
                                        style={{
                                            display: "inline-block",
                                            width: 300,
                                            height: 300,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <h3 className="itemTitleH3">
                                        Azamat Nortojiyev
                                    </h3>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Biologiya fani o'qituvchisi
                                    </p>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OurTeachers;
