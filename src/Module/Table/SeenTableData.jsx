import { useState } from "react";
import { Button, Col, List, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";
import { useData } from "../../Hook/UseData";

const SeenTableData = ({ selectedRowKeys, editModalTitle }) => {
    const [visible, setVisible] = useState(false);
    const { subjectsData } = useData();

    const onCancel = () => {
        setVisible(false);
    };

    const data = subjectsData?.filter(
        (item) => item.id === selectedRowKeys?.exam?.subjectId
    );

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
                className="add-button"
                icon={<EyeOutlined />}
            >
                Ma'lumotlarni ko'rish
            </Button>
            <Modal
                open={visible}
                title={editModalTitle}
                width={350}
                footer={null}
                onCancel={() => {
                    onCancel();
                }}
                className="seenCont"
            >
                <List style={{ marginTop: 10 }} bordered>
                    <List.Item>
                        <Col span={10}>Ismi: </Col>
                        <Col span={14}>{selectedRowKeys?.firstName}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Familiyasi: </Col>
                        <Col span={14}>{selectedRowKeys?.lastName}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Tel nomeri: </Col>
                        <Col span={14}>{selectedRowKeys?.phoneNumber}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Yashash tumani: </Col>
                        <Col span={14}>{selectedRowKeys?.district}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Sinfi: </Col>
                        <Col span={14}>{selectedRowKeys?.classNumber}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>To'lov: </Col>
                        <Col span={14}>
                            {selectedRowKeys?.paid
                                ? "To'lov qilingan"
                                : "To'lov qilinmagan"}
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>To'lov Id: </Col>
                        <Col span={14}>
                            {selectedRowKeys?.paymentId || "To'lov qilinmagan"}
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Imtihon fani: </Col>
                        <Col span={14}>{data[0]?.name}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Ma'lumot: </Col>
                        <Col span={14}>{selectedRowKeys?.exam?.title}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Narxi: </Col>
                        <Col span={14}>{selectedRowKeys?.exam?.price}</Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Boshlanish vaqti: </Col>
                        <Col span={14}>
                            {moment(selectedRowKeys?.exam?.startedDate).format(
                                "YYYY-MM-DD hh:mm"
                            )}
                        </Col>
                    </List.Item>
                    <List.Item>
                        <Col span={10}>Imtihon activligi: </Col>
                        <Col span={14}>
                            {selectedRowKeys?.exam?.active
                                ? "Faol"
                                : "O'tib ketgan"}
                        </Col>
                    </List.Item>
                </List>
            </Modal>
        </div>
    );
};

export default SeenTableData;
