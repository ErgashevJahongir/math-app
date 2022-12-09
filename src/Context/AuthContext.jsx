import useToken from "../Hook/UseToken";
import { createContext, useEffect, useState } from "react";
import instance from "../Api/Axios";
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
        instance
            .post("/api/auth/whoAmI?token=" + token)
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
            : instance
                  .get(`${REACT_APP_BASE_URL}/api/auth/token`)
                  .then((data) => {
                      getUser(data.data?.data);
                      setToken(data.data.data, true);
                  });
    }, [token]);

    const value = { userLoading, user, siginIn, signOut };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
