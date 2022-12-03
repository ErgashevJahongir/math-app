import { Col, Row } from "antd";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./userComp.css";
import { useNavigate } from "react-router-dom";
import CondidateRegister from "./CondidateRegister";
import { useData } from "../../Hook/UseData";

const OurExams = () => {
    const [open, setOpen] = useState(false);
    const { examsData } = useData();
    const navigate = useNavigate();
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section style={{ marginBottom: 40, textAlign: "center" }}>
            <div className="container">
                <h2
                    style={{
                        marginBottom: 50,
                        fontSize: 32,
                        fontWeight: 600,
                        color: "rgb(49, 70, 89)",
                        lineHeight: 1.5,
                    }}
                    className="future-heading"
                >
                    Imtihonlar
                </h2>
                {examsData.length < 3 ? (
                    <Row gutter={[20, 20]}>
                        {examsData.map((item, key) => {
                            return (
                                <Col
                                    xs={24}
                                    sm={12}
                                    md={12}
                                    lg={8}
                                    xl={8}
                                    key={key}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#3497D935",
                                            padding: "20px 20px 30px 20px",
                                            borderRadius: 12,
                                        }}
                                    >
                                        <img
                                            src="https://validthemes.tech/templatebucket/lasson/lasson/assets/img/course/course-2.jpg"
                                            alt="sratistic"
                                            style={{
                                                display: "inline-block",
                                                width: "100%",
                                                height: "auto",
                                                marginBottom: 10,
                                            }}
                                        />
                                        <h3
                                            style={{
                                                fontSize: 24,
                                                fontWeight: 600,
                                                color: "rgb(49, 70, 89)",
                                                lineHeight: "32px",
                                                marginBottom: 10,
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    lineHeight: 1.5,
                                                    fontWeight: 600,
                                                    fontFamily:
                                                        "Poppins, sans-serif",
                                                    fontSize: 16,
                                                    color: "rgb(49, 70, 89)",
                                                }}
                                            >
                                                Narxi: {item.price} So'm
                                            </p>
                                            <button
                                                className="subscribe"
                                                style={{ padding: "10px 20px" }}
                                                onClick={showDrawer}
                                            >
                                                Ro'yxatdan o'tish
                                            </button>
                                            <CondidateRegister
                                                open={open}
                                                onClose={onClose}
                                                examId={item.id}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                ) : (
                    <div>
                        <div style={{ marginBottom: 55 }}>
                            <Slider {...settings}>
                                {examsData.map((item, key) => {
                                    return (
                                        <Col key={key}>
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        "#3497D935",
                                                    padding:
                                                        "20px 20px 30px 20px",
                                                    borderRadius: 12,
                                                    margin: "0 10px",
                                                }}
                                            >
                                                <img
                                                    src="https://validthemes.tech/templatebucket/lasson/lasson/assets/img/course/course-2.jpg"
                                                    alt="sratistic"
                                                    style={{
                                                        display: "inline-block",
                                                        width: "100%",
                                                        height: "auto",
                                                        marginBottom: 10,
                                                    }}
                                                />
                                                <h3
                                                    style={{
                                                        fontSize: 24,
                                                        fontWeight: 600,
                                                        color: "rgb(49, 70, 89)",
                                                        lineHeight: "32px",
                                                        marginBottom: 10,
                                                    }}
                                                >
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
                                                    <p
                                                        style={{
                                                            lineHeight: 1.5,
                                                            fontWeight: 600,
                                                            fontFamily:
                                                                "Poppins, sans-serif",
                                                            fontSize: 16,
                                                            color: "rgb(49, 70, 89)",
                                                        }}
                                                    >
                                                        Narxi: {item.price} So'm
                                                    </p>
                                                    <button
                                                        className="subscribe"
                                                        style={{
                                                            padding:
                                                                "10px 20px",
                                                        }}
                                                        onClick={showDrawer}
                                                    >
                                                        Ro'yxatdan o'tish
                                                    </button>
                                                    <CondidateRegister
                                                        open={open}
                                                        onClose={onClose}
                                                        examId={item.id}
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Slider>
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
