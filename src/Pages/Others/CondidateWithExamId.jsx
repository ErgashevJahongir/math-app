import { useState } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { createCondedate, getCondedate } from "../../Api/api";
import CustomTable from "../../Module/Table/Table";
import { useData } from "../../Hook/UseData";
import moment from "moment";
import { useMutation, useQuery } from "@tanstack/react-query";

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
    const exam = examsData?.filter((item) => item?.id == examIdWith);
    const { data, isLoading, refetch, isError } = useQuery(
        ["exams", pageData],
        () => getCondedate(examIdWith, pageData.current - 1, pageData.pageSize)
    );

    if (isError) {
        message.error("Abuturientlarni yuklashda muammo bo'ldi");
    }

    const createMutation = useMutation((body) => createCondedate(body), {
        onSuccess: (data) => {
            data.code === 211 && message.error(data.message);
            data.code === 200 &&
                message.success("Abuturient muvaffaqiyatli qo'shildi");
            refetch();
        },
        onError: (error) => {
            message.error("Abuturientni qo'shishda muammo bo'ldi");
            console.error(error);
        },
    });

    const onCreate = (values) => {
        createMutation.mutate({ ...values });
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
                getData={refetch}
                onCreate={onCreate}
                totalItems={data?.pageable?.count}
                current={pageData.current}
                pageSize={pageData.pageSize}
                setCurrent={(newProp) =>
                    setPageData((prev) => ({ ...prev, current: newProp }))
                }
                setPageSize={(newProp) =>
                    setPageData((prev) => ({ ...prev, pageSize: newProp }))
                }
                tableData={data?.data?.map((item) => ({
                    ...item,
                    subjectName: item?.exam?.subjectId?.name,
                    subjectId: item?.exam?.subjectId?.id,
                    directionId: item?.exam?.directionId?.id,
                    directionName: item?.exam?.directionId?.name,
                    participatedTime: moment(item?.participatedTime).format(
                        "YYYY-MM-DD hh:mm"
                    ),
                }))}
                loading={isLoading}
            />
        </div>
    );
};

export default CondidateWithExamId;
