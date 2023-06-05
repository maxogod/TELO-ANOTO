import BackgroundMain from "../../utils/BackgroundMain";
import FilterBar from "../../utils/FilterBar";
import NavBar from "../../utils/NavBar";
import GMap from "../mapPage/GMap";
import Favorites from "./Favorites";
import ProfileCard from "./ProfileCard";
import Reservations from "./Reservations";


const ProfilePage = () => {
    return (
        <div>
            <BackgroundMain/>
            <NavBar opacity={80}/>
            <FilterBar numOfStars={2} distanceInKm={5} priceInPesos={10000} />

            <div className=' flex flex-col h-full items-center justify-center gap-6 mt-16'>
                <ProfileCard/>
                <Favorites/>
                <Reservations/>
            </div>
        </div>
    );
};

export default ProfilePage;