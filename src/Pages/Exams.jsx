import { Col, Row, Space } from "antd";
import moment from "moment";
import CondidateRegister from "../Components/UsedComp/CondidateRegister";
import "../Components/UsedComp/userComp.css";
import { useData } from "../Hook/UseData";

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
                                key={key}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#3497D935",
                                        padding: "20px 20px 30px 20px",
                                        borderRadius: 12,
                                    }}
                                    className="examCard"
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
                                    <h3 className="itemTitleH3">
                                        {item.title}
                                    </h3>
                                    <Space style={{ marginBottom: 10 }}>
                                        <span>Bo'lish vaqti:</span>
                                        <span>
                                            {moment(item.startedDate).format(
                                                "YYYY-MM-DD hh:mm"
                                            )}
                                        </span>
                                    </Space>
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

                                        <CondidateRegister
                                            examId={item.id}
                                            amaunt={item.price}
                                        />
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
