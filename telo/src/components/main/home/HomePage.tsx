import BackgroundMain from "../../utils/BackgroundMain";
import FilterBar from "../../utils/FilterBar";
import NavBar from "../../utils/NavBar";

const HomePage = () => {


    return (
        <div>
            <BackgroundMain/>
            <FilterBar numOfStars={2} distanceInKm={5} priceInPesos={10000}/>
            <h1>homepage</h1>
            <NavBar/>
        </div>
    );
};



export default HomePage;