import { useEffect } from "react";
import axios from "axios";

const token1 = JSON.parse(sessionStorage.getItem("math-test-app"));
const token2 = JSON.parse(localStorage.getItem("math-test-app"));

const instance = axios.create({
    baseURL: "http://143.198.183.45:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "uz",
        timeout: 10000,
        Authorization: `Bearer ${token1 || token2}`,
    },
});

const AxiosInterceptor = ({ children }) => {
    useEffect(() => {
        const reqInterceptor = (req) => {
            req.headers.Authorization = `Bearer ${token1 || token2}`;
            return req;
        };
        const reqErrInterceptor = (error) => {
            console.error("reqErrInterceptor", error);
            return Promise.reject(error);
        };
        const resInterceptor = (response) => {
            response.headers.Authorization = `Bearer ${token1 || token2}`;
            return response;
        };
        const resErrInterceptor = (error) => {
            console.error("resErrInterceptor", error);
            if (error?.response?.status === 401) {
                if (sessionStorage.getItem("math-test-app"))
                    sessionStorage.removeItem("math-test-app", token1);
                if (localStorage.getItem("math-test-app")) {
                    localStorage.removeItem("math-test-app", token2);
                }
                window.location.href = "/auth/signin";
            }
            return Promise.reject(error);
        };
        const reqinterceptor = instance.interceptors.request.use(
            reqInterceptor,
            reqErrInterceptor
        );
        const resinterceptor = instance.interceptors.response.use(
            resInterceptor,
            resErrInterceptor
        );
        return (
            () => instance.interceptors.request.eject(reqinterceptor),
            () => instance.interceptors.response.eject(resinterceptor)
        );
    }, []);
    return children;
};

export default instance;
export { AxiosInterceptor };
