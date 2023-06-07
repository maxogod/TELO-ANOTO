import BackgroundMain from "../../utils/BackgroundMain";
import FilterBar from "../../utils/FilterBar";
import NavBar from "../../utils/NavBar";
import GMap from "../mapPage/GMap";
import Favorites from "./Favorites";
import ProfileCard from "./ProfileCard";
import Reservations from "./Reservations";
import AnimatedPage from "../../animations/AnimatedPage";

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const ProfilePage = () => {
    return (
        <AnimatedPage animation={animation}>
            <div>
                <div className='flex flex-col items-center justify-center gap-6 mt-16'>
                    <ProfileCard />
                    <Favorites />
                    <Reservations />
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ProfilePage;