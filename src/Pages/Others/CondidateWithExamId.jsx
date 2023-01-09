import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import instance from "../../Api/Axios";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";
import moment from "moment";

const CondidateWithExamId = () => {
    const [pageData, setPageData] = useState({
        condidateWithExamId: [],
        loading: true,
        current: 1,
        pageSize: 10,
        totalItems: 1,
    });
    const { examsData } = useData();
    const { examIdWith } = useParams();
    const navigate = useNavigate();
    const exam = examsData?.filter((item) => item?.id == examIdWith);

    const getCondifateWithId = (current, pageSize) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .get(
                `/api/candidate/list/${examIdWith}?page=${current}&size=${pageSize}`
            )
            .then((data) => {
                console.log(data);
                setPageData((prev) => ({
                    ...prev,
                    condidateWithExamId: data?.data?.data?.map((item) => ({
                        ...item,
                        subjectName: item?.exam?.subjectId?.name,
                        subjectId: item?.exam?.subjectId?.id,
                        directionId: item?.exam?.directionId?.id,
                        directionName: item?.exam?.directionId?.name,
                        participatedTime: moment(item?.participatedTime).format(
                            "YYYY-MM-DD hh:mm"
                        ),
                    })),
                }));
                setPageData((prev) => ({
                    ...prev,
                    totalItems: data.data?.pageable?.count,
                }));
            })
            .catch((error) => {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Abuturientlarni yuklashda muammo bo'ldi");
            })
            .finally(() =>
                setPageData((prev) => ({ ...prev, loading: false }))
            );
    };

    const onCreate = (values) => {
        setPageData((prev) => ({ ...prev, loading: true }));
        instance
            .post("/api/candidate/create", { ...values })
            .then(function (response) {
                message.success("Abuturient muvaffaqiyatli qo'shildi");
                getCondifateWithId(pageData.current - 1, pageData.pageSize);
            })
            .catch(function (error) {
                console.error(error);
                if (error.response?.status === 500) navigate("/server-error");
                message.error("Abuturientni qo'shishda muammo bo'ldi");
            })
            .finally(() => {
                setPageData((prev) => ({ ...prev, loading: false }));
            });
    };

    const columns = [
        {
            title: "Ismi",
            dataIndex: "firstName",
            key: "firstName",
            width: "13%",
            search: true,
            sorter: (a, b) => {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                if (a.firstName > b.firstName) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Familiyasi",
            dataIndex: "lastName",
            key: "lastName",
            width: "13%",
            search: true,
            sorter: (a, b) => {
                if (a.lastName < b.lastName) {
                    return -1;
                }
                if (a.lastName > b.lastName) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Nomeri",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            width: "15%",
            search: true,
            sorter: (a, b) => {
                if (a.phoneNumber < b.phoneNumber) {
                    return -1;
                }
                if (a.phoneNumber > b.phoneNumber) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Yashash tumani",
            dataIndex: "district",
            key: "district",
            width: "15%",
            search: true,
            sorter: (a, b) => {
                if (a.district < b.district) {
                    return -1;
                }
                if (a.district > b.district) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Sinf",
            dataIndex: "classNumber",
            key: "classNumber",
            width: "10%",
            search: false,
            sorter: (a, b) => {
                if (a.classNumber < b.classNumber) {
                    return -1;
                }
                if (a.classNumber > b.classNumber) {
                    return 1;
                }
                return 0;
            },
        },
        {
            title: "Imtihon fani",
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
            title: "Yo'naish",
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
            title: "To'lov vaqti",
            dataIndex: "participatedTime",
            key: "participatedTime",
            width: "10%",
            search: false,
            render: (record) => {
                return record ? record : "null";
            },
        },
        {
            title: "To'lov ",
            dataIndex: "paid",
            key: "paid",
            width: "10%",
            search: false,
            sorter: (a, b) => {
                if (a.paid < b.paid) {
                    return -1;
                }
                if (a.paid > b.paid) {
                    return 1;
                }
                return 0;
            },
            render: (record) => {
                return record ? "To'lov qilingan" : "To'lov qilinmagan";
            },
        },
        {
            title: "Qatnashganligi",
            dataIndex: "participated",
            key: "participated",
            width: "10%",
            search: false,
            sorter: (a, b) => {
                if (a.participated < b.participated) {
                    return -1;
                }
                if (a.participated > b.participated) {
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
            <h2 style={{ marginBottom: 10 }}>
                {exam[0]?.title} imtihon qatnashchilari
            </h2>
            <CustomTable
                columns={columns}
                pageSizeOptions={[10, 20]}
                getData={getCondifateWithId}
                onCreate={onCreate}
                totalItems={pageData.totalItems}
                current={pageData.current}
                pageSize={pageData.pageSize}
                setCurrent={(newProp) =>
                    setPageData((prev) => ({ ...prev, current: newProp }))
                }
                setPageSize={(newProp) =>
                    setPageData((prev) => ({ ...prev, pageSize: newProp }))
                }
                tableData={pageData.condidateWithExamId}
                loading={pageData.loading}
                setLoading={(newProp) =>
                    setPageData((prev) => ({ ...prev, loading: newProp }))
                }
            />
        </div>
    );
};

export default CondidateWithExamId;
