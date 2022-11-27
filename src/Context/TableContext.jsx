import { DatePicker, Input, InputNumber, Radio } from "antd";
import moment from "moment";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { useData } from "../Hook/UseData";
import CustomSelect from "../Module/Select/Select";

const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
};

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
    const { subjectsData } = useData();
    let location = useLocation();

    const othersFormData = [
        {
            name: "name",
            label: "Tuman nomi",
            input: <Input placeholder="Tuman nomini kiriting" />,
        },
    ];

    const subjectsFormData = [
        {
            name: "name",
            label: "Fan nomi",
            input: <Input placeholder="Fan nomini kiriting" />,
        },
    ];

    const examsFormData = [
        {
            name: "subjectId",
            label: "Fan nomi",
            input: (
                <CustomSelect
                    selectData={subjectsData}
                    placeholder="Fanni tanlang"
                />
            ),
        },
        {
            name: "title",
            label: "Ma'lumot",
            input: <Input placeholder="Imtihon haqida ma'lumot" />,
        },
        {
            name: "startedDate",
            label: "Bo'lish vaqti",
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
            inputSelect: (initial) => (
                <CustomSelect
                    selectData={subjectsData}
                    placeholder="Fanni tanlang"
                    DValue={initial}
                />
            ),
        },
        {
            name: "title",
            label: "Ma'lumot",
            input: <Input placeholder="Imtihon haqida ma'lumot" />,
        },
        {
            name: "startedDate",
            label: "Bo'lish vaqti",
            input: <Input placeholder="Bo'lish vaqtini kiriting" />,
        },
        {
            name: "price",
            label: "Narxi",
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
            inputSelect: (initial) => (
                <Radio.Group defaultValue={initial}>
                    <Radio value="false"> Yo'q </Radio>
                    <Radio value="true"> Ha </Radio>
                </Radio.Group>
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
        default: {
            formData = { ...formData };
        }
    }

    const value = {
        formData,
    };

    return (
        <TableContext.Provider value={value}>{children}</TableContext.Provider>
    );
};
