import { createContext, useEffect, useState } from "react";
import instance from "../Api/Axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [subjectsData, setSubjectsData] = useState([]);
    const [districtsData, setDistrictsData] = useState([]);

    const getSubjectsData = () => {
        instance
            .get("/api/subject/list")
            .then((data) => {
                setSubjectsData(data.data.data);
            })
            .catch((err) => console.error(err));
    };

    const getDistrictsData = () => {
        instance
            .get("/api/district/list")
            .then((data) => {
                setDistrictsData(data.data.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getSubjectsData();
        getDistrictsData();
    }, []);

    const value = {
        getSubjectsData,
        subjectsData,
        getDistrictsData,
        districtsData,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
