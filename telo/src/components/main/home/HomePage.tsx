import BackgroundMain from "../../utils/BackgroundMain"
import FilterBar from "../../utils/FilterBar"
import NavBar from "../../utils/NavBar"
import GMap from "../mapPage/GMap"
import { HotelCard } from "../../hotel/HotelCard"
import { hotels } from "../../../utils/mockData"

/*
        TODO:
        hotelCard animations (swipe in and out)
        hotelCard tap to see next/prev picture
        implement favorite onClick func
        implement hotel "book now" btn onClick func
        Make responsive; example dimensions where its not working [ ( 720x1440 ), any Ipad, galaxy fold ]
*/


const HomePage = () => {

    return (
        <div>
            <BackgroundMain />
            <NavBar opacity={80} />
            <FilterBar numOfStars={2} distanceInKm={5} priceInPesos={10000} />
            <HotelCard hotel={hotels[0]} />
        </div>
    )
}



export default HomePage;