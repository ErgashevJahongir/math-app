import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/Axios";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";

const Questions = () => {
    const [pageData, setPageData] = useState({
        questions: [],
        loading: true,
        current: 1,
        pageSize: 10,
        totalItems: 1,
    });
    const navigate = useNavigate();

    const getQuestions = (current, pageSize) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get(`/api/question/list?page=${current}&size=${pageSize}`)
            .then((data) => {
                console.log(data);
                setPageData((prev) => ({
                    ...prev,
                    questions: data.data?.data,
                    totalItems: data.data?.pageable?.count,
                }));
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Savollarni yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .post("/api/question/create", { ...values })
            .then(function (response) {
                response.data?.code === 211 &&
                    message.error(response.data?.message);
                response.data?.code === 200 &&
                    message.success("Savol muvaffaqiyatli qo'shildi");
                getQuestions(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Savolni qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .put(`/api/question/update/${initial.id}`, {
                ...values,
                id: initial.id,
            })
            .then((res) => {
                res.data.code === 211 && message.error(res.data?.message);
                res.data.code === 222 && message.error(res.data?.message);
                res.data.code === 200 &&
                    message.success("Savol muvaffaqiyatli taxrirlandi");
                getQuestions(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Savolni taxrirlashda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const handleDelete = (arr) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        arr.map((item) => {
            instance
                .delete(`/api/question/delete/${item}`)
                .then((data) => {
                    getQuestions(pageData.current - 1, pageData.pageSize);
                    message.success("Savol muvaffaqiyatli o'chirildi");
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error("Savolni o'chirishda muammo bo'ldi");
                })
                .finally(() =>
                    setPageData((prev) => ({ ...prev, loading: false }))
                );
            return null;
        });
    };

    const columns = [
        {
            title: "Savollar",
            dataIndex: "text",
            key: "text",
            width: "99%",
            search: true,
        },
    ];

    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>Savollar</h3>
            <CustomTable
                columns={columns}
                pageSizeOptions={[10, 20]}
                getData={getQuestions}
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
                tableData={pageData.questions}
                loading={pageData.loading}
                setLoading={(newProp) =>
                    setPageData((prev) => ({ ...prev, loading: newProp }))
                }
            />
        </div>
    );
};

export default Questions;
