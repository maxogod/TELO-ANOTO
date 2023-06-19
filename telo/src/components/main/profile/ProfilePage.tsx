import { useEffect } from "react"

import { Reservations, History } from './ProfileComponents'
import { getSessionUser } from "../../../utils/authHandling"
import { hotelAndRoom } from "../../../utils/authHandling"
import ProfileCard from "./ProfileCard"
import AnimatedPage from "../../animations/AnimatedPage"
import NavBar from "../../utils/NavBar"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const ProfilePage = () => {

    const user = getSessionUser()

    useEffect(() => {
        console.log("cambio");
    }, [user?.currentReservationsById, user?.historyById, user?.favoritesById]);


    return (
        <>
            <NavBar opacity={95}/>
            <div>
                <AnimatedPage animation={animation}>
                    <div className="relative pb-14 overflow-y-scroll">
                        <div className='flex flex-col items-center justify-center gap-3 mt-16'>
                            <ProfileCard />
                            <Reservations currentReservations={user?.currentReservationsById as hotelAndRoom[]} />
                            <History history={user?.historyById as hotelAndRoom[]} />
                        </div>
                    </div>
                </AnimatedPage>
            </div>
        </>
    );
};

export default ProfilePage;