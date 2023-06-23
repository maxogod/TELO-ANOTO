import { Reservations, History } from './ProfileComponents'
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

    setShowMap(false)
    const user = getSessionUser()


    return (
        <>
            <NavBar opacity={80} />
            <AnimatedPage animation={animation}>
                <div>
                    <div className='flex flex-col items-center justify-center gap-6 mt-16'>
                        <ProfileCard />
                        <Reservations currentReservations={user?.currentReservationsById as []} />
                        <History history={user?.historyById as []} />
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
};

export default ProfilePage;