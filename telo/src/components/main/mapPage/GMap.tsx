

import placeHolder from './placeHolder.jpg'

// TODO --> HAY QUE HACER QUE SEA UN MAPA DINAMICA!!!
const GMap = () => {

  return (
    <div>
      <img src={placeHolder} alt="cityPic" className='w-screen h-screen object-cover object-center fixed transform scale-150 top-40' />
    </div>
  );
};

export default GMap;