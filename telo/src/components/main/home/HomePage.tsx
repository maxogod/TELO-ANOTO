import BackgroundMain from "../../utils/BackgroundMain";
import FilterBar from "../../utils/FilterBar";
import NavBar from "../../utils/NavBar";
import GMap from "../mapPage/GMap";
import { HotelCard } from "../../hotel/HotelCard";

const HomePage = () => {

    const hotel = {
        name: 'Hotel name',
        location: 'Hotel location',
        picture: 'https://images.trvl-media.com/lodging/93000000/92550000/92541800/92541785/e51b7021.jpg',
        stars: 3,
        parkingLot: true,
        availableRooms: [
            {
                name: 'room name',
                price: 10000,
                id: 1,
            },
            {
                name: 'room name 2',
                price: 20000,
                id: 2,
            },
            {
                name: 'room name 3',
                price: 30000,
                id: 3,
            }
        ],
    }

    return (
        <div>
            <GMap/>
           <BackgroundMain />
            <NavBar opacity={80}/>
            <FilterBar numOfStars={2} distanceInKm={5} priceInPesos={10000} />
            <HotelCard hotel={hotel} />
            <NavBar />
        </div>
    );
};



export default HomePage;