import cityPic from '../../assets/background/cityPic.png'
import bgColor from '../../assets/background/backgroundColor.svg'

const BackgroundMain = () => {
    return (
        <div className="relative">
        <img src={cityPic} alt="City" className="absolute inset-0 w-full h-full object-cover" />
        <img src={bgColor} alt="Gradient Overlay" className="absolute inset-0 w-full h-full object-cover opacity-80" />
      </div>
    );
};

export default BackgroundMain;