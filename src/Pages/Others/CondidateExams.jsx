import { Col, Row } from "antd";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Hook/UseData";

const CondidateExams = () => {
    const { examsData } = useData();
    const navigate = useNavigate();

    const navigatePage = (id) => {
        navigate(`/others/candidates/${id}`);
    };

    return (
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
            <Row gutter={[20, 20]}>
                {examsData?.map((item, key) => {
                    return (
                        <Col
                            xs={24}
                            sm={12}
                            md={12}
                            lg={8}
                            xl={8}
                            key={key}
                            onClick={() => navigatePage(item.id)}
                        >
                            <div
                                style={{
                                    backgroundColor: "#3497D935",
                                    padding: "20px 20px 30px 20px",
                                    borderRadius: 12,
                                    cursor: "pointer",
                                }}
                                className="examCard"
                            >
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
                                        flexDirection: "column",
                                        marginBottom: 10,
                                    }}
                                >
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: 14,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Yaratilgan vaqt:{" "}
                                        {moment(item?.createdAt).format(
                                            "YYYY-MM-DD hh:mm"
                                        )}
                                    </p>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: 14,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Bo'lish vaqti:{" "}
                                        {moment(item?.startedDate).format(
                                            "YYYY-MM-DD hh:mm"
                                        )}
                                    </p>
                                </div>
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
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Narxi: {item.price} So'm
                                    </p>
                                    <p
                                        style={{
                                            lineHeight: 1.5,
                                            fontWeight: 600,
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: 16,
                                            color: "rgb(49, 70, 89)",
                                        }}
                                    >
                                        Holati:{" "}
                                        {item.active ? "Faol" : "Nofaol"}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default CondidateExams;
