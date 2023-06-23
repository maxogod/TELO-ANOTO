import { useEffect, useState } from "react"
import { Reservations, History } from './ProfileComponents'
import { hotelAndRoom } from "../../../utils/authHandling"
import { getSessionUser } from "../../../utils/authHandling"
import ProfileCard from "./ProfileCard"
import AnimatedPage from "../../animations/AnimatedPage"
import NavBar from "../../utils/NavBar"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}


const ProfilePage = ({setShowMap}: {setShowMap: Function}) => {

    const user = getSessionUser()
    const [currentReservations, setCurrentReservations] = useState<hotelAndRoom[] | undefined>(user?.currentReservationsById);
    const [currentHistory, setCurrentHistory] = useState<hotelAndRoom[]  | undefined>(user?.historyById);

    useEffect(() => {
        setCurrentReservations(user?.currentReservationsById)
       setCurrentHistory(user?.historyById)
    }, [user?.currentReservationsById, user?.historyById, user?.favoritesById]);
    setShowMap(false)




    return (
        <>
            <NavBar opacity={80} />
            <AnimatedPage animation={animation}>
                <div>
                    <div className='flex flex-col items-center justify-center gap-3 mt-16'>
                        <ProfileCard/>
                        <Reservations currentReservations={currentReservations as hotelAndRoom[]}/>
                        <History history={currentHistory as hotelAndRoom[]} />
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
};

export default ProfilePage;