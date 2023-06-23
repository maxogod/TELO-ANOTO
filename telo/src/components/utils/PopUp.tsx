
import defaultQrCode from '../../assets/defaultQrCode.svg'
import { expireCurrentReservation } from '../../utils/favoritesAndHistory';
import close from '../../assets/icons/cancel.svg'

interface Hotel {
  id: number,
  name: string,
  location: string,
  picture: string,
  stars: number,
  parkingLot: boolean,
  availableRooms: Array<Room>,
}

interface Room {
  name: string,
  price: number,
  id: number,
}

const QrPopUp = ({setShowPopUp, hotel, room, onRemove}: {setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>, hotel: Hotel, room: Room, onRemove: () => void }) => {


  const handleClosePopUp = () => {
    setShowPopUp(false)
  };

  const handleExpireCurrentReservation = () => {
    expireCurrentReservation(hotel.id, room.id)
    setShowPopUp(false)
    onRemove(); // Call the callback function to handle removal
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
                <h3>room date and time</h3>
                <img src={defaultQrCode} alt={defaultQrCode} className='w-52 h-52 ' onClick={handleExpireCurrentReservation}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default QrPopUp;