import { useState } from "react";
import {
    createTeachers,
    deleteTeachers,
    editTeachers,
    getTeachers,
} from "../../Api/api";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";
import { useMutation, useQuery } from "@tanstack/react-query";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const TeachersCompo = () => {
    const [pageData, setPageData] = useState({
        current: 1,
        pageSize: 10,
    });
    const { subjectsData, getTeachersData } = useData();
    const { data, isLoading, refetch, isError } = useQuery(
        ["teachers", pageData],
        () => getTeachers(pageData.current - 1, pageData.pageSize)
    );

    if (isError) {
        message.error("O'qituvchilarni yuklashda muammo bo'ldi");
    }

    const createMutation = useMutation((body) => createTeachers(body), {
        onSuccess: (data) => {
            data?.code === 211 && message.error(data?.message);
            data.code === 222 && message.error(data?.message);
            data?.code === 200 &&
                message.success("O'qituvchi muvaffaqiyatli qo'shildi");
            refetch();
            getTeachersData();
        },
        onError: (error) => {
            message.error("O'qituvchini qo'shishda muammo bo'ldi");
            console.error(error);
        },
    });

    const onCreate = (values) => {
        const photoPath = values?.photoPath?.file?.name;
        createMutation.mutate({ ...values, photoPath });
    };

    const editMutation = useMutation((body) => editTeachers(body), {
        onSuccess: (data) => {
            data.code === 211 && message.error(data?.message);
            data.code === 222 && message.error(data?.message);
            data.code === 200 &&
                message.success("O'qituvchi muvaffaqiyatli taxrirlandi");
            refetch();
            getTeachersData();
        },
        onError: (error) => {
            message.error("O'qituvchini taxrirlashda muammo bo'ldi");
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

    const deleteMutation = useMutation((body) => deleteTeachers(body), {
        onSuccess: (data) => {
            data.code === 200 &&
                message.success("O'qituvchi muvaffaqiyatli o'chirildi");
            refetch();
            getTeachersData();
        },
        onError: (error) => {
            message.error("O'qituvchini o'chirishda muammo bo'ldi");
            console.error(error);
        },
    });

    const handleDelete = (arr) => {
        arr.map((item) => {
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
            title: "O'qituvchilar",
            dataIndex: "name",
            key: "name",
            width: "50%",
            search: true,
        },
        {
            title: "Fan",
            dataIndex: "subjectId",
            key: "subjectId",
            width: "39%",
            search: false,
            render: (record) => {
                const data = subjectsData?.filter((item) => item.id === record);
                return data[0]?.name;
            },
        },
    ];
    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>O'qituvchilar</h3>
            <CustomTable
                columns={columns}
                pageSizeOptions={[10, 20]}
                getData={refetch}
                onDelete={handleDelete}
                onCreate={onCreate}
                onEdit={onEdit}
                totalItems={data?.pageable?.count}
                current={pageData.current}
                pageSize={pageData.pageSize}
                setCurrent={(newProp) =>
                    setPageData((prev) => ({ ...prev, current: newProp }))
                }
                setPageSize={(newProp) =>
                    setPageData((prev) => ({ ...prev, pageSize: newProp }))
                }
                tableData={data?.data.map((item) => {
                    return {
                        ...item,
                        subjectId: item?.subjectId?.id,
                    };
                })}
                loading={isLoading}
            />
        </div>
    );
};

export default TeachersCompo;
