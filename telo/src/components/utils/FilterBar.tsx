import filterIcon from '../../assets/icons/filterIcon.svg'
import starIcon from '../../assets/icons/star.svg'

interface FilterBarProps {
    numOfStars: number
    distanceInKm: number
    priceInPesos: number
}

const FilterBar = ({ numOfStars, distanceInKm, priceInPesos }: FilterBarProps) => {

    const stars = getStarObjects(numOfStars)
    const distance = `${distanceInKm}km`
    const price = `$${priceInPesos}`

    const handlePopUp = () => { }

    return (
        <div className='pl-3 pt-3 flex'>
            <button onClick={handlePopUp}><img className='opacity-90 scale-110' src={filterIcon} alt="filter" /></button>
            <div className='flex flex-col ml-1'>
                <div id='stars' className='flex pl-2'>
                    {stars.map((star, index) => (
                        <img key={index} className={`${star.fill} opacity-60`} src={starIcon} alt="star" />
                    ))}
                </div>
                <p className='h-4 pt-1 scale-75 text-white opacity-50'>{distance}</p>
                <p className='h-3 pt-1 scale-75 text-white opacity-50'>{price}</p>
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