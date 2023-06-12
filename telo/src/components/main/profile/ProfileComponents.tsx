import  { useState, useEffect } from 'react';
import expand_down from '../../../assets/icons/expand_down.svg';
import { HotelThumbNail } from '../../hotel/HotelCard';

type hotelAndRoom = {
  hotelId: number
  roomId: number
}

const ListComponent = ({name, hotels, isExpired }: { name: string, hotels: hotelAndRoom[], isExpired: boolean}) => {
  const [expanded, setExpanded] = useState(false)
  const [reservations, setReservations] = useState(hotels)

  const handleExpand = () => {
    setExpanded(!expanded)
  };

  useEffect(() => {
    setReservations(hotels)
  }, [hotels])

  const removeReservation = (index: number) => {
    const updatedReservations = [...reservations]
    updatedReservations.splice(index, 1)
    setReservations(updatedReservations)
  };


  return (
    <div className={`relative ${expanded ? ' ' : 'w-80 h-8'} rounded-s-2xl overflow-hidden transition-all duration-700`}>
      <div className='bg-teloBlack bg-opacity-70 w-80 h-full rounded-xl flex flex-col items-start justify-start'>
        <div onClick={handleExpand} className='w-80'>
          <span className={`text-white text-xl ml-3 mt-0`}>{name}</span>
          <div className={`absolute top-1 right-0 bottom-0 pr-2`}>
            <img src={expand_down} className={`duration-300 ease-in-out ${expanded ? 'rotate-180' : ''}`} alt="" />
          </div>
        </div>
        {reservations.map((reservation, index) => (
          <div key={index}>
            <HotelThumbNail hotelId={reservation.hotelId} roomId={reservation.roomId} onRemove={() => removeReservation(index)} isExpired={isExpired} />
          </div>
        ))}
      </div>
    </div>
  );
};



const History = ({ history }: { history: hotelAndRoom[] }) => {
  return (
    <ListComponent name='Historial' hotels={history} isExpired={true}/>
  );
};

const Reservations = ({ currentReservations }: { currentReservations: hotelAndRoom[] }) => {

  return (
    <ListComponent name='Reservaciones' hotels={currentReservations} isExpired={false}/>
  );
};

export {Reservations, History}