import BackgroundMain from "../../utils/BackgroundMain"
import FilterBar from "../../utils/FilterBar"
import NavBar from "../../utils/NavBar"
import GMap from "../mapPage/GMap"
import { HotelCard } from "../../hotel/HotelCard"
import { hotels } from "../../../utils/mockData"
import AnimatedPage from "../../animations/AnimatedPage"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const HomePage = () => {

    return (
        <AnimatedPage animation={animation}>
            <div>
                <HotelCard hotel={hotels[0]} />
            </div>
        </AnimatedPage>
    )
}



export default HomePage;