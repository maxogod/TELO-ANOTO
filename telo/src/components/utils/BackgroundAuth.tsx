import cityPic from '../../assets/background/cityPic.png'

const BackgroundAuth = () => {
    return (
        <div className="relative">
            <img src={cityPic} alt="cityPic" className='w-screen h-screen object-cover object-center fixed scale-150' />
            <div className="fixed inset-0 bg-gradient-to-bl from-violet-950 opacity-80 brightness-75 to-black"></div>
        </div>
    )
}


export default BackgroundAuth;