import { Route, Routes } from "react-router-dom";
import LayoutMenu from "../Components/Layout/Layout";
import Dashboard from "../Pages/Dashboard";
import { SignIn } from "../Auth/SignIn";
import Error404 from "../Module/ErrorPages/Error404";
import Error500 from "../Module/ErrorPages/Error500";
import Loading from "../Components/Loading";
import Districts from "../Pages/Others/Districts";
import { RequireAuth } from "../Hook/RequireAuth";
import Subjects from "../Pages/Others/Subject";
import { useAuth } from "../Hook/UseAuth";
import ExamsComp from "../Pages/Others/Exams";
import CondidateWithExamId from "../Pages/Others/CondidateWithExamId";
import Exams from "../Pages/Exams";
import CondidateExams from "../Pages/Others/CondidateExams";
import Direction from "../Pages/Others/Direction";

const RoutesPage = () => {
    const { userLoading } = useAuth();

    if (userLoading) {
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
                <Route
                    path="others/subject"
                    element={
                        <RequireAuth>
                            <Subjects />
                        </RequireAuth>
                    }
                />
                <Route
                    path="others/candidate"
                    element={
                        <RequireAuth>
                            <CondidateExams />
                        </RequireAuth>
                    }
                />
                <Route
                    path="others/candidates/:examIdWith"
                    element={
                        <RequireAuth>
                            <CondidateWithExamId />
                        </RequireAuth>
                    }
                />
                <Route
                    path="others/exam"
                    element={
                        <RequireAuth>
                            <ExamsComp />
                        </RequireAuth>
                    }
                />
                <Route
                    path="others/direction"
                    element={
                        <RequireAuth>
                            <Direction />
                        </RequireAuth>
                    }
                />
                <Route path="exams" element={<Exams />} />
            </Route>
            <Route path="auth/signin" element={<SignIn />} />
            <Route path="*" element={<Error404 />} />
            <Route path="server-error" element={<Error500 />} />
        </Routes>
    );
};

export default RoutesPage;
