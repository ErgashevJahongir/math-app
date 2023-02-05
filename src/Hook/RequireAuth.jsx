import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { user } = useAuthStore((state) => state);

    if (!user) {
        return <Navigate to="/auth/signin" state={{ from: location }} />;
    }
    return children;
};

export { RequireAuth };
