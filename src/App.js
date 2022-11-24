import { AxiosInterceptor } from "./Api/Axios";
import { AuthProvider } from "./Context/AuthContext";
import { DataProvider } from "./Context/DataContext";
import RoutesPage from "./Router";

function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <AxiosInterceptor>
                    <RoutesPage />
                </AxiosInterceptor>
            </DataProvider>
        </AuthProvider>
    );
}

export default App;
