import { useState } from "react";
import {
    createContact,
    deleteContact,
    editContact,
    getContacts,
} from "../../Api/api";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useMutation, useQuery } from "@tanstack/react-query";

const ContactsComp = () => {
    const [pageData, setPageData] = useState({
        current: 1,
        pageSize: 10,
    });
    const { data, isLoading, refetch, isError } = useQuery(
        ["contacts", pageData],
        () => getContacts()
    );

    if (isError) {
        message.error("Kontaktlarni yuklashda muammo bo'ldi");
    }

    const createMutation = useMutation((body) => createContact(body), {
        onSuccess: (data) => {
            data?.code === 209 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Kontakt muvaffaqiyatli qo'shildi");
            refetch();
        },
        onError: (error) => {
            message.error("Kontaktni qo'shishda muammo bo'ldi");
            console.error(error);
        },
    });

    const onCreate = (values) => {
        const isMain = values.isMain === "true" ? true : false;
        createMutation.mutate({ ...values, isMain });
    };

    const editMutation = useMutation((body) => editContact(body), {
        onSuccess: (data) => {
            data?.code === 209 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Kontakt muvaffaqiyatli taxrirlandi");
            refetch();
        },
        onError: (error) => {
            message.error("Kontaktni taxrirlashda muammo bo'ldi");
            console.error(error);
        },
    });

    const onEdit = (values, initial) => {
        const isMain = values.isMain === "true" ? true : false;
        editMutation.mutate({
            ...values,
            id: initial.id,
            isMain,
        });
    };

    const deleteMutation = useMutation((body) => deleteContact(body), {
        onSuccess: (data) => {
            data.code === 200 &&
                message.success("Kontakt muvaffaqiyatli o'chirildi");
            refetch();
        },
        onError: (error) => {
            message.error("Kontaktni o'chirishda muammo bo'ldi");
            console.error(error);
        },
    });

    const handleDelete = (arr) => {
        arr?.map((item) => {
            deleteMutation.mutate(item);
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
                getData={refetch}
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
                tableData={data?.data}
                loading={isLoading}
            />
        </div>
    );
};

export default ContactsComp;
