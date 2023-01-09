import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import useToken from "../Hook/UseToken";
import pic from "./Teacher-pic.svg";
import logo from "./markaz-img.png";
import "./signin.css";
import { useAuth } from "../Hook/UseAuth";
import axios from "axios";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const { setToken } = useToken();
    const { user } = useAuth();
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        var { phone, password } = document.forms[0];

        axios
            .post(`${REACT_APP_BASE_URL}/api/auth/login`, {
                number: phone.value,
                password: password.value,
            })
            .then((data) => {
                setToken(data.data.data, true);
                window.location.href = "/";
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
                navigate("/auth/signin");
                alert(err.response?.data?.message);
            });
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
        setLoading(false);
    }, [user]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="login">
            <div className="login__img">
                <img src={pic} alt="teacher" />
            </div>
            <div className="login__item">
                <div className="login__item-content">
                    <img src={logo} alt="markaz-logo" width={90} />
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
    );
};
