import About from "../Components/UsedComp/About";
import Contacts from "../Components/UsedComp/Contacts";
import Courses from "../Components/UsedComp/Courses";
import OnlineTest from "../Components/UsedComp/OnlineTest";
import OurTeachers from "../Components/UsedComp/OurTeachers";
import PaymentType from "../Components/UsedComp/PaymentType";
import ShowContent from "../Components/UsedComp/ShowContent";

const Dashboard = () => {
    return (
        <div>
            <ShowContent />
            <About />
            <Courses />
            <PaymentType />
            <OurTeachers />
            <OnlineTest />
            <Contacts />
        </div>
    );
};

export default Dashboard;
