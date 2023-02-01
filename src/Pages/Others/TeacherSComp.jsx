import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/Axios";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const TeachersCompo = () => {
    const [pageData, setPageData] = useState({
        teachers: [],
        loading: true,
        current: 1,
        pageSize: 10,
        totalItems: 1,
    });
    const { subjectsData, getTeachersData } = useData();
    const navigate = useNavigate();

    const getTeachers = (current, pageSize) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get(`/api/teacher/list?page=${current}&size=${pageSize}`)
            .then((data) => {
                getTeachersData();
                setPageData((prev) => ({
                    ...prev,
                    teachers: data.data?.data.map((item) => {
                        return {
                            ...item,
                            subjectId: item?.subjectId?.id,
                        };
                    }),
                    totalItems: data.data?.pageable?.count,
                }));
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("O'qituvchilarni yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const photoPath = values?.photoPath?.file?.name;
        instance
            .post("/api/teacher/create", { ...values, photoPath })
            .then(function (response) {
                response.data?.code === 211 &&
                    message.error(response.data?.message);
                response.data?.code === 200 &&
                    message.success("O'qituvchi muvaffaqiyatli qo'shildi");
                getTeachers(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("O'qituvchini qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const photoPath = values?.photoPath?.file?.name;
        instance
            .put(`/api/teacher/update/${initial.id}`, {
                ...values,
                id: initial.id,
                photoPath,
            })
            .then((res) => {
                res.data.code === 211 && message.error(res.data?.message);
                res.data.code === 222 && message.error(res.data?.message);
                res.data.code === 200 &&
                    message.success("O'qituvchi muvaffaqiyatli taxrirlandi");
                getTeachers(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("O'qituvchini taxrirlashda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const handleDelete = (arr) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        arr.map((item) => {
            instance
                .delete(`/api/teacher/delete/${item}`)
                .then((data) => {
                    getTeachers(pageData.current - 1, pageData.pageSize);
                    message.success("O'qituvchi muvaffaqiyatli o'chirildi");
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error("O'qituvchini o'chirishda muammo bo'ldi");
                })
                .finally(() =>
                    setPageData((prev) => ({ ...prev, loading: false }))
                );
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
    console.log(subjectsData);
    return (
        <div className="container" style={{ marginTop: 30 }}>
            <h3>O'qituvchilar</h3>
            <CustomTable
                columns={columns}
                pageSizeOptions={[10, 20]}
                getData={getTeachers}
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
                tableData={pageData.teachers}
                loading={pageData.loading}
                setLoading={(newProp) =>
                    setPageData((prev) => ({ ...prev, loading: newProp }))
                }
            />
        </div>
    );
};

export default TeachersCompo;
