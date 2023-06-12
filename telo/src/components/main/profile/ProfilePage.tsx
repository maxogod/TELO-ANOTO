import {Reservations, History} from './ProfileComponents'
import ProfileCard from "./ProfileCard"
import AnimatedPage from "../../animations/AnimatedPage"
import NavBar from "../../utils/NavBar"
import { getSessionUser } from "../../../utils/authHandling"
import {useState, useEffect } from "react"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const ProfilePage = () => {

    const user = getSessionUser()

    const [reservationLength, setReservationLength] = useState(user?.currentReservationsById?.length || 0);
    const [historyLength, setHistoryLength] = useState(user?.historyById?.length || 0);

    useEffect(() => {
        setReservationLength(user?.currentReservationsById?.length || 0);
    }, [user?.currentReservationsById?.length]);

    useEffect(() => {
        setHistoryLength(user?.historyById?.length || 0);
    }, [user?.historyById?.length]);

    useEffect(() => {
        if (reservationLength !== user?.currentReservationsById?.length || historyLength !== user?.historyById?.length) {
        console.log("RELOAD");
        
        window.location.reload();
        }
    }, [reservationLength, historyLength, user?.currentReservationsById?.length, user?.historyById?.length]);


    return (
        <>
            <NavBar opacity={80} />
            <AnimatedPage animation={animation}>
                <div>
                    <div className='flex flex-col items-center justify-center gap-6 mt-16'>
                        <ProfileCard user={user as any}  />
                        <Reservations currentReservations={user?.currentReservationsById as []}/>
                        <History history={user?.historyById as []} />
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
};

export default ProfilePage;