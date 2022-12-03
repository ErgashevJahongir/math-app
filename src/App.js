import { AxiosInterceptor } from "./Api/Axios";
import { AuthProvider } from "./Context/AuthContext";
import { DataProvider } from "./Context/DataContext";
import { TableProvider } from "./Context/TableContext";
import RoutesPage from "./Router";

function App() {
    return (
        <AxiosInterceptor>
            <AuthProvider>
                <DataProvider>
                    <TableProvider>
                        <RoutesPage />
                    </TableProvider>
                </DataProvider>
            </AuthProvider>
        </AxiosInterceptor>
    );
}

export default App;
