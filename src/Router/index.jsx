import { Route, Routes } from "react-router-dom";
import { useData } from "../Hook/UseData";
import LayoutMenu from "../Components/Layout/Layout";
import Dashboard from "../Pages/Dashboard";
import { SignIn } from "../Auth/SignIn";
import Error404 from "../Module/ErrorPages/Error404";
import Error500 from "../Module/ErrorPages/Error500";
import Loading from "../Components/Loading";
import Districts from "../Pages/Others/Districts";
import { RequireAuth } from "../Hook/RequireAuth";

const RoutesPage = () => {
    const { user, userLoading } = useData();

    if (user && userLoading) {
        return <Loading />;
    }

    return (
        <Routes>
            <Route element={<LayoutMenu />}>
                <Route index element={<Dashboard />} />
                <Route
                    path="others/district"
                    element={
                        <RequireAuth>
                            <Districts />
                        </RequireAuth>
                    }
                />
            </Route>
            <Route path="auth/signin" element={<SignIn />} />
            <Route path="*" element={<Error404 />} />
            <Route path="server-error" element={<Error500 />} />
        </Routes>
    );
};

export default RoutesPage;
