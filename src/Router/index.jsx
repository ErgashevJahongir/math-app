import {Suspense, lazy} from "react"
import { Route, Routes } from "react-router-dom";
import LayoutMenu from "../Components/Layout/Layout";

import { SignIn } from "../Auth/SignIn";
import Error404 from "../Module/ErrorPages/Error404";
import Error500 from "../Module/ErrorPages/Error500"; //keyin 500 Server Errorni bunaqa handle qilish xato
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
import ContactsComp from "../Pages/Others/Contacts";
import Questions from "../Pages/Others/Questions";
import TeachersCompo from "../Pages/Others/TeacherSComp";
import Profil from "../Pages/Profil";
// pagelarni lazy load qilib import qiling shunda code splitting bo'ladi va kod hajmi bo'linadi tezroq render bo'lishga yordam beradi, bunda og'ir ochilayotgan va js ko'p hydrate bo'layotgan pagelarni bo'lib tashash zarur
const Dashboard = lazy(() => import("../Pages/Dashboard")) //yangi holatda import bo'lishi
// import Dashboard from "../Pages/Dashboard"; //eskisi

const RoutesPage = () => {
    const { userLoading } = useAuth();

    if (userLoading) {
        return <Loading />;
    }

    //keyin authorization bunaqa qilinmaydi authorization single object bo'lishi kerak va editable oson bo'lishi zarur, bu bo'yicha screenshot tashayman githubga shuni yaxshilab ko'rishingiz kerak
    return (
        <Suspense fallback={<div>Mana bu yerda page loading qo'ying bu yerda loading bo'ladi</div>}>

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
                    path="others/questions"
                    element={
                        <RequireAuth>
                            <Questions />
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
                <Route path="profil" element={<Profil />} />
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
