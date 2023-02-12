import { useState } from "react";
import {
    createOrEditSubjects,
    deleteSubjects,
    getSubjects,
} from "../../Api/api";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";
import { useMutation, useQuery } from "@tanstack/react-query";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const Subjects = () => {
    const [pageData, setPageData] = useState({
        current: 1,
        pageSize: 10,
    });
    const { getSubjectsData } = useData();
    const { data, isLoading, refetch, isError } = useQuery(
        ["subjects", pageData],
        () => getSubjects()
    );

    if (isError) {
        message.error("Fanlarni yuklashda muammo bo'ldi");
    }

    const createMutation = useMutation((body) => createOrEditSubjects(body), {
        onSuccess: (data) => {
            data?.code === 211 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Fan muvaffaqiyatli qo'shildi");
            refetch();
            getSubjectsData();
        },
        onError: (error) => {
            message.error("Fanni qo'shishda muammo bo'ldi");
            console.error(error);
        },
    });

    const onCreate = (values) => {
        const photoPath = values?.photoPath?.file?.name;
        createMutation.mutate({ ...values, photoPath });
    };

    const editMutation = useMutation((body) => createOrEditSubjects(body), {
        onSuccess: (data) => {
            data?.code === 211 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Fan muvaffaqiyatli taxrirlandi");
            refetch();
            getSubjectsData();
        },
        onError: (error) => {
            message.error("Fanni taxrirlashda muammo bo'ldi");
            console.error(error);
        },
    });

    const onEdit = (values, initial) => {
        const photoPath = values?.photoPath?.file?.name;
        editMutation.mutate({
            ...values,
            id: initial.id,
            photoPath,
        });
    };

    const deleteMutation = useMutation((body) => deleteSubjects(body), {
        onSuccess: (data) => {
            data.code === 200 &&
                message.success("Fan muvaffaqiyatli o'chirildi");
            refetch();
            getSubjectsData();
        },
        onError: (error) => {
            message.error("Fanni o'chirishda muammo bo'ldi");
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
            title: "Rasm",
            dataIndex: "photoPath",
            key: "photoPath",
            width: "10%",
            search: false,
            render: (initial) => {
                return (
                    <img
                        loading="lazy"
                        decoding="async"
                        src={`${REACT_APP_BASE_URL}/api/file/downloadFile?fileName=${initial}`}
                        alt={initial}
                        width={100}
                    />
                );
            },
        },
        {
            title: "Fan nomi",
            dataIndex: "name",
            key: "name",
            width: "89%",
            search: true,
            sorter: (a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            },
        },
    ];

    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>Fanlar</h3>
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

export default Subjects;
