import { useEffect, useState } from "react"

import { HotelCard } from "../../hotel/HotelCard"
import AnimatedPage from "../../animations/AnimatedPage"
import { hotels } from "../../../utils/mockData"
import NavBar from "../../utils/NavBar"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}
const HomePage = ({setShowMap, currentHotelIndex, setCurrentHotelIndex }:
    { currentHotelIndex: number, setCurrentHotelIndex: Function, setShowMap: Function }) => {

    setShowMap(false)
    const [currentHotel, setCurrentHotel] = useState(hotels[currentHotelIndex])

    useEffect(() => {
        setCurrentHotel(hotels[currentHotelIndex])
    }, [currentHotelIndex])

    const handleNextHotel = () => {
        setCurrentHotelIndex((currentHotelIndex + 1) % hotels.length)
    }

    const handlePrevHotel = () => {
        setCurrentHotelIndex((currentHotelIndex - 1 + hotels.length) % hotels.length)
    }

    return (
        <>
            <NavBar opacity={80} />
            <AnimatedPage animation={animation}>
                <div>
                    <HotelCard
                        hotel={currentHotel}
                        handleNextHotel={handleNextHotel}
                        handlePrevHotel={handlePrevHotel} />
                </div>
            </AnimatedPage>
        </>
    )
}



export default HomePage;