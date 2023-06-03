import BackgroundMain from "../../utils/BackgroundMain"
import FilterBar from "../../utils/FilterBar"
import NavBar from "../../utils/NavBar"
import GMap from "../mapPage/GMap"
import { HotelCard } from "../../hotel/HotelCard"
import { hotel } from "../../../utils/mockData"

const HomePage = () => {

    return (
        <div>
            <GMap />
            <BackgroundMain />
            <NavBar opacity={80} />
            <FilterBar numOfStars={2} distanceInKm={5} priceInPesos={10000} />
            <HotelCard hotel={hotel} />
        </div>
    );
};



export default HomePage;