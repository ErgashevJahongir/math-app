import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { getUser, loginRequest } from "../Api/api";
import { useAuthStore } from "../store/auth";
import Loading from "../Components/Loading";
import pic from "./Teacher-pic.svg";
import logo from "./markaz-img.png";
import "./signin.css";

export const SignIn = () => {
    const {
        setToken: setAccessToken,
        setUser,
        user,
    } = useAuthStore((state) => state);
    let navigate = useNavigate();

    const openNotification = () => {
        notification.error({
            message: "Kirishda xatolik",
            description: "Telefon nomer yoki parol noto'g'ri kiritildi.",
        });
    };

    const userMutation = useMutation((body) => getUser(body), {
        onSuccess: (data) => {
            !(data.data.roles[0] === "USER") && setUser(data.data);
        },
    });

    const loginMutation = useMutation((body) => loginRequest(body), {
        onSuccess: (data) => {
            setAccessToken(data.data);
            userMutation.mutate(data.data);
            navigate("/");
        },
        onError: (error) => {
            openNotification();
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        var { phone, password } = document.forms[0];
        loginMutation.mutate({
            number: phone.value,
            password: password.value,
        });
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return (
        <>
            {loginMutation.isLoading ? <Loading /> : null}
            <div className="login">
                <div className="login__img">
                    <img
                        loading="lazy"
                        decoding="async"
                        src={pic}
                        alt="teacher"
                    />
                </div>
                <div className="login__item">
                    <div className="login__item-content">
                        <img
                            loading="lazy"
                            decoding="async"
                            src={logo}
                            alt="markaz-logo"
                            width={90}
                        />
                        <h3 className="login__title">
                            Navoiy Qorako'l o'quv markazi
                        </h3>
                        <form onSubmit={handleSubmit} className="new-login">
                            <div>
                                <label htmlFor="phone" className="new-label">
                                    Telefon nomer
                                </label>
                                <input
                                    type="text"
                                    placeholder="Telefon nomerni kiriting..."
                                    className="new-input"
                                    id="phone"
                                    name="phone"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="new-label">
                                    Parol
                                </label>
                                <input
                                    type="password"
                                    placeholder="Parolni kiriting..."
                                    className="new-input"
                                    id="password"
                                    name="password"
                                    required
                                />
                            </div>
                            <div>
                                <button type="submit" className="new-button">
                                    Kirish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
