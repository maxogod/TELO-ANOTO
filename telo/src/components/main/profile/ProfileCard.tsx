
import default_pic from '../../../assets/default_pic.jpg'
import edit from '../../../assets/icons/edit.svg'
import slide from '../../../assets/icons/slide.svg'

const ProfileCard = () => {
    return (
      <div className='relative w-80 h-40 rounded-xl'>
  <div className='bg-teloBlack opacity-70 w-full h-full rounded-xl'>
    <div className="opacity-70 bg-teloWhite w-full h-10 rounded-tl-xl rounded-tr-xl flex items-center">
      <h1 className='font-bold text-2xl ml-24'>ToroEpico_123</h1>
    </div>

    <div className='opacity-70 flex flex-col items-start justify-center gap-3 absolute right-5 top-14'>
      <div className='bg-teloWhite rounded-xl w-52 h-5 flex items-center'>
        <h1 className='font-bold ml-2'>torito@hotmail.com</h1>
      </div>
      <div className='bg-teloWhite rounded-xl w-52 h-5 flex items-center'>
        <h1 className='font-bold ml-2'>+11-2588-9858</h1>
      </div>
    </div>
    <div className='opacity-70 bg-teloWhite rounded-xl w-14 h- absolute top-[91px] left-4'>
      <h1 className='font-bold text-xs text-center'>11/05/03</h1>
    </div>
  </div>

  <div className=' absolute bottom-3 left-3 w-full flex items-center'>
      <h1 className='font-bold text-teloWhite mr-2'>Metodos de Pago</h1>
      <img src={slide} alt="" className='pt-1'/>
    </div>
    
  <img src={edit} alt="" className="absolute top-3 right-4" />
  <img src={default_pic} className="object-cover rounded-full w-[75px] h-[75px] absolute top-8 left-2 -mt-5" alt="" />
</div>

    );
};

export default ProfileCard;