import { createContext, useEffect, useState } from "react";
import instance from "../Api/Axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [subjectsData, setSubjectsData] = useState([]);
    const [teachersData, setTeachersData] = useState([]);
    const [districtsData, setDistrictsData] = useState([]);
    const [examsData, setExamsData] = useState([]);
    const [directionsData, setDirectionsData] = useState([]);

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

    const getExamsData = () => {
        instance
            .get("/api/exam/list?page=0&size=100")
            .then((data) => {
                setExamsData(data.data.data);
            })
            .catch((err) => console.error(err));
    };

    const getDirectionData = () => {
        instance
            .get("/api/direction/list?page=0&size=100")
            .then((data) => {
                setDirectionsData(data.data.data);
            })
            .catch((err) => console.error(err));
    };

    const getTeachersData = () => {
        instance
            .get("/api/teacher/list?page=0&size=100")
            .then((data) => {
                setTeachersData(data.data.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getSubjectsData();
        getDistrictsData();
        getExamsData();
        getDirectionData();
        getTeachersData();
    }, []);

    const value = {
        getSubjectsData,
        subjectsData,
        getDistrictsData,
        districtsData,
        getExamsData,
        examsData,
        getDirectionData,
        directionsData,
        getTeachersData,
        teachersData,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
