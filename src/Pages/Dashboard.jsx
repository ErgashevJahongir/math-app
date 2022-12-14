import Contacts from "../Components/UsedComp/Contacts";
import OurExams from "../Components/UsedComp/OurExams";
import OurTeachers from "../Components/UsedComp/OurTeachers";
import ShowContent from "../Components/UsedComp/ShowContent";
import SocialsAndSubscribe from "../Components/UsedComp/SocialsAndSubscribe";
import Taklif from "../Components/UsedComp/Taklif";

const Dashboard = () => {
    return (
        <div>
            <ShowContent />
            <Taklif />
            <OurExams />
            <OurTeachers />
            <Contacts />
            <SocialsAndSubscribe />
        </div>
    );
};

export default Dashboard;
