import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import useToken from "../Hook/UseToken";
import "./signin.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const { token, setToken } = useToken();
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
                setToken(data.data, true);
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
        if (token) {
            navigate("/");
        }
        setLoading(false);
    }, [token]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="new-login">
                <h3>Kirish</h3>
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
        </>
    );
};
