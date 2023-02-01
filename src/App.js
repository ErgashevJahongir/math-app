import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AxiosInterceptor } from "./Api/Axios";
import { AuthProvider } from "./Context/AuthContext";
import { DataProvider } from "./Context/DataContext";
import { TableProvider } from "./Context/TableContext";
import RoutesPage from "./Router";

//siz birinchi o'rinda async state manager o'rnatishingiz kerak @tanstack/react-query  https://tanstack.com/query/latest
//global state manager o'rnatib oling zustand bo'ladi  https://github.com/pmndrs/zustand
//  -  https://habr.com/ru/company/timeweb/blog/646339/

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AxiosInterceptor>
                {/* // AxiosInterceptorni yo'qoting */}
                <AuthProvider>
                    {/* AuthProvider ham xato */}
                    <DataProvider>
                        <TableProvider>
                            <RoutesPage />
                        </TableProvider>
                    </DataProvider>
                </AuthProvider>
            </AxiosInterceptor>
        </QueryClientProvider>
    );
}

export default App;

