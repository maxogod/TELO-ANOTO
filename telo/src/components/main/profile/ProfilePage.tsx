import BackgroundMain from "../../utils/BackgroundMain";
import Filter from "../../utils/Filter";
import NavBar from "../../utils/NavBar";
import GMap from "../mapPage/GMap";


const ProfilePage = () => {
    return (
        <div>
            <GMap/>
            <BackgroundMain/>
            <Filter/>
            <h1>profile</h1>
            <NavBar opacity={80}/>
        </div>
    );
};

export default ProfilePage;