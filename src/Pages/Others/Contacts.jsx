import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/Axios";
import { message, List } from "antd";

const ContactsComp = () => {
    const [pageData, setPageData] = useState({
        contactsdata: [],
        loading: true,
        current: 1,
        pageSize: 10,
        totalItems: 1,
    });
    const navigate = useNavigate();

    const getContactsdata = () => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get("/api/contact/list")
            .then((data) => {
                console.log(data);
                setPageData((prev) => ({
                    ...prev,
                    contactsdata: data.data?.data,
                }));
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Kontakt ma'lumotlarini yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .post("/api/direction/create", { ...values })
            .then(function (response) {
                response.data?.code === 211 &&
                    message.error(response.data?.message);
                response.data?.code === 200 &&
                    message.success(
                        "Kontakt ma'lumotlari muvaffaqiyatli qo'shildi"
                    );
                getContactsdata();
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error(
                    "Kontakt ma'lumotlarini qo'shishda muammo bo'ldi"
                );
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .post(`/api/direction/update/${initial.id}`, {
                ...values,
            })
            .then((res) => {
                res.data.code === 211 && message.error(res.data?.message);
                res.data.code === 200 &&
                    message.success(
                        "Kontakt ma'lumotlari muvaffaqiyatli taxrirlandi"
                    );
                getContactsdata();
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error(
                    "Kontakt ma'lumotlarini taxrirlashda muammo bo'ldi"
                );
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const handleDelete = (arr) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        arr.map((item) => {
            instance
                .delete(`/api/direction/delete/${item}`)
                .then((data) => {
                    getContactsdata();
                    message.success(
                        "Kontakt ma'lumotlari muvaffaqiyatli o'chirildi"
                    );
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error(
                        "Kontakt ma'lumotlarini o'chirishda muammo bo'ldi"
                    );
                })
                .finally(() =>
                    setPageData((prev) => ({ ...prev, loading: false }))
                );
            return null;
        });
    };

    useEffect(() => {
        getContactsdata();
    }, []);

    const data = [
        {
            title: "Ant Design Title 1",
        },
        {
            title: "Ant Design Title 2",
        },
        {
            title: "Ant Design Title 3",
        },
        {
            title: "Ant Design Title 4",
        },
    ];
    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>Kontakt ma'lumotlar</h3>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<p>{item.title}</p>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default ContactsComp;
