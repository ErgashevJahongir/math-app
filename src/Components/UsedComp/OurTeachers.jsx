import { Col } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teacher from "./jo5avbdelzqwm6avdw6p-removebg-preview.png";

const OurTeachers = () => {
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
        <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div className="container">
                <h2
                    style={{
                        marginTop: 40,
                        marginBottom: 20,
                        fontSize: 32,
                        fontWeight: 600,
                        color: "rgb(49, 70, 89)",
                        lineHeight: 1.5,
                    }}
                    className="future-heading"
                >
                    Bizning O'qituvchilar
                </h2>
                <Slider {...settings}>
                    <Col>
                        <img
                            src={teacher}
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 200,
                                height: 200,
                                marginBottom: 5,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
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
                    </Col>
                    <Col>
                        <img
                            src={teacher}
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 200,
                                height: 200,
                                marginBottom: 5,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
                            Farxod Jumayev
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "rgb(49, 70, 89)",
                            }}
                        >
                            Informatika fani o'qituvchisi
                        </p>
                    </Col>
                    <Col>
                        <img
                            src={teacher}
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 200,
                                height: 200,
                                marginBottom: 5,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
                            Kamoliddin Qarshiyev
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "rgb(49, 70, 89)",
                            }}
                        >
                            Matematika fani o'qituvchisi
                        </p>
                    </Col>
                    <Col>
                        <img
                            src={teacher}
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 200,
                                height: 200,
                                marginBottom: 5,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
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
                    </Col>
                    <Col>
                        <img
                            src={teacher}
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 200,
                                height: 200,
                                marginBottom: 5,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
                            Farxod Jumayev
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "rgb(49, 70, 89)",
                            }}
                        >
                            Informatika fani o'qituvchisi
                        </p>
                    </Col>
                    <Col>
                        <img
                            src={teacher}
                            alt="sratistic"
                            style={{
                                display: "inline-block",
                                width: 200,
                                height: 200,
                                marginBottom: 5,
                            }}
                        />
                        <h3
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                color: "rgb(49, 70, 89)",
                                lineHeight: "32px",
                                marginBottom: 2,
                            }}
                        >
                            Kamoliddin Qarshiyev
                        </h3>
                        <p
                            style={{
                                lineHeight: 1.5,
                                fontSize: 16,
                                color: "rgb(49, 70, 89)",
                            }}
                        >
                            Matematika fani o'qituvchisi
                        </p>
                    </Col>
                </Slider>
            </div>
        </div>
    );
};

export default OurTeachers;
