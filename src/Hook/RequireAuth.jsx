import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Hook/UseAuth";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth/signin" state={{ from: location }} />;
    }
    return children;
};

export { RequireAuth };
