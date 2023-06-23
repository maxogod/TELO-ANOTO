import AnimatedPage from "../../animations/AnimatedPage"
import NavBar from "../../utils/NavBar"


const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

const MapPage = ({setShowMap}: {setShowMap: Function}) => {

    setShowMap(true)
    return (
        <>
            <NavBar opacity={95} />
            <AnimatedPage animation={animation}>
                <div>
                   
                </div>
            </AnimatedPage>
        </>
    );
};

export default MapPage;