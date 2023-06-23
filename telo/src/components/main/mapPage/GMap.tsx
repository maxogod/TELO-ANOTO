
import map from "../../../assets/placeHolder.png"

const GMap = () => {
  return (
    <div>
      <img src={map} alt="cityPic" className='w-screen h-screen object-cover fixed inset-0 -z-10 object-center' />
    </div>
  );
};

export default GMap;