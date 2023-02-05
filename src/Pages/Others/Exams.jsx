import { useState } from "react";
import { message } from "antd";
import moment from "moment";
import { createOrEditExams, deleteExams, getExams } from "../../Api/api";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";
import { useTable } from "../../Hook/UseTable";
import { useMutation, useQuery } from "@tanstack/react-query";

const ExamsComp = () => {
    const [pageData, setPageData] = useState({
        current: 1,
        pageSize: 10,
    });
    const { getExamsData } = useData();
    const { setExamtableData } = useTable();
    const { data, isLoading, refetch, isError } = useQuery(
        ["exams", pageData],
        () => getExams(pageData.current - 1, pageData.pageSize)
    );

    if (isError) {
        message.error("Imtixonlarni yuklashda muammo bo'ldi");
    }

    const createMutation = useMutation((body) => createOrEditExams(body), {
        onSuccess: (data) => {
            data.code === 211 && message.error(data.message);
            data.code === 200 &&
                message.success("Imtixon muvaffaqiyatli qo'shildi");
            refetch();
            getExamsData();
        },
        onError: (error) => {
            message.error("Imtixonni qo'shishda muammo bo'ldi");
            console.error(error);
        },
        onSettled: () => {
            setExamtableData({
                directionId: false,
                subjectId: false,
            });
        },
    });

    const onCreate = (values) => {
        console.log(values);
        const active = values.active === "true" ? true : false;
        createMutation.mutate({ ...values, active: active });
    };

    const editMutation = useMutation((body) => createOrEditExams(body), {
        onSuccess: (data) => {
            data.code === 211 && message.error(data.message);
            data.code === 200 &&
                message.success("Imtixon muvaffaqiyatli taxrirlandi");
            refetch();
            getExamsData();
        },
        onError: (error) => {
            message.error("Imtixonni taxrirlashda muammo bo'ldi");
            console.error(error);
        },
        onSettled: () => {
            setExamtableData({
                directionId: false,
                subjectId: false,
            });
        },
    });

    const onEdit = (values, initial) => {
        const active = values?.active?.target.value === "true" ? true : false;
        const startedDate = moment(
            values.startedDate,
            "YYYY-MM-DD hh:mm"
        ).toISOString();
        editMutation.mutate({
            ...values,
            active: active,
            startedDate: startedDate,
            id: initial.id,
        });
    };

    const deleteMutation = useMutation((body) => deleteExams(body), {
        onSuccess: (data) => {
            data.code === 200 &&
                message.success("Imtixon muvaffaqiyatli o'chirildi");
            refetch();
            getExamsData();
        },
        onError: (error) => {
            message.error("Imtixonni o'chirishda muammo bo'ldi");
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
            title: "Fan nomi",
            dataIndex: "subjectName",
            key: "subjectName",
            width: "12%",
            search: false,
            sorter: (a, b) => {
                if (a.subjectName < b.subjectName) {
                    return -1;
                }
                if (a.subjectName > b.subjectName) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Yo'nalish nomi",
            dataIndex: "directionName",
            key: "directionName",
            width: "12%",
            search: false,
            sorter: (a, b) => {
                if (a.directionName < b.directionName) {
                    return -1;
                }
                if (a.directionName > b.directionName) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Ma'lumot",
            dataIndex: "title",
            key: "title",
            width: "25%",
            search: true,
        },
        {
            title: "Yaratilgan vaqti",
            dataIndex: "createdAt",
            key: "createdAt",
            width: "15%",
            search: false,
            sorter: (a, b) => {
                if (a.createdAt < b.createdAt) {
                    return -1;
                }
                if (a.createdAt > b.createdAt) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Bo'lish vaqti",
            dataIndex: "startedDate",
            key: "startedDate",
            width: "15%",
            search: false,
            sorter: (a, b) => {
                if (a.startedDate < b.startedDate) {
                    return -1;
                }
                if (a.startedDate > b.startedDate) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Imtixon narxi",
            dataIndex: "price",
            key: "price",
            width: "10%",
            search: true,
            sorter: (a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Imtihon faolmi",
            dataIndex: "active",
            key: "active",
            width: "10%",
            search: false,
            sorter: (a, b) => {
                if (a.active < b.active) {
                    return -1;
                }
                if (a.active > b.active) {
                    return 1;
                }
                return 0;
            },
            render: (record) => {
                return record ? "Ha" : "Yo'q";
            },
        },
    ];

    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>Imtixonlari</h3>
            <CustomTable
                columns={columns}
                pageSizeOptions={[10, 20]}
                getData={refetch}
                onDelete={handleDelete}
                onCreate={onCreate}
                onEdit={onEdit}
                totalItems={data?.pageable?.count}
                tableData={data?.data?.map((item) => ({
                    ...item,
                    directionId: item?.directionId?.id,
                    directionName: item?.directionId?.name,
                    subjectName: item?.subjectId?.name,
                    subjectId: item?.subjectId?.id,
                    startedDate: moment(item?.startedDate).format(
                        "YYYY-MM-DD hh:mm"
                    ),
                    createdAt: moment(item?.createdAt).format(
                        "YYYY-MM-DD hh:mm"
                    ),
                }))}
                current={pageData.current}
                pageSize={pageData.pageSize}
                setCurrent={(newProp) =>
                    setPageData((prev) => ({ ...prev, current: newProp }))
                }
                setPageSize={(newProp) =>
                    setPageData((prev) => ({ ...prev, pageSize: newProp }))
                }
                loading={isLoading}
            />
        </div>
    );
};

export default ExamsComp;
