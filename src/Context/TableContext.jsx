import { DatePicker, Input, InputNumber, Radio } from "antd";
import moment from "moment";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useData } from "../Hook/UseData";
import CustomMultiplateSelect from "../Module/Select/MultiplateSelect";
import CustomSelect from "../Module/Select/Select";

const disabledDate = (current) => {
    return current && current < moment().endOf("day");
};

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
    const [examIdWithUrl, setExamIdWithUrl] = useState(1);
    const [examtableData, setExamtableData] = useState({
        directionId: false,
        subjectId: false,
    });
    const { subjectsData, districtsData, examsData, directionsData } =
        useData();
    let location = useLocation();

    const othersFormData = [
        {
            name: "name",
            label: "Tuman nomi",
            required: true,
            input: <Input placeholder="Tuman nomini kiriting" />,
        },
    ];

    const subjectsFormData = [
        {
            name: "name",
            label: "Fan nomi",
            required: true,
            input: <Input placeholder="Fan nomini kiriting" />,
        },
    ];

    const examsFormData = [
        {
            name: "subjectId",
            label: "Fan nomi",
            required: false,
            input: (
                <CustomSelect
                    selectData={subjectsData}
                    placeholder="Fanni tanlang"
                    disabled={examtableData.subjectId}
                    onChange={(e) =>
                        setExamtableData((prev) => {
                            return e
                                ? { ...prev, directionId: true }
                                : { ...prev, directionId: false };
                        })
                    }
                />
            ),
        },
        {
            name: "directionId",
            label: "Yo'nalish nomi",
            required: false,
            input: (
                <CustomSelect
                    selectData={directionsData}
                    placeholder="Yo'nalishni tanlang"
                    disabled={examtableData.directionId}
                    onChange={(e) =>
                        setExamtableData((prev) => {
                            return e
                                ? { ...prev, subjectId: true }
                                : { ...prev, subjectId: false };
                        })
                    }
                />
            ),
        },
        {
            name: "title",
            label: "Ma'lumot",
            required: true,
            input: <Input placeholder="Imtihon haqida ma'lumot" />,
        },
        {
            name: "startedDate",
            label: "Bo'lish vaqti",
            required: true,
            input: (
                <DatePicker
                    disabledDate={disabledDate}
                    format="YYYY-MM-DD HH:mm"
                    placeholder="Bo'lish vaqtini kiriting"
                    style={{ width: "100%" }}
                    showTime={{
                        defaultValue: moment("00:00:00", "HH:mm"),
                    }}
                />
            ),
        },
        {
            name: "price",
            label: "Narxi",
            required: true,
            input: (
                <InputNumber
                    placeholder="Imtixon narxi"
                    style={{ width: "100%" }}
                />
            ),
        },
        {
            name: "active",
            label: "Imtixon faolmi",
            required: true,
            input: (
                <Radio.Group>
                    <Radio value="false"> Yo'q </Radio>
                    <Radio value="true"> Ha </Radio>
                </Radio.Group>
            ),
        },
    ];

    const editExamsFormData = [
        {
            name: "subjectId",
            label: "Fan nomi",
            required: false,
            inputSelect: (initial) => {
                // if (initial) {
                //     setExamtableData((prev) => {
                //         return { ...prev, directionId: true };
                //     });
                // }

                return (
                    <CustomSelect
                        selectData={subjectsData}
                        placeholder="Fanni tanlang"
                        DValue={initial}
                        disabled={examtableData.subjectId}
                        onChange={(e) =>
                            setExamtableData((prev) => {
                                return e
                                    ? { ...prev, directionId: true }
                                    : { ...prev, directionId: false };
                            })
                        }
                    />
                );
            },
        },
        {
            name: "directionId",
            label: "Yo'nalish nomi",
            required: false,
            inputSelect: (initial) => {
                // if (initial) {
                //     setExamtableData((prev) => {
                //         return { ...prev, subjectId: true };
                //     });
                // }
                return (
                    <CustomSelect
                        selectData={directionsData}
                        placeholder="Yo'nalishni tanlang"
                        DValue={initial}
                        disabled={examtableData.directionId}
                        onChange={(e) =>
                            setExamtableData((prev) => {
                                return e
                                    ? { ...prev, subjectId: true }
                                    : { ...prev, subjectId: false };
                            })
                        }
                    />
                );
            },
        },
        {
            name: "title",
            label: "Ma'lumot",
            required: true,
            input: <Input placeholder="Imtihon haqida ma'lumot" />,
        },
        {
            name: "startedDate",
            label: "Bo'lish vaqti",
            required: true,
            input: <Input placeholder="Bo'lish vaqtini kiriting" />,
        },
        {
            name: "price",
            label: "Narxi",
            required: true,
            input: (
                <InputNumber
                    placeholder="Imtixon narxi"
                    style={{ width: "100%" }}
                />
            ),
        },
        {
            name: "active",
            label: "Imtixon faolmi",
            required: true,
            inputSelect: (initial) => (
                <Radio.Group defaultValue={initial}>
                    <Radio value="false"> Yo'q </Radio>
                    <Radio value="true"> Ha </Radio>
                </Radio.Group>
            ),
        },
    ];

    const condidatesCreateFormData = [
        {
            name: "firstName",
            label: "Ismi",
            required: true,
            input: <Input placeholder="Qatnashchi ismini kiriting" />,
        },
        {
            name: "lastName",
            label: "Familiyasi",
            required: true,
            input: <Input placeholder="Qatnashchi familiyasini kiriting" />,
        },
        {
            name: "phoneNumber",
            label: "Telefon nomeri",
            required: true,
            input: <Input placeholder="Qatnashchi nomerini kiriting" />,
        },
        {
            name: "classNumber",
            label: "Sinfi",
            required: true,
            input: <Input placeholder="Nechanchi sinfda o'qishi" />,
        },
        {
            name: "districtId",
            label: "Tuman nomi",
            required: true,
            input: (
                <CustomSelect
                    selectData={districtsData}
                    placeholder="Tumanni tanlang"
                />
            ),
        },
        {
            name: "examId",
            label: "Imtihon nomi",
            required: true,
            input: (
                <CustomSelect
                    selectData={examsData?.map((item) => ({
                        ...item,
                        name: item.title,
                    }))}
                    placeholder="Imtihonni tanlang"
                />
            ),
        },
    ];

    const directionFormData = [
        {
            name: "name",
            label: "Yo'nalish nomi",
            required: true,
            input: <Input placeholder="Yo'nalish nomini kiriting" />,
        },
        {
            name: "addSubjectList",
            label: "Fanni tanlang",
            required: true,
            input: (
                <CustomMultiplateSelect
                    selectData={subjectsData}
                    placeholder="Fanni tanlang"
                />
            ),
        },
    ];

    const editDirectionFormData = [
        {
            name: "name",
            label: "Yo'nalish nomi",
            required: true,
            input: <Input placeholder="Yo'nalish nomini kiriting" />,
        },
        {
            name: "addSubjectList",
            label: "Fanni tanlang",
            required: true,
            inputSelect: (initial) => (
                <CustomMultiplateSelect
                    selectData={subjectsData}
                    placeholder="Fanni tanlang"
                    DValue={initial}
                />
            ),
        },
    ];

    let formData = {};

    switch (location.pathname) {
        case "/others/district": {
            formData = {
                formData: othersFormData,
                editFormData: othersFormData,
                branchData: false,
                timeFilterInfo: false,
                deleteInfo: true,
                createInfo: true,
                editInfo: true,
                timelyInfo: false,
                editModalTitle: "Tuman nomini o'zgartirish",
                modalTitle: "Tuman qo'shish",
            };
            break;
        }
        case "/others/subject": {
            formData = {
                formData: subjectsFormData,
                editFormData: subjectsFormData,
                branchData: false,
                timeFilterInfo: false,
                deleteInfo: true,
                createInfo: true,
                editInfo: true,
                timelyInfo: false,
                editModalTitle: "Fan nomini o'zgartirish",
                modalTitle: "Fan qo'shish",
            };
            break;
        }
        case "/others/exam": {
            formData = {
                formData: examsFormData,
                editFormData: editExamsFormData,
                branchData: false,
                timeFilterInfo: false,
                deleteInfo: true,
                createInfo: true,
                editInfo: true,
                timelyInfo: false,
                editModalTitle: "Imtixon ma'lumotlarini o'zgartirish",
                modalTitle: "Imtixon qo'shish",
            };
            break;
        }
        case "/others/direction": {
            formData = {
                formData: directionFormData,
                editFormData: editDirectionFormData,
                branchData: false,
                timeFilterInfo: false,
                deleteInfo: true,
                createInfo: true,
                editInfo: true,
                timelyInfo: false,
                editModalTitle: "Yo'nalish ma'lumotlarini o'zgartirish",
                modalTitle: "Yo'nalish qo'shish",
            };
            break;
        }
        case `/others/candidates/${examIdWithUrl}`: {
            formData = {
                formData: condidatesCreateFormData,
                editFormData: condidatesCreateFormData,
                branchData: false,
                timeFilterInfo: false,
                deleteInfo: false,
                seenInfo: true,
                createInfo: true,
                editInfo: false,
                timelyInfo: false,
                editModalTitle: "Imtixon ma'lumotlarini o'zgartirish",
                modalTitle: "Imtixon qo'shish",
            };
            break;
        }
        default: {
            formData = { ...formData };
        }
    }

    const value = {
        formData,
        setExamIdWithUrl,
        setExamtableData,
    };

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    );
};
