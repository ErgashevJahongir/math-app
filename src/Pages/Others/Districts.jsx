import { useState } from "react";
import {
    createOrEditDistricts,
    deleteDistricts,
    getDistricts,
} from "../../Api/api";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";
import { useMutation, useQuery } from "@tanstack/react-query";

const Districts = () => {
    const [pageData, setPageData] = useState({
        current: 1,
        pageSize: 10,
    });
    const { getDistrictsData } = useData();
    const { data, isLoading, refetch, isError } = useQuery(
        ["districts", pageData],
        () => getDistricts()
    );

    if (isError) {
        message.error("Tumanlarni yuklashda muammo bo'ldi");
    }

    const createMutation = useMutation((body) => createOrEditDistricts(body), {
        onSuccess: (data) => {
            data?.code === 211 && message.error(data?.message);
            data?.code === 200 &&
                message.success("Tuman muvaffaqiyatli qo'shildi");
            refetch();
            getDistrictsData();
        },
        onError: (error) => {
            message.error("Tumanni qo'shishda muammo bo'ldi");
            console.error(error);
        },
    });

    const onCreate = (values) => {
        createMutation.mutate({ ...values });
    };

    const editMutation = useMutation((body) => createOrEditDistricts(body), {
        onSuccess: (data) => {
            data.code === 211 && message.error(data?.message);
            data.code === 200 &&
                message.success("Tuman muvaffaqiyatli taxrirlandi");
            refetch();
            getDistrictsData();
        },
        onError: (error) => {
            message.error("Tumanni taxrirlashda muammo bo'ldi");
            console.error(error);
        },
    });

    const onEdit = (values, initial) => {
        editMutation.mutate({
            ...values,
            id: initial.id,
        });
    };

    const deleteMutation = useMutation((body) => deleteDistricts(body), {
        onSuccess: (data) => {
            data.code === 200 &&
                message.success("Tuman muvaffaqiyatli o'chirildi");
            refetch();
            getDistrictsData();
        },
        onError: (error) => {
            message.error("Tumanni o'chirishda muammo bo'ldi");
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
            title: "Tuman nomi",
            dataIndex: "name",
            key: "name",
            width: "99%",
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
            <h3>Navoiy viloyati tumanlari</h3>
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

export default Districts;
