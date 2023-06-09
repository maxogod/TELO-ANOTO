import { HotelCard } from "../../hotel/HotelCard"
import AnimatedPage from "../../animations/AnimatedPage"
import { hotels } from "../../../utils/mockData"
import NavBar from "../../utils/NavBar"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const titleCarousel = [
    'A donde te gustaria ir hoy?',
    'sale telo?',
    'que ondaaa',
    'que pinta?',
    'que sale?',
    'hoy se sale',
]


const HomePage = () => {

    return (
        <>
            <NavBar opacity={80} />
            <AnimatedPage animation={animation}>
                <div>
                    <HotelCard hotel={hotels[0]} title={titleCarousel[Math.floor(Math.random() * titleCarousel.length)]} />
                </div>
            </AnimatedPage>
        </>
    )
}



export default HomePage;