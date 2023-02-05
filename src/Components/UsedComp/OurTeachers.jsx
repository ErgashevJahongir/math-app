import { Col } from "antd";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useData } from "../../Hook/UseData";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

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
    const { teachersData } = useData();
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
                    {teachersData?.map((item) => {
                        return (
                            <SwiperSlide key={item?.id}>
                                <Col>
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
                                                loading="lazy"
                                                decoding="async"
                                                src={`${REACT_APP_BASE_URL}/api/file/downloadFile?fileName=${item?.photoPath}`}
                                                alt={item?.name}
                                                style={{
                                                    display: "inline-block",
                                                    width: 300,
                                                    height: 300,
                                                    marginBottom: 5,
                                                }}
                                            />
                                            <h3 className="itemTitleH3">
                                                {item?.name}
                                            </h3>
                                            <p
                                                style={{
                                                    lineHeight: 1.5,
                                                    fontSize: 16,
                                                    color: "rgb(49, 70, 89)",
                                                }}
                                            >
                                                {item?.subjectId?.name}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </Col>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default OurTeachers;
