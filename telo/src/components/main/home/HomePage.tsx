import BackgroundMain from "../../utils/BackgroundMain";
import Filter from "../../utils/Filter";
import NavBar from "../../utils/NavBar";
import GMap from "../mapPage/GMap";

const HomePage = () => {


    return (
        <div>
            <GMap/>
            <BackgroundMain/>
            <Filter/>
            <h1>homepage</h1>
            <NavBar/>
        </div>
    );
};



export default HomePage;