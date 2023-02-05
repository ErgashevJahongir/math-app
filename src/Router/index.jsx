import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Auth/SignIn";
import { RequireAuth } from "../Hook/RequireAuth";
const LayoutMenu = lazy(() => import("../Components/Layout/Layout"));
const Error404 = lazy(() => import("../Module/ErrorPages/Error404"));
const Error500 = lazy(() => import("../Module/ErrorPages/Error500"));
const Loading = lazy(() => import("../Components/Loading"));
const Districts = lazy(() => import("../Pages/Others/Districts"));
const Subjects = lazy(() => import("../Pages/Others/Subject"));
const ExamsComp = lazy(() => import("../Pages/Others/Exams"));
const CondidateWithExamId = lazy(() =>
    import("../Pages/Others/CondidateWithExamId")
);
const Exams = lazy(() => import("../Pages/Exams"));
const CondidateExams = lazy(() => import("../Pages/Others/CondidateExams"));
const Direction = lazy(() => import("../Pages/Others/Direction"));
const ContactsComp = lazy(() => import("../Pages/Others/Contacts"));
const TeachersCompo = lazy(() => import("../Pages/Others/TeacherSComp"));
const Profil = lazy(() => import("../Pages/Profil"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));

const RoutesPage = () => {
    return (
        <Suspense fallback={<Loading />}>
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
                    <Route
                        path="others/contacts"
                        element={
                            <RequireAuth>
                                <ContactsComp />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="others/teachers"
                        element={
                            <RequireAuth>
                                <TeachersCompo />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="profil"
                        element={
                            <RequireAuth>
                                <Profil />
                            </RequireAuth>
                        }
                    />
                    <Route path="exams" element={<Exams />} />
                </Route>
                <Route path="auth/signin" element={<SignIn />} />
                <Route path="*" element={<Error404 />} />
                <Route path="server-error" element={<Error500 />} />
            </Routes>
        </Suspense>
    );
};

export default RoutesPage;
