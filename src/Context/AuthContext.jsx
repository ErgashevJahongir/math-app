import useToken from "../Hook/UseToken";
import { createContext, useEffect, useState } from "react";
import instance from "../Api/Axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const { token } = useToken();

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
            .post("/api/auth/whoiam?token=" + token)
            .then((data) => {
                setUser(data.data.data);
                setTimeout(() => {
                    setUserLoading(false);
                }, 1500);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() =>
                setTimeout(() => {
                    setUserLoading(false);
                }, 1500)
            );
    };

    useEffect(() => {
        getUser(token);
    }, [token]);

    const value = { userLoading, user, siginIn, signOut };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
