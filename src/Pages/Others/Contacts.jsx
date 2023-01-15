import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/Axios";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";

const ContactsComp = () => {
    const [pageData, setPageData] = useState({
        contactsDataTable: [],
        loading: true,
        current: 1,
        pageSize: 10,
        totalItems: 1,
    });
    const navigate = useNavigate();

    const getContacts = () => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get("/api/contact/list")
            .then((data) => {
                console.log(data);
                setPageData((prev) => ({
                    ...prev,
                    contactsDataTable: data.data?.data,
                }));
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Kontaktlarni yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const isMain = values.isMain === "true" ? true : false;
        console.log(values);
        instance
            .post("/api/contact/create", { ...values, isMain })
            .then(function (response) {
                response.data?.code === 209 &&
                    message.error(response.data?.message);
                response.data?.code === 200 &&
                    message.success("Kontakt muvaffaqiyatli qo'shildi");
                getContacts(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Kontaktni qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const isMain = values.isMain === "true" ? true : false;
        console.log(values);
        instance
            .post(`/api/contact/update/${initial.id}`, {
                ...values,
                id: initial.id,
                isMain,
            })
            .then((res) => {
                res.data?.code === 209 && message.error(res.data?.message);
                res.data?.code === 200 &&
                    message.success("Kontakt muvaffaqiyatli taxrirlandi");
                getContacts(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Kontaktni taxrirlashda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const handleDelete = (arr) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        arr.map((item) => {
            instance
                .delete(`/api/contact/${item}`)
                .then((data) => {
                    getContacts(pageData.current - 1, pageData.pageSize);
                    message.success("Kontakt muvaffaqiyatli o'chirildi");
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error("Kontaktni o'chirishda muammo bo'ldi");
                })
                .finally(() =>
                    setPageData((prev) => ({ ...prev, loading: false }))
                );
            return null;
        });
    };

    const columns = [
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            width: "29%",
            search: true,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "15%",
            search: true,
        },
        {
            title: "Telefon nomer",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            width: "15%",
            search: true,
        },
        {
            title: "Telegram",
            dataIndex: "telegramName",
            key: "telegramName",
            width: "15%",
            search: true,
        },
        {
            title: "Instagram",
            dataIndex: "instagramName",
            key: "instagramName",
            width: "15%",
            search: true,
        },
        {
            title: "Asosiyligi",
            dataIndex: "isMain",
            key: "isMain",
            width: "10%",
            search: false,
            render: (record) => {
                return record ? "Ha" : "Yo'q";
            },
        },
    ];

    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>Kontaktlar</h3>
            <CustomTable
                columns={columns}
                pageSizeOptions={[10, 20]}
                getData={getContacts}
                onDelete={handleDelete}
                onCreate={onCreate}
                onEdit={onEdit}
                current={pageData.current}
                pageSize={pageData.pageSize}
                setCurrent={(newProp) =>
                    setPageData((prev) => ({ ...prev, current: newProp }))
                }
                setPageSize={(newProp) =>
                    setPageData((prev) => ({ ...prev, pageSize: newProp }))
                }
                tableData={pageData.contactsDataTable}
                loading={pageData.loading}
                setLoading={(newProp) =>
                    setPageData((prev) => ({ ...prev, loading: newProp }))
                }
            />
        </div>
    );
};

export default ContactsComp;
