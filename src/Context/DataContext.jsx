import { Input } from "antd";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import instance from "../Api/Axios";
import useToken from "../Hook/UseToken";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // const [user, setUser] = useState({});
    const [userLoading, setUserLoading] = useState(true);
    const [measurementData, setMeasurementData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const { token } = useToken();
    let location = useLocation();

    const othersData = [
        {
            name: "name",
            label: "Nomi",
            input: <Input />,
        },
    ];

    // const getUserData = (token) => {
    //     instance
    //         .post("/api/auth", {
    //             token: token,
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setUserLoading(false);
    //             setUser(data.data.data);
    //         })
    //         .catch((err) => {
    //             setUserLoading(false);
    //             console.error(err);
    //         });
    // };

    // const getMeasurementData = () => {
    //     instance
    //         .get("api/socks/factory/measurement/getAll")
    //         .then((data) => {
    //             setMeasurementData(data.data.data);
    //         })
    //         .catch((err) => console.error(err));
    // };

    // const getCategoryData = () => {
    //     instance
    //         .get("api/socks/factory/category/getAll")
    //         .then((data) => {
    //             setCategoryData(data.data.data);
    //         })
    //         .catch((err) => console.error(err));
    // };

    useEffect(() => {
        // getUserData(token);
        // getMeasurementData();
        // getCategoryData();
    }, []);

    let formData = {};

    switch (location.pathname) {
        case "/others": {
            formData = {
                formData: othersData,
                editFormData: othersData,
                branchData: false,
                timeFilterInfo: false,
                deleteInfo: false,
                createInfo: false,
                editInfo: false,
                timelyInfo: false,
                editModalTitle: "O'zgartirish",
                modalTitle: "Yangi qo'shish",
            };
            break;
        }
        default: {
            formData = { ...formData };
        }
    }

    const value = {
        formData,
        measurementData,
        // getCategoryData,
        // getUserData,
        categoryData,
        // user,
        userLoading,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
