import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"

import { hotels } from "../../utils/mockData"
import { addCurrentReservation } from "../../utils/favoritesAndHistory"

import locationPin from '../../assets/icons/locationPin.svg'
import AnimatedPage from "../animations/AnimatedPage"

const animation = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
}

const Book = () => {

    const [_, setPaymentMethod] = useState('')
    const [successPopUp, setSuccessPopUp] = useState(false)

    const { hotel_id, room_id } = useParams()
    const hotel = hotels.find(hotel => hotel.id === parseInt(hotel_id as string))
    const room = hotel?.availableRooms.find(room => room.id === parseInt(room_id as string))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(e.target.value)
    }

    console.log(room?.availableTimes)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const selectedTime = new Date((e.currentTarget.elements.namedItem('selectedTime') as HTMLInputElement).value);
        addCurrentReservation(parseInt(hotel_id as string), parseInt(room_id as string), selectedTime)
        setSuccessPopUp(true)
    }

    return (
        <>
            {!hotel || !room && (<Navigate to='/404' />)}
            <AnimatedPage animation={animation}>
                <div className="flex items-center justify-center h-screen absolute inset-0">
                    {
                        successPopUp ? (<SuccessPopUp />)
                            :
                            (<>
                                <div className="relative">
                                    <div className="opacity-80 absolute h-28 bg-slate-500 rounded-t-4xl flex flex-wrap w-80 p-3 pl-6">
                                        <Link to='/' className="absolute right-6 font-bold text-white z-10">X</Link>
                                        <h1 className="brightness-200 text-white text-2xl font-bold w-full -mb-7">{hotel?.name}</h1>
                                        <img className='brightness-200 h-5 text-white' src={locationPin} alt="" />
                                        <p className="brightness-200 text-white">{hotel?.location}</p>
                                    </div>
                                    <div className="opacity-90 mt-20 bg-slate-100 rounded-4xl flex flex-col w-80 p-3 pb-7 pl-6">
                                        <h1>{room?.name}</h1>
                                        <p>${room?.price}</p>
                                        <h1>Horas disponibles</h1>
                                        <form className="flex flex-col relative" onSubmit={handleSubmit}>
                                            {room?.availableTimes.map((time, index) => (
                                                <label htmlFor={index.toString()} key={index}>
                                                    {`${time.toString().slice(16, 21)}`}
                                                    <input
                                                        onChange={handleChange}
                                                        className="absolute right-0 mt-2"
                                                        type="radio"
                                                        name="selectedTime"
                                                        id={index.toString()}
                                                        value={time.toString()}
                                                        required />
                                                </label>
                                            ))}
                                            <button type='submit' className='mt-4 bg-violet-900 rounded-lg text-white p-1'>Pagar con Mercado Pago</button>
                                        </form>
                                    </div>
                                </div>
                            </>)}
                </div>
            </AnimatedPage>
        </>
    )
}

function SuccessPopUp() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-80 h-80 rounded-4xl flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">¡Reserva exitosa!</h1>
                <p className="text-xl">¡Disfruta tu estadia!</p>
                <Link to='/profile' className="bg-violet-900 rounded-lg text-white w-28 p-1 mt-5">ir a mi perfil</Link>
            </div>
        </div>
    )
}

export default Book