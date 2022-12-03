import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AxiosInterceptor } from "./Api/Axios";
import { SignIn } from "./Auth/SignIn";
import { AuthProvider } from "./Context/AuthContext";
import { DataProvider } from "./Context/DataContext";
import { TableProvider } from "./Context/TableContext";
import useToken from "./Hook/UseToken";
import RoutesPage from "./Router";

function App() {
    const { token } = useToken();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!token) {
    //         return navigate("/auth/signin", { replace: true });
    //     }
    // }, []);

    return (
        <>
            {/* {token ? ( */}
            <AxiosInterceptor>
                <AuthProvider>
                    <DataProvider>
                        <TableProvider>
                            <RoutesPage />
                        </TableProvider>
                    </DataProvider>
                </AuthProvider>
            </AxiosInterceptor>
            {/* ) : null}
            {token ? null : (
                <Routes>
                    <Route path="/auth/signin" element={<SignIn />} />
                    <Route
                        path="*"
                        element={<Navigate to="/auth/signin" replace />}
                    />
                </Routes>
            )} */}
        </>
    );
}

export default App;
