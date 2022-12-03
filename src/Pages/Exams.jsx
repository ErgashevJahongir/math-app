import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Components/UsedComp/userComp.css";

const Exams = () => {
    const [examsData, setExamsData] = useState([]);
    const getExamsData = () => {
        axios
            .get("http://143.198.183.45:8080/api/exam/list?page=0&size=100")
            .then((data) => {
                console.log(data);
                setExamsData(data.data.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getExamsData();
    }, []);

    return (
        <section
            style={{ marginTop: 30, marginBottom: 40, textAlign: "center" }}
        >
            <div className="container">
                <h2
                    style={{
                        marginBottom: 30,
                        fontSize: 32,
                        fontWeight: 600,
                        color: "rgb(49, 70, 89)",
                        lineHeight: 1.5,
                    }}
                    className="future-heading"
                >
                    Imtihonlar
                </h2>
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
                                        >
                                            Ro'yxatdan o'tish
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </section>
    );
};

export default Exams;
