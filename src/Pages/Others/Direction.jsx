import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/Axios";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";

const Direction = () => {
    const [pageData, setPageData] = useState({
        direction: [],
        loading: true,
        current: 1,
        pageSize: 10,
        totalItems: 1,
    });
    const { getDirectionData } = useData();
    const navigate = useNavigate();

    const getDirection = (current, pageSize) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get(`/api/direction/list?page=${current}&size=${pageSize}`)
            .then((data) => {
                setPageData((prev) => ({
                    ...prev,
                    direction: data.data?.data.map((item) => {
                        const subject = item.subjectList.map(
                            (qism) => `${qism.name}, `
                        );
                        return {
                            ...item,
                            subject: subject,
                            addSubjectList: item.subjectList.map(
                                (qism) => qism.id
                            ),
                        };
                    }),
                }));
                getDirectionData();
                setPageData((prev) => ({
                    ...prev,
                    totalItems: data.data?.pageable?.count,
                }));
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Yo'nalishlarni yuklashda muammo bo'ldi");
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
                    message.success("Yo'nalish muvaffaqiyatli qo'shildi");
                getDirection(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Yo'nalishni qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        console.log(values, initial);
        const addSubjectList = values?.addSubjectList?.filter(
            (item) => !initial?.addSubjectList?.includes(item)
        );
        const removeSubjectList1 = initial?.addSubjectList?.filter((item) =>
            values?.addSubjectList?.includes(item)
        );
        const removeSubjectList = initial?.addSubjectList?.filter(
            (item) => !removeSubjectList1?.includes(item)
        );

        console.log(addSubjectList, removeSubjectList);
        instance
            .post(`/api/direction/update/${initial.id}`, {
                ...values,
                addSubjectList: addSubjectList,
                removeSubjectList: removeSubjectList,
            })
            .then((res) => {
                res.data.code === 211 && message.error(res.data?.message);
                res.data.code === 200 &&
                    message.success("Yo'nalish muvaffaqiyatli taxrirlandi");
                getDirection(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Yo'nalishni taxrirlashda muammo bo'ldi");
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
                    getDirection(pageData.current - 1, pageData.pageSize);
                    message.success("Yo'nalish muvaffaqiyatli o'chirildi");
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error("Yo'nalishni o'chirishda muammo bo'ldi");
                })
                .finally(() =>
                    setPageData((prev) => ({ ...prev, loading: false }))
                );
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
                getData={getDirection}
                onDelete={handleDelete}
                onCreate={onCreate}
                onEdit={onEdit}
                totalItems={pageData.totalItems}
                current={pageData.current}
                pageSize={pageData.pageSize}
                setCurrent={(newProp) =>
                    setPageData((prev) => ({ ...prev, current: newProp }))
                }
                setPageSize={(newProp) =>
                    setPageData((prev) => ({ ...prev, pageSize: newProp }))
                }
                tableData={pageData.direction}
                loading={pageData.loading}
                setLoading={(newProp) =>
                    setPageData((prev) => ({ ...prev, loading: newProp }))
                }
            />
        </div>
    );
};

export default Direction;
