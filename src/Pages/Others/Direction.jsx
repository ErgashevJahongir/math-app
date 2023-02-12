import { useState } from "react";
import {
    createDirection,
    deleteDirection,
    editDirection,
    getDirection,
} from "../../Api/api";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";
import { useMutation, useQuery } from "@tanstack/react-query";

const Direction = () => {
    const [pageData, setPageData] = useState({
        current: 1,
        pageSize: 10,
    });
    const { getDirectionData } = useData();
    const { data, isLoading, refetch, isError } = useQuery(
        ["directions", pageData],
        () => getDirection(pageData.current - 1, pageData.pageSize)
    );

    if (isError) {
        message.error("Yo'nalishlarni yuklashda muammo bo'ldi");
    }

    const createMutation = useMutation((body) => createDirection(body), {
        onSuccess: (data) => {
            data?.code === 211 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Yo'nalish muvaffaqiyatli qo'shildi");
            refetch();
            getDirectionData();
        },
        onError: (error) => {
            message.error("Yo'nalishni qo'shishda muammo bo'ldi");
            console.error(error);
        },
    });

    const onCreate = (values) => {
        createMutation.mutate({ ...values });
    };

    const editMutation = useMutation((body) => editDirection(body), {
        onSuccess: (data) => {
            data.code === 211 && message.error(data?.message);
            data.code === 200 &&
                message.success("Yo'nalish muvaffaqiyatli taxrirlandi");
            refetch();
            getDirectionData();
        },
        onError: (error) => {
            message.error("Yo'nalishni taxrirlashda muammo bo'ldi");
            console.error(error);
        },
    });

    const onEdit = (values, initial) => {
        const addSubjectList = values?.addSubjectList?.filter(
            (item) => !initial?.addSubjectList?.includes(item)
        );
        const removeSubjectList1 = initial?.addSubjectList?.filter((item) =>
            values?.addSubjectList?.includes(item)
        );
        const removeSubjectList = initial?.addSubjectList?.filter(
            (item) => !removeSubjectList1?.includes(item)
        );
        editMutation.mutate({
            ...values,
            id: initial.id,
            addSubjectList: addSubjectList,
            removeSubjectList: removeSubjectList,
        });
    };

    const deleteMutation = useMutation((body) => deleteDirection(body), {
        onSuccess: (data) => {
            data.code === 200 &&
                message.success("Yo'nalish muvaffaqiyatli o'chirildi");
            refetch();
            getDirectionData();
        },
        onError: (error) => {
            message.error("Yo'nalishni o'chirishda muammo bo'ldi");
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
            title: "Yo'nalish nomi",
            dataIndex: "name",
            key: "name",
            width: "49%",
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
        {
            title: "Fan nomlari",
            dataIndex: "subject",
            key: "subject",
            width: "50%",
            search: true,
        },
    ];

    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>Yo'nalishlar</h3>
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
                tableData={data?.data?.map((item) => {
                    const subject = item.subjectList?.map(
                        (qism) => `${qism.name}, `
                    );
                    return {
                        ...item,
                        subject: subject,
                        addSubjectList: item.subjectList?.map(
                            (qism) => qism.id
                        ),
                    };
                })}
                loading={isLoading}
            />
        </div>
    );
};

export default Direction;
