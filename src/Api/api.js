import axios from "axios";
import httpStatusCodes from "http-status-codes";
import { useAuthStore } from "../store/auth";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const defaultToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTk4OTk3Nzc2NjU1IiwidXNlcl9hdXRob3JpdGllcyI6IlVTRVIiLCJ1c2VyX2lkIjoyLCJ1c2VyX25hbWUiOiIrOTk4OTk3Nzc2NjU1IiwiaWF0IjoxNjc2MTcwNDcxLCJleHAiOjE2NzYyMDY0NzF9.ZpTb2nzJbvqQmCkH1dzxGOOIkVh1ci362lXI5_Yf6sKsti1GNwNWn7gkSX3pAJ4HAd1zJTabYSeOlwmmmq2BlQ";

const axiosInstance = axios.create({
    baseURL: REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    config.headers = config.headers ?? {};
    const accessToken = useAuthStore.getState().token;

    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
        config.headers["Authorization"] = `Bearer ${defaultToken}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config ?? {};

        if (
            (error.response?.status === httpStatusCodes.FORBIDDEN ||
                error.response?.status === httpStatusCodes.UNAUTHORIZED) &&
            !originalRequest.isRetry
        ) {
            originalRequest.isRetry = true;

            const tokens = useAuthStore.getState().token;
            sessionStorage.removeItem("math-test-app", tokens);
            useAuthStore.setState({ token: null, user: null });

            return await axiosInstance.request(originalRequest);
        }

        return await Promise.reject(error);
    }
);

export default axiosInstance;

export const loginRequest = async (body) => {
    const res = await axiosInstance.post("/api/auth/login", body);
    return res.data;
};

export const getUser = async (token) => {
    const res = await axios({
        method: "post",
        baseURL: `${REACT_APP_BASE_URL}`,
        url: `/api/auth/whoAmI?token=${token}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

export const createUser = async (values) => {
    const res = await axiosInstance.post("/api/user", values);
    return res.data;
};

export const editUser = async (id, values) => {
    const res = await axiosInstance.put(`/api/user/update/${id}`, values);
    return res.data;
};

export const getExams = async (current, pageSize) => {
    const res = await axiosInstance.get(
        `/api/exam/list?page=${current}&size=${pageSize}`
    );
    return res.data;
};

export const createOrEditExams = async (values) => {
    const res = await axiosInstance.post("/api/exam/createOrUpdate", values);
    return res.data;
};

export const deleteExams = async (item) => {
    const res = await axiosInstance.delete(`/api/exam/delete/${item}`);
    return res.data;
};

export const getDistricts = async () => {
    const res = await axiosInstance.get("/api/district/list");
    return res.data;
};

export const createOrEditDistricts = async (values) => {
    const res = await axiosInstance.post(
        "/api/district/createOrUpdate",
        values
    );
    return res.data;
};

export const deleteDistricts = async (item) => {
    const res = await axiosInstance.delete(`/api/district/delete/${item}`);
    return res.data;
};

export const getSubjects = async () => {
    const res = await axiosInstance.get("/api/subject/list");
    return res.data;
};

export const createOrEditSubjects = async (values) => {
    const res = await axiosInstance.post("/api/subject/createOrUpdate", values);
    return res.data;
};

export const deleteSubjects = async (item) => {
    const res = await axiosInstance.delete(`/api/subject/delete/${item}`);
    return res.data;
};

export const getTeachers = async (current, pageSize) => {
    const res = await axiosInstance.get(
        `/api/teacher/list?page=${current}&size=${pageSize}`
    );
    return res.data;
};

export const createTeachers = async (values) => {
    const res = await axiosInstance.post("/api/teacher/create", values);
    return res.data;
};

export const editTeachers = async (values) => {
    const res = await axiosInstance.put(
        `/api/teacher/update/${values.id}`,
        values
    );
    return res.data;
};

export const deleteTeachers = async (item) => {
    const res = await axiosInstance.delete(`/api/teacher/delete/${item}`);
    return res.data;
};

export const getDirection = async (current, pageSize) => {
    const res = await axiosInstance.get(
        `/api/direction/list?page=${current}&size=${pageSize}`
    );
    return res.data;
};

export const createDirection = async (values) => {
    const res = await axiosInstance.post("/api/direction/create", values);
    return res.data;
};

export const editDirection = async (values) => {
    const res = await axiosInstance.post(
        `/api/direction/update/${values.id}`,
        values
    );
    return res.data;
};

export const deleteDirection = async (item) => {
    const res = await axiosInstance.delete(`/api/direction/delete/${item}`);
    return res.data;
};

export const getContacts = async () => {
    const res = await axiosInstance.get("/api/contact/list");
    return res.data;
};

export const getContactMain = async () => {
    const res = await axiosInstance.get("/api/contact/main-contact");
    return res.data;
};

export const createContact = async (values) => {
    const res = await axiosInstance.post("/api/contact/create", values);
    return res.data;
};

export const editContact = async (values) => {
    const res = await axiosInstance.post(
        `/api/contact/update/${values.id}`,
        values
    );
    return res.data;
};

export const deleteContact = async (item) => {
    const res = await axiosInstance.delete(`/api/contact/${item}`);
    return res.data;
};

export const getCondedate = async (examIdWith, current, pageSize) => {
    const res = await axiosInstance.get(
        `/api/candidate/list/${examIdWith}?page=${current}&size=${pageSize}`
    );
    return res.data;
};

export const createCondedate = async (values) => {
    const res = await axiosInstance.post("/api/candidate/create", values);
    return res.data;
};

export const createPayment = async (values) => {
    const res = await axiosInstance.post("/api/payment/create", values);
    return res.data;
};

export const createPaymentCodeVerify = async (values) => {
    const res = await axiosInstance.post("/api/payment/verifyCode", values);
    return res.data;
};
