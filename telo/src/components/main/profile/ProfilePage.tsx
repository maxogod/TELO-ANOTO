import Reservations from "./Reservations"
import ProfileCard from "./ProfileCard"
import AnimatedPage from "../../animations/AnimatedPage"
import NavBar from "../../utils/NavBar"
import { getSessionUser } from "../../../utils/authHandling"

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const ProfilePage = () => {

    const user = getSessionUser();

    return (
        <>
            <NavBar opacity={80} />
            <AnimatedPage animation={animation}>
                <div>
                    <div className='flex flex-col items-center justify-center gap-6 mt-16'>
                        <ProfileCard name={user?.email.split("@")[0] as string} email={user?.email as string} phone={user?.phone as number} birthday={user?.dateBirth as Date}  />
                        <Reservations currentReservations={user?.currentReservationsById as []}/>
                    </div>
                </div>
            </AnimatedPage>
        </>
    );
};

export default ProfilePage;