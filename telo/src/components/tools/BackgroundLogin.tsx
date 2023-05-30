import React from 'react';
import cityPic from '../../assets/cityPic.png'


const BackgroundLogin = () => {
    return (
       <div className="relative">
        <img src={cityPic} alt="cityPic" className='w-screen h-screen object-cover object-center fixed transform scale-150 top-40' />
            <div className="fixed inset-0 bg-gradient-to-bl from-violet-950 opacity-80 brightness-75 to-black flex items-center justify-center flex-col"></div>
       </div>
      )
}



export default BackgroundLogin;