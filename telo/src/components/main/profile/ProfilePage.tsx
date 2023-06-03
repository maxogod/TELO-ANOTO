import BackgroundMain from "../../utils/BackgroundMain";
import FilterBar from "../../utils/FilterBar";
import NavBar from "../../utils/NavBar";
import GMap from "../mapPage/GMap";


const ProfilePage = () => {
    return (
        <div>
            <GMap />
            <BackgroundMain />
            <FilterBar />
            <h1>profile</h1>
            <NavBar opacity={80} />
        </div>
    );
};

export default ProfilePage;