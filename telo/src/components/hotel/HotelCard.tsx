import { Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"

import { toggleFavorite, getFavorites } from "../../utils/favoritesAndHistory"
import QrPopUp from "../utils/PopUp"
import { hotels } from "../../utils/mockData"

import heart from '../../assets/icons/heart.svg'
import heartFill from '../../assets/icons/heartFill.svg'
import carIcon from '../../assets/icons/carIcon.svg'
import starIcon from '../../assets/icons/star.svg'
import locationPin from '../../assets/icons/locationPin.svg'
import qrCode from '../../assets/icons/qrCode.png'
import mapThumbNail from '../../assets/icons/mapThumbNail.svg'
import cancel from '../../assets/icons/cancel.svg'



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

const titleCarousel = [
    'A donde te gustaria ir hoy?',
    'sale telo?',
    'que ondaaa',
    'que pinta?',
    'que sale?',
    'hoy se sale',
    'athus',
]

const title = titleCarousel[Math.floor(Math.random() * titleCarousel.length)]

const HotelCard = ({ hotel, handleNextHotel, handlePrevHotel }:
    { hotel: Hotel, handleNextHotel: () => void, handlePrevHotel: () => void }) => {
    const [favorite, setFavorite] = useState(getFavorites()?.includes(hotel.id))
    const touchStartRef = useRef(0)
    const touchEndRef = useRef(0)

    useEffect(() => {
        setFavorite(getFavorites()?.includes(hotel.id))
    }, [hotel])

    const stars = getStarObjects(hotel.stars)

    const handleToggleFavorite = () => {
        toggleFavorite(hotel.id)
        setFavorite(!favorite)
    };

    const handleSwipe = () => {
        const touchDiff = touchEndRef.current - touchStartRef.current;
        if (touchDiff > 50) {
            // Swiped right, go to prev hotel
            handlePrevHotel()
        } else if (touchDiff < -50) {
            // Swiped left, go to next hotel
            handleNextHotel()
        }
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartRef.current = e.touches[0].clientX;
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndRef.current = e.changedTouches[0].clientX;
        handleSwipe()
    }

    return (
        <div
            className="flex flex-col gap-2 justify-center items-center"
            style={{ height: '60vh' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <p className="text-white opacity-60">{title}</p>
            <div className="bg-white opacity-90 w-80 border rounded-4xl">
                <div id="image" className="relative">
                    <button onClick={handleToggleFavorite} className="absolute top-3 right-3 text-white"><img src={favorite ? heartFill : heart} alt="favorite" /></button>
                    <img className="rounded-t-4xl object-cover" style={{ height: '26rem' }} src={hotel.picture} alt="hotel pic" />
                    <h1 className="absolute bottom-20 left-2 text-white text-2xl font-bold">{hotel.name}</h1>
                    <img className='absolute bottom-16 h-5 left-2 text-white' src={locationPin} alt="" />
                    <p className="absolute bottom-16 scale-90 left-6 text-white">{hotel.location}</p>
                    <div className="bg-slate-100 rounded-4xl flex flex-col absolute -ml-[1px] w-80 h-56 -bottom-40 overflow-y-scroll overflow-x-hidden p-3">
                        {hotel.parkingLot && <img className='absolute right-4 top-4' src={carIcon} alt="parking lot" />}
                        <div id='stars' className='flex pl-2 mb-4 mt-3'>
                            {stars.map((star, index) => (
                                <img key={index} className={star.fill} src={starIcon} alt="star" />
                            ))}
                        </div>
                        <h2 className='ml-10 mb-1 font-bold scale-125'>Habitaciones disponibles</h2>
                        {hotel.availableRooms.map((room, index) => (
                            <div key={index} className='ml-3 relative mb-4'>
                                <h1 className="text-xl font-bold">{room.name}</h1>
                                <p className="text-xl opacity-70 font-bold">${room.price}</p>
                                <Link to={`/book/${hotel.id}/${room.id}`} className='bg-violet-900 rounded-lg text-white p-1 absolute right-3 top-4'>reserva ya</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const HotelThumbNail = ({ hotelId, roomId, onRemove, isExpired }: { hotelId: number, roomId: number, onRemove: () => void, isExpired: boolean}) => {

    const hotel = hotels.find(h => h.id === hotelId)
    const room = hotel?.availableRooms.find(r => r.id === roomId)

    const [showPopUp, setShowPopUp] = useState(false);

    const handleQrCodeClick = () => {
        setShowPopUp(true)
    }

    return (
        <div>
            <div className='bg-white  w-80 h-20 mt-2 mb-1 rounded-3xl '>


                <div className=" absolute mt-1 left-20 pl-1  flex flex-col text-[12px]">
                    <h1 className="text-black font-bold">{hotel?.name} - {hotel?.location}</h1>
                    <h2 className="text-gray-700 font-bold">{room?.name} - ${room?.price}</h2 >
                    <h3 className="text-gray-700 text-[10px]">FALTA ROOM DATE</h3>
                    <div className="flex  mt-[1px]  space-x-3 ">
                        <img src={mapThumbNail} className='w-5 h-5 ' alt="" />
                        <img src={cancel} className='w-5 h-5 ' alt="" />
                        <img src={heart} className='w-5 h-5 invert ' alt="" />
                    </div>
                </div>
                    <div
                        className={`absolute ${isExpired ? 'bg-gray-300' : 'bg-reservationPurple'} w-20 h-20 right-0 rounded-3xl flex justify-center items-center`}
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onClick={isExpired ? ()=>{} : handleQrCodeClick}>
                        <img src={qrCode} className='w-14 h-14' alt="" />
                    </div>
                <div className='absolute bg-black w-20 h-20 left-0 rounded-3xl flex justify-center items-center'>
                    <img src={hotel?.picture} className='w-full h-full rounded-3xl' alt="" />
                </div>
            </div>
            {showPopUp && <QrPopUp setShowPopUp={setShowPopUp} hotel={hotel as Hotel} room={room as Room} onRemove={onRemove} />}
        </div>
    )
}

function getStarObjects(numOfStars: number) {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < numOfStars) stars.push({ fill: 'invert' })
        else stars.push({ fill: 'none' })
    }
    return stars
}

export { HotelCard, HotelThumbNail }

