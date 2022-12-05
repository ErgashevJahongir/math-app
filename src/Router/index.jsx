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
import CondidateWithExamId from "../Pages/others/candidateWithExamId";
import Exams from "../Pages/Exams";
import useToken from "../Hook/UseToken";
import CondidateExams from "../Pages/others/candidateExams";

const RoutesPage = () => {
    const { user, userLoading } = useAuth();
    const { token } = useToken();

    if (userLoading && user) {
        return <Loading />;
    }

    console.log(user, userLoading);

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
                <Route path="exams" element={<Exams />} />
            </Route>
            <Route path="auth/signin" element={<SignIn />} />
            <Route path="*" element={<Error404 />} />
            <Route path="server-error" element={<Error500 />} />
        </Routes>
    );

    // return token ? (
    //     <Routes>
    //         <Route element={<LayoutMenu />}>
    //             <Route index element={<Dashboard />} />
    //             <Route
    //                 path="others/district"
    //                 element={
    //                     <RequireAuth>
    //                         <Districts />
    //                     </RequireAuth>
    //                 }
    //             />
    //             <Route
    //                 path="others/subject"
    //                 element={
    //                     <RequireAuth>
    //                         <Subjects />
    //                     </RequireAuth>
    //                 }
    //             />
    //             <Route
    //                 path="others/candidate"
    //                 element={
    //                     <RequireAuth>
    //                         <CondidateExams />
    //                     </RequireAuth>
    //                 }
    //             />
    //             <Route
    //                 path="others/candidates/:examIdWith"
    //                 element={
    //                     <RequireAuth>
    //                         <CondidateWithExamId />
    //                     </RequireAuth>
    //                 }
    //             />
    //             <Route
    //                 path="others/exam"
    //                 element={
    //                     <RequireAuth>
    //                         <ExamsComp />
    //                     </RequireAuth>
    //                 }
    //             />
    //             <Route path="exams" element={<Exams />} />
    //         </Route>
    //         <Route path="auth/signin" element={<SignIn />} />
    //         <Route path="*" element={<Error404 />} />
    //         <Route path="server-error" element={<Error500 />} />
    //     </Routes>
    // ) : (
    //     <Routes>
    //         <Route element={<LayoutMenu />}>
    //             <Route index element={<Dashboard />} />
    //             <Route path="exams" element={<Exams />} />
    //         </Route>
    //         <Route path="auth/signin" element={<SignIn />} />
    //         <Route path="*" element={<Error404 />} />
    //         <Route path="server-error" element={<Error500 />} />
    //     </Routes>
    // );
};

export default RoutesPage;
