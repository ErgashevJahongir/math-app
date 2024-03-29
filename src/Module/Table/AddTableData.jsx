import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useKeyPress from "../../Hook/UseKeyPress";

const CollectionCreateForm = ({
    visible,
    onCreate,
    onCancel,
    formData,
    modalTitle,
}) => {
    const [form] = Form.useForm();
    const enter = useKeyPress("Enter");

    const formValidate = () => {
        form.validateFields()
            .then((values) => {
                form.resetFields();
                onCreate(values);
            })
            .catch((info) => {
                console.error("Validate Failed:", info);
            });
    };

    if (enter && visible) {
        formValidate();
    }

    return (
        <Modal
            open={visible}
            title={modalTitle}
            okText="Qo'shish"
            cancelText="Bekor qilish"
            width={
                Object.keys(formData).length > 8
                    ? window.innerWidth > 720
                        ? 700
                        : 350
                    : 350
            }
            onCancel={() => {
                onCancel();
            }}
            onOk={formValidate}
            forceRender
        >
            <Form form={form} layout="vertical" name="table_adddata_modal">
                <Row gutter={12}>
                    {formData?.map((data) => {
                        return (
                            <Col
                                span={
                                    Object.keys(formData).length > 8
                                        ? window.innerWidth > 720
                                            ? 12
                                            : 24
                                        : 24
                                }
                                key={data.name}
                            >
                                <Form.Item
                                    key={data.name}
                                    name={data.name}
                                    label={data.label}
                                    rules={[
                                        {
                                            required: data.required,
                                            message: `${data.label}ni kiriting`,
                                        },
                                    ]}
                                >
                                    {data.input}
                                </Form.Item>
                            </Col>
                        );
                    })}
                </Row>
            </Form>
        </Modal>
    );
};

const AddData = ({ onCreate, formData, modalTitle }) => {
    const [visible, setVisible] = useState(false);

    const onCreatee = (values) => {
        onCreate(values);
        setVisible(false);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
                className="add-button"
                id={"addData"}
                icon={<PlusOutlined />}
            >
                Qo'shish
            </Button>
            <CollectionCreateForm
                formData={formData}
                modalTitle={modalTitle}
                visible={visible}
                onCreate={onCreatee}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default AddData;
