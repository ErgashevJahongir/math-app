import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/Axios";
import { message } from "antd";
import CustomTable from "../../Module/Table/Table";

const Districts = () => {
    const [pageData, setPageData] = useState({
        districts: [],
        loading: true,
        current: 1,
        pageSize: 10,
    });
    const navigate = useNavigate();

    const getDistricts = () => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get("/api/district")
            .then((data) => {
                console.log(data);
                setPageData((prev) => ({
                    ...prev,
                    districts: data.data?.data,
                }));
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Tumanlarni yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .post("api/socks/factory/socks/add", { ...values })
            .then(function (response) {
                message.success("Tuman muvaffaqiyatli qo'shildi");
                getDistricts(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Tumanni qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const onEdit = (values, initial) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .put(`api/socks/factory/socks/update?socksId=${initial.id}`, {
                ...values,
            })
            .then((res) => {
                message.success("Tuman muvaffaqiyatli taxrirlandi");
                getDistricts(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error("Error in edit: ", error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Tumanni taxrirlashda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const handleDelete = (arr) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        arr.map((item) => {
            instance
                .delete(`api/socks/factory/socks/delete?socksId=${item}`)
                .then((data) => {
                    getDistricts(pageData.current - 1, pageData.pageSize);
                    message.success("Tuman muvaffaqiyatli o'chirildi");
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response?.status === 500)
                        navigate("/server-error");
                    message.error("Tumanni o'chirishda muammo bo'ldi");
                })
                .finally(() =>
                    setPageData((prev) => ({ ...prev, loading: false }))
                );
            return null;
        });
    };

    const columns = [
        {
            title: "Tuman nomi",
            dataIndex: "name",
            key: "name",
            width: "100%",
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
        <div className="others">
            <div>
                <h3>Navoiy viloyati tumanlari</h3>
                <CustomTable
                    columns={columns}
                    pageSizeOptions={[10, 20]}
                    getData={getDistricts}
                    onDelete={handleDelete}
                    onCreate={onCreate}
                    current={pageData.current}
                    pageSize={pageData.pageSize}
                    setCurrent={(newProp) =>
                        setPageData((prev) => ({ ...prev, current: newProp }))
                    }
                    setPageSize={(newProp) =>
                        setPageData((prev) => ({ ...prev, pageSize: newProp }))
                    }
                    tableData={pageData.districts}
                    loading={pageData.loading}
                    setLoading={(newProp) =>
                        setPageData((prev) => ({ ...prev, loading: newProp }))
                    }
                />
            </div>
        </div>
    );
};

export default Districts;
