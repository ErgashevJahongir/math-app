import axios from "axios";
import httpStatusCodes from "http-status-codes";
import { useAuthStore } from "../store/auth";
//keyin env fileni har doim gitignore tiqing security jihatdan maqullanadi
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
    baseURL: REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    config.headers = config.headers ?? {};
    const accessToken = useAuthStore.getState().token;

    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
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

            //global state managerdan ovolasiz shu yerda bu qism render bo'lishidan oldin ham shu yerda tuadi, bu yerda refresh token token yangilab olish keltirganman
            const tokens = useAuthStore.getState().refreshToken;

            //   const {
            //     data: { accessToken, refreshToken },
            //   } = await axios.ge(refresh, {
            //     baseURL: BASE_URL,
            //     headers: {
            //       [HEADERS_NAMES.AUTHORIZATION]: `Bearer ${tokens.refreshToken}`,
            //     },
            //   })

            //   saveTokens({ accessToken, refreshToken })

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

