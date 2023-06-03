import NavBar from "../../utils/NavBar";
import GMap from "../mapPage/GMap";



const MapPage = () => {
    return (
        <div>
            <GMap/>

            <NavBar opacity={100}/>
        </div>
    );
};

export default MapPage;