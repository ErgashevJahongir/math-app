import About from "../Components/UsedComp/About";
import Contacts from "../Components/UsedComp/Contacts";
import Courses from "../Components/UsedComp/Courses";
import OurTeachers from "../Components/UsedComp/OurTeachers";
import ShowContent from "../Components/UsedComp/ShowContent";

const Dashboard = () => {
    return (
        <div>
            <ShowContent />
            <About />
            <Courses />
            <OurTeachers />
            <Contacts />
        </div>
    );
};

export default Dashboard;
