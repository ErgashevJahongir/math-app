import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/Axios";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const Subjects = () => {
    const [pageData, setPageData] = useState({
        subjects: [],
        loading: true,
        current: 1,
        pageSize: 10,
        totalItems: 1,
    });
    const { getSubjectsData } = useData();
    const navigate = useNavigate();

    const getSubjects = () => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get("/api/subject/list")
            .then((data) => {
                setPageData((prev) => ({
                    ...prev,
                    subjects: data.data?.data,
                }));
                getSubjectsData();
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Fanlarni yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const photoPath = values?.photoPath?.file?.name;
        instance
            .post("/api/subject/createOrUpdate", { ...values, photoPath })
            .then(function (response) {
                response.data?.code === 211 &&
                    message.error(response.data?.message);
                response.data?.code === 200 &&
                    message.success("Fan muvaffaqiyatli qo'shildi");
                getSubjects(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Fanni qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        const photoPath = values?.photoPath?.file?.name;
        instance
            .post("/api/subject/createOrUpdate", {
                ...values,
                id: initial.id,
                photoPath,
            })
            .then((res) => {
                res.data?.code === 211 && message.error(res.data?.message);
                res.data?.code === 200 &&
                    message.success("Fan muvaffaqiyatli taxrirlandi");
                getSubjects(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Fanni taxrirlashda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const handleDelete = (arr) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        arr.map((item) => {
            instance
                .delete(`/api/subject/${item}`)
                .then((data) => {
                    getSubjects(pageData.current - 1, pageData.pageSize);
                    message.success("Fan muvaffaqiyatli o'chirildi");
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error("Fanni o'chirishda muammo bo'ldi");
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
                getData={getSubjects}
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
                tableData={pageData.subjects}
                loading={pageData.loading}
                setLoading={(newProp) =>
                    setPageData((prev) => ({ ...prev, loading: newProp }))
                }
            />
        </div>
    );
};

export default Subjects;
