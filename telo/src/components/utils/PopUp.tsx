
import defaultQrCode from '../../assets/defaultQrCode.svg'
import { expireCurrentReservation} from '../../utils/favoritesAndHistory';
import { Hotel, Room } from '../hotel/HotelCard'
import close from '../../assets/icons/cancel.svg'

const QrPopUp = ({setShowPopUp, hotel, room, dateTime}: {setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>, hotel: Hotel, room: Room, dateTime:  Date }) => {

  const date = new Date(dateTime)

  const handleClosePopUp = () => {
    setShowPopUp(false)
  };

  const handleExpireCurrentReservation = () => {
    expireCurrentReservation(hotel.id, room.id, dateTime)
    setShowPopUp(false)
  };

    return (
      <div>
            <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
          <div className="bg-slate-100 rounded-3xl p-8 max-w-screen-sm max-h-screen-90 overflow-y-auto relative">

          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={handleClosePopUp}>
            <img src={close} alt="" className='h-8 w-8' />
          </button>
            
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-xl font-bold">{hotel.name}</h1>
                <h2 className="text-xl font-bold">{hotel.location}</h2>
                <h3>{room.name} - ${room.price}</h3>
                <h3>{ `${date.getDay().toString()}/${date.getMonth().toString()} - ${date.toString().slice(16, 21)}`}</h3>
                <img src={defaultQrCode} alt={defaultQrCode} className='w-52 h-52 ' onClick={handleExpireCurrentReservation}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  const CancelPopUp = ({setShowPopUp, hotel, room, dateTime, onRemove}: {setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>, hotel: Hotel, room: Room, dateTime: string, onRemove: () => void }) => {


    const handleClosePopUp = () => {
      setShowPopUp(false)
    };
  
    const handleExpireCurrentReservation = () => {
      
      setShowPopUp(false)
      onRemove();
    };
  
      return (
        <div>
              <div className="fixed inset-0 flex items-center justify-center z-10">
              <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
            <div className="bg-black rounded-3xl p-8 max-w-screen-sm max-h-screen-90 overflow-y-auto relative">
  
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={handleClosePopUp}>
              <img src={close} alt="" className='h-8 w-8' />
            </button>
              
              <div className='flex flex-col justify-center items-center'>
                  <h1 className="text-xl font-bold">{hotel.name}</h1>
                  <h2 className="text-xl font-bold">{hotel.location}</h2>
                  <h3>{room.name} - ${room.price}</h3>
                  <h3>{dateTime}</h3>
                  <img src={defaultQrCode} alt={defaultQrCode} className='w-52 h-52 ' onClick={handleExpireCurrentReservation}/>
              </div>
            </div>
          </div>
        </div>
      );
    };

export  {QrPopUp, CancelPopUp};