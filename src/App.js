import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { DataProvider } from "./Context/DataContext";
import { TableProvider } from "./Context/TableContext";
import RoutesPage from "./Router";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <DataProvider>
                <TableProvider>
                    <RoutesPage />
                </TableProvider>
            </DataProvider>
        </QueryClientProvider>
    );
}

export default App;
