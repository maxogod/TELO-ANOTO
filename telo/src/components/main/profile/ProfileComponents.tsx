import { useState, useEffect } from 'react';
import expand_down from '../../../assets/icons/expand_down.svg';
import { HotelThumbNail } from '../../hotel/HotelCard';
import { hotelAndRoom } from "../../../utils/authHandling"


const ListComponent = ({ name, hotels, isExpired }: { name: string, hotels: hotelAndRoom[], isExpired: boolean }) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(!expanded)
  };
  return (
    <div className={`relative ${expanded ? 'h-fit' : 'h-7'} w-80 rounded-xl overflow-hidden  transition-all duration-700`}>
      <div className='bg-teloBlack bg-opacity-70 flex flex-col'>
        <div onClick={handleExpand}>
          <span className={`text-white text-xl  ml-3 pb-1 `}>{name}</span>
          <div className={`absolute top-1 right-0 bottom-0 pr-2`}>
            <img src={expand_down} className={`duration-300 ease-in-out ${expanded ? 'rotate-180' : ''}`} alt="" />
          </div>
        </div>
        <div>
          {hotels.map((reservation, index) => (
            <div key={index}>
              <HotelThumbNail hotelAndRoom={reservation} isExpired={isExpired} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const History = ({ history }: { history: hotelAndRoom[] }) => {
  return (
    <ListComponent name='Historial' hotels={history} isExpired={true} />
  );
};

const Reservations = ({ currentReservations }: { currentReservations: hotelAndRoom[] }) => {

  return (
    <ListComponent name='Reservaciones' hotels={currentReservations} isExpired={false} />
  );
};


export { Reservations, History}