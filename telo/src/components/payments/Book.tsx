import { useParams } from "react-router-dom"
import { hotels } from "../../utils/mockData"
import BackgroundMain from "../utils/BackgroundMain"
import GMap from "../main/mapPage/GMap"
import NavBar from "../utils/NavBar"
import locationPin from '../../assets/icons/locationPin.svg'
import AnimatedPage from "../animations/AnimatedPage"

const animation = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
}

const Book = () => {

    const { hotel_id, room_id } = useParams()

    const hotel = hotels.find(hotel => hotel.id === parseInt(hotel_id as string))
    const room = hotel?.availableRooms.find(room => room.id === parseInt(room_id as string))

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <AnimatedPage animation={animation}>
            <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="opacity-80 absolute h-28 bg-slate-500 rounded-t-4xl flex flex-wrap w-80 p-3 pl-6">
                        <h1 className="brightness-200 text-white text-2xl font-bold w-full -mb-7">{hotel?.name}</h1>
                        <img className='brightness-200 h-5 text-white' src={locationPin} alt="" />
                        <p className="brightness-200 text-white">{hotel?.location}</p>
                    </div>
                    <div className="opacity-90 mt-20 bg-slate-100 rounded-4xl flex flex-col w-80 p-3 pb-7 pl-6">
                        <h1>{room?.name}</h1>
                        <p>${room?.price}</p>
                        <h1>Metodos de pago</h1>
                        <form className="flex flex-col relative" onSubmit={handleSubmit}>
                            <label htmlFor="1">
                                Mercado pago
                                <input className="absolute right-0 mt-2" type="radio" name="p" id="1" required />
                            </label>
                            <label htmlFor="2">
                                Debito 4555-xxxx
                                <input className="absolute right-0 mt-2" type="radio" name="p" id="2" required />
                            </label>
                            <label htmlFor="3">
                                Debito 4525-xxxx
                                <input className="absolute right-0 mt-2" type="radio" name="p" id="3" required />
                            </label>
                            <button type='submit' className='bg-violet-900 rounded-lg text-white w-28 p-1'>reserva ya</button>
                        </form>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Book