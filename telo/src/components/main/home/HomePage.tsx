import BackgroundMain from "../../utils/BackgroundMain"
import FilterBar from "../../utils/FilterBar"
import NavBar from "../../utils/NavBar"
import GMap from "../mapPage/GMap"
import { HotelCard } from "../../hotel/HotelCard"
import { hotels } from "../../../utils/mockData"

const HomePage = () => {

    return (
        <div>
            <GMap />
            <BackgroundMain />
            <NavBar opacity={80} />
            <FilterBar numOfStars={2} distanceInKm={5} priceInPesos={10000} />
            <HotelCard hotel={hotels[0]} />
        </div>
    )
}



export default HomePage;