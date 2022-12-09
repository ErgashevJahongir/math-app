import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useKeyPress from "../../Hook/UseKeyPress";

const EditData = ({
    selectedRowKeys,
    onEdit,
    editData,
    editModalTitle,
    setSelectedRowKeys,
}) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const enter = useKeyPress("Enter");

    const onEdited = (values) => {
        onEdit(values, selectedRowKeys);
        setVisible(false);
        setSelectedRowKeys([[], []]);
    };

    const onCancel = () => {
        setVisible(false);
    };

    const initialData = { ...selectedRowKeys };

    const formValidate = () => {
        form.validateFields()
            .then((values) => {
                form?.resetFields();
                onEdited(values);
            })
            .catch((info) => {
                console.error("Validate Failed:", info);
            });
    };

    if (enter && visible) {
        formValidate();
    }

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    form.setFieldsValue({ ...initialData });
                    setVisible(true);
                }}
                className="add-button"
                icon={<EditOutlined />}
            >
                O'zgartirish
            </Button>
            <Modal
                open={visible}
                title={editModalTitle}
                okText="O'zgartirish"
                cancelText="Bekor qilish"
                width={
                    Object.keys(editData).length > 8
                        ? window.innerWidth > 720
                            ? 700
                            : 350
                        : 350
                }
                onCancel={() => {
                    onCancel();
                }}
                onOk={formValidate}
            >
                <Form form={form} layout="vertical" name="form_in_modal">
                    <Row gutter={12}>
                        {editData?.map((data) => {
                            return (
                                <Col
                                    span={
                                        Object.keys(editData).length > 8
                                            ? window.innerWidth > 720
                                                ? 12
                                                : 24
                                            : 24
                                    }
                                    key={data.name}
                                >
                                    <Form.Item
                                        name={data.name}
                                        key={data.name}
                                        label={data.label}
                                        rules={[
                                            {
                                                required: data.required
                                                    ? data.required
                                                    : true,
                                                message: `${data.label}ni kiriting`,
                                            },
                                        ]}
                                    >
                                        {data.hasOwnProperty("input")
                                            ? data.input
                                            : data.inputSelect(
                                                  selectedRowKeys[data.name]
                                              )}
                                    </Form.Item>
                                </Col>
                            );
                        })}
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default EditData;
