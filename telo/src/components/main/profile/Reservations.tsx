import { useState } from 'react'
import expand_down from '../../../assets/icons/expand_down.svg'
import { HotelThumbNail } from '../../hotel/HotelCard'


type hotelAndRoom = {
  hotelId: number;
  roomId: number;
}


const Reservations = ({currentReservations} : {currentReservations : hotelAndRoom[]}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  }


  return (
    <div className={`relative ${expanded ? 'h-screen ' : 'w-80 h-8'} rounded-s-2xl overflow-hidden transition-all duration-700`}>
    <div className='bg-teloBlack bg-opacity-70 w-80 h-full rounded-xl flex flex-col items-start justify-start'>
      <div onClick={handleExpand} className='w-80'>
      <span className={`text-white text-xl ml-3 mt-0`}>Reservaciones</span>
      <div className={`absolute top-1 right-0 bottom-0 pr-2`}>
        <img src={expand_down} className={`duration-300 ease-in-out ${expanded ? 'rotate-180' : ''}`} alt="" />
      </div>
      </div>
      {currentReservations.map((reservation, index) => (
          <div key={index}>
            <HotelThumbNail hotelId={reservation.hotelId} roomId={reservation.roomId}/>
          </div>
        ))}
    </div>
  </div>

  );
};

export default Reservations;