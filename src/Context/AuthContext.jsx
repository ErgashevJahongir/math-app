import useToken from "../Hook/UseToken";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const { token, setToken } = useToken();

    const siginIn = (newUser, cb) => {
        setUser(newUser);
        cb();
        // const location = useLocation();
        // const fromPage = location.state?.from?.pathname || '/';
        // cb() =  () => navigate(fromPage, { replace: true })
    };

    const signOut = (cb) => {
        setUser(null);
        cb();
        // cb() = () => signOut(() => navigate('/', { replace: true }))
    };

    const getUser = (token) => {
        setUserLoading(true);
        axios({
            method: "post",
            baseURL: `${REACT_APP_BASE_URL}`,
            url: `/api/auth/whoAmI?token=${token}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((data) => {
                console.log(data, token);
                !(data.data.data.roles[0] === "USER") &&
                    setUser(data.data.data);
                setUserLoading(false);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => setUserLoading(false));
    };

    useEffect(() => {
        token
            ? getUser(token)
            : axios.get(`${REACT_APP_BASE_URL}/api/auth/token`).then((data) => {
                  setToken(data.data.data, true);
                  window.location.reload();
              });
    }, [token]);

    const value = { userLoading, user, siginIn, signOut, getUser };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
