import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import {
    getDirection,
    getDistricts,
    getExams,
    getSubjects,
    getTeachers,
} from "../Api/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const { data: examsData, refetch: getExamsData } = useQuery(
        ["examsData"],
        () => getExams(0, 100)
    );
    const { data: subjectsData, refetch: getSubjectsData } = useQuery(
        ["subjectsData"],
        () => getSubjects()
    );
    const { data: teachersData, refetch: getTeachersData } = useQuery(
        ["teachersData"],
        () => getTeachers(0, 100)
    );
    const { data: districtsData, refetch: getDistrictsData } = useQuery(
        ["districtsData"],
        () => getDistricts()
    );
    const { data: directionsData, refetch: getDirectionData } = useQuery(
        ["directionsData"],
        () => getDirection(0, 100)
    );

    const value = {
        getSubjectsData,
        subjectsData: subjectsData?.data,
        getDistrictsData,
        districtsData: districtsData?.data,
        getExamsData,
        examsData: examsData?.data,
        getDirectionData,
        directionsData: directionsData?.data,
        getTeachersData,
        teachersData: teachersData?.data,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
