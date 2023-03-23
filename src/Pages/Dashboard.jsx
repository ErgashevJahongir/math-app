import { lazy } from "react";
const Contacts = lazy(() => import("../Components/UsedComp/Contacts"));
const Courses = lazy(() => import("../Components/UsedComp/Courses"));
const OnlineTest = lazy(() => import("../Components/UsedComp/OnlineTest"));
const OurTeachers = lazy(() => import("../Components/UsedComp/OurTeachers"));
const ShowContent = lazy(() => import("../Components/UsedComp/ShowContent"));
const PaymentType = lazy(() => import("../Components/UsedComp/PaymentType"));
const About = lazy(() => import("../Components/UsedComp/About"));

const Dashboard = () => {
    return (
        <>
            <ShowContent />
            <About />
            <Courses />
            <PaymentType />
            <OurTeachers />
            <OnlineTest />
            <Contacts />
        </>
    );
};

export default Dashboard;
