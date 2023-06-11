import { useState } from "react"

import { setSessionFilter, getSessionFilter } from "../../utils/sessionFilter"

import filterIcon from '../../assets/icons/filterIcon.svg'
import starIcon from '../../assets/icons/star.svg'

type filter = {
    withGarage: boolean,
    distance: number,
    price: number,
    stars: number,
}

const FilterBar = () => {

    const [showPopUp, setShowPopUp] = useState(false)
    const [filter, setFilter] = useState<filter>(getSessionFilter())

    const handlePopUp = () => {
        setShowPopUp(!showPopUp)
    }

    return (
        <div className='pl-3 pt-3 flex '>
            {showPopUp && <FilterPopUp changeFilter={setFilter} currentFilter={filter} setShowPopUp={setShowPopUp} />}
            <button onClick={handlePopUp}><img className='opacity-90 scale-110' src={filterIcon} alt="filter" /></button>
            <div className='flex flex-col ml-1'>
                <div id='stars' className='flex pl-2'>
                    {getStarObjects(filter.stars).map((star, index) => (
                        <img key={index} className={`${star.fill} opacity-60`} src={starIcon} alt="star" />
                    ))}
                </div>
                <p className='h-4 pt-1 scale-75 text-white opacity-50'>{filter.distance}km</p>
                <p className='h-3 pt-1 scale-75 text-white opacity-50'>${filter.price}</p>
            </div>
        </div>
    )
}

function FilterPopUp({ changeFilter, currentFilter, setShowPopUp }:
    { changeFilter: Function, currentFilter: filter, setShowPopUp: Function }) {

    const [filter, setFilter] = useState({
        withGarage: currentFilter.withGarage,
        distance: `${currentFilter.distance}`,
        price: `${currentFilter.price}`,
        stars: `${currentFilter.stars}`,
    })

    const handleCheck = () => {
        setFilter({ ...filter, withGarage: !filter.withGarage })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({ ...filter, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const parsedFilter = {
            withGarage: filter.withGarage,
            distance: parseInt(filter.distance),
            price: parseInt(filter.price),
            stars: parseInt(filter.stars)
        }
        setSessionFilter(parsedFilter)
        changeFilter(parsedFilter)
        setShowPopUp(false)
    }

    return (
        <div className='popup animate-pop-in absolute top-0 left-0 m-8 mt-14 w-72 bg-teloBlack text-white opacity-95 z-20 rounded-b-3xl rounded-r-3xl'>
            <div className='flex flex-col p-3 h-full'>
                <p className='text-lg font-bold text-left'>Filtros</p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <div className="flex items-center gap-2">
                        <label htmlFor="cochera" className="cursor-pointer">Cochera</label>
                        <div
                            className={`relative inline-block w-10 h-6 rounded-full ${filter.withGarage ? 'bg-violet-500' : 'bg-gray-400'}`}
                            onClick={handleCheck}>
                            <input
                                type="checkbox"
                                id="cochera"
                                className="absolute opacity-0 w-0 h-0"
                                checked={filter.withGarage}
                                onChange={handleCheck} />
                            <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${filter.withGarage ? 'translate-x-4' : ''}`}></span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="distance">Hasta (km)</label>
                        <input onChange={handleChange} className="w-40 text-black pl-2 rounded-xl absolute right-0 mr-3" defaultValue={filter.distance} type="number" name="distance" id="distance" required />
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="price">Hasta ($)</label>
                        <input onChange={handleChange} className="w-40 text-black pl-2 rounded-xl absolute right-0 mr-3" defaultValue={filter.price} type="number" name="price" id="price" required />
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="stars">Estrellas</label>
                        <input onChange={handleChange} className="w-40 text-black pl-2 rounded-xl absolute right-0 mr-3" defaultValue={filter.stars} type="number" name="stars" id="stars" required />
                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <button type="submit" className="rounded-xl bg-violet-900 w-28 text-white hover:brightness-150 hover:scale-110 transition duration-300">Actualizar</button>
                    </div>
                </form>
            </div>
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

export default FilterBar;