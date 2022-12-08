import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import moment from "moment";
import instance from "../../Api/Axios";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";

const ExamsComp = () => {
    const [pageData, setPageData] = useState({
        exams: [],
        loading: true,
        current: 1,
        pageSize: 10,
    });
    const { subjectsData, getExamsData } = useData();
    const navigate = useNavigate();

    const getExams = (current, pageSize) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get(`/api/exam/list?page=${current}&size=${pageSize}`)
            .then((data) => {
                setPageData((prev) => ({
                    ...prev,
                    exams: data.data?.data.map((item) => ({
                        ...item,
                        startedDate: moment(item?.startedDate).format(
                            "YYYY-MM-DD hh:mm"
                        ),
                        createdAt: moment(item?.createdAt).format(
                            "YYYY-MM-DD hh:mm"
                        ),
                    })),
                }));
                getExamsData();
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Imtixonlarni yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const active = values.active === "true" ? true : false;
        instance
            .post("/api/exam/createOrUpdate", { ...values, active: active })
            .then(function (response) {
                response.data.code === 211 &&
                    message.error(response.data.message);
                response.data.code === 200 &&
                    message.success("Imtixon muvaffaqiyatli qo'shildi");
                getExams(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Imtixonni qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const active = values.active === "true" ? true : false;
        const startedDate = moment(
            values.startedDate,
            "YYYY-MM-DD hh:mm"
        ).toISOString();
        instance
            .post("/api/exam/createOrUpdate", {
                ...values,
                active: active,
                startedDate: startedDate,
                id: initial.id,
            })
            .then((res) => {
                res.data.code === 211 && message.error(res.data.message);
                res.data.code === 200 &&
                    message.success("Imtixon muvaffaqiyatli taxrirlandi");
                getExams(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Imtixonni taxrirlashda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const handleDelete = (arr) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        arr.map((item) => {
            instance
                .delete(`/api/exam/delete/${item}`)
                .then((data) => {
                    getExams(pageData.current - 1, pageData.pageSize);
                    message.success("Imtixon muvaffaqiyatli o'chirildi");
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error("Imtixonni o'chirishda muammo bo'ldi");
                })
                .finally(() =>
                    setPageData((prev) => ({ ...prev, loading: false }))
                );
            return null;
        });
    };

    const columns = [
        {
            title: "Fan nomi",
            dataIndex: "subjectId",
            key: "subjectId",
            width: "15%",
            search: false,
            sorter: (a, b) => {
                if (a.subjectId < b.subjectId) {
                    return -1;
                }
                if (a.subjectId > b.subjectId) {
                    return 1;
                }
                return 0;
            },
            render: (record) => {
                const data = subjectsData?.filter((item) => item.id === record);
                return data[0]?.name;
            },
        },
        {
            title: "Ma'lumot",
            dataIndex: "title",
            key: "title",
            width: "30%",
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
            width: "15%",
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
                return record ? "Bor" : "Yo'q";
            },
        },
    ];

    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>Imtixonlari</h3>
            <CustomTable
                columns={columns}
                pageSizeOptions={[10, 20]}
                getData={getExams}
                onDelete={handleDelete}
                onCreate={onCreate}
                onEdit={onEdit}
                tableData={pageData.exams}
                current={pageData.current}
                pageSize={pageData.pageSize}
                setCurrent={(newProp) =>
                    setPageData((prev) => ({ ...prev, current: newProp }))
                }
                setPageSize={(newProp) =>
                    setPageData((prev) => ({ ...prev, pageSize: newProp }))
                }
                loading={pageData.loading}
                setLoading={(newProp) =>
                    setPageData((prev) => ({ ...prev, loading: newProp }))
                }
            />
        </div>
    );
};

export default ExamsComp;
