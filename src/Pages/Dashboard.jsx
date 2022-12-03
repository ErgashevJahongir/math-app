import Contacts from "../Components/UsedComp/Contacts";
import OurExams from "../Components/UsedComp/OurExams";
import OurTeachers from "../Components/UsedComp/OurTeachers";
import SocialsAndSubscribe from "../Components/UsedComp/SocialsAndSubscribe";
import Taklif from "../Components/UsedComp/Taklif";

const Dashboard = () => {
    return (
        <div>
            <Taklif />
            <OurExams />
            <OurTeachers />
            <SocialsAndSubscribe />
            <Contacts />
        </div>
    );
};

export default Dashboard;
