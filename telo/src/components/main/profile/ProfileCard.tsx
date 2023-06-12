import default_pic from '../../../assets/default_pic.jpg'
import edit from '../../../assets/icons/edit.svg'
import slide from '../../../assets/icons/slide.svg'
import {useState} from "react"
import atSymbol from '../../../assets/icons/atSymbol.svg'
import lock from '../../../assets/icons/lock.svg'
import calendar from '../../../assets/icons/calendar.svg'
import phone from '../../../assets/icons/phone.svg'
import arrowEnter from '../../../assets/icons/arrowEnter.svg'
import close from '../../../assets/icons/cancel.svg'
import {getSessionUser, updateUser} from '../../../utils/authHandling'

interface User {
  email: string;
  password: string;
  phone: number;
  dateBirth: Date;
}

const ProfileCard = () => {

  const [user, setUser] = useState<User>(getSessionUser() as User)

  const bday = new Date(user.dateBirth)
  const day = String(bday.getDate()).padStart(2, '0');
  const month = String(bday.getMonth() + 1).padStart(2, '0');
  const year = String(bday.getFullYear()).slice(-2);


  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowEdit = () => {
    setShowPopUp(true)
  }
  
  return (
    <div className='relative w-80 h-40 rounded-xl'>
      <div className='bg-teloBlack opacity-70 w-full h-full rounded-xl'>
        <div className="opacity-90 bg-teloWhite w-full h-10 rounded-tl-xl rounded-tr-xl flex items-center">
          <h1 className='font-bold text-2xl ml-24'>{user.email.split("@")[0] as string}</h1>
        </div>

        <div className=' flex flex-col items-start justify-center gap-3 absolute right-5 top-14'>
          <div className='bg-teloWhite rounded-xl w-52 h-5 flex items-center'>
            <h1 className='font-bold ml-2'>{user.email}</h1>
          </div>
          <div className='bg-teloWhite rounded-xl w-52 h-5 flex items-center'>
            <h1 className='font-bold ml-2'>+{user.phone}</h1>
          </div>
        </div>
        <div className=' bg-teloWhite rounded-xl w-14 h- absolute top-[91px] left-4'>
          <h1 className='font-bold text-xs text-center'>{day}/{month}/{year}</h1>
        </div>
      </div>

      <div className=' absolute bottom-3 left-3 w-full flex items-center'>
        <h1 className='font-bold text-teloWhite mr-2'>Metodos de Pago</h1>
        <img src={slide} alt="" className='pt-1' />
      </div>

      <div onClick={handleShowEdit}>
        <img src={edit} alt="" className="absolute top-3 right-4" />
      </div>

      {showPopUp && <EditProfile user={user} setUser={setUser} setShowPopUp={setShowPopUp} />}


      <img src={default_pic} className="object-cover rounded-full w-[75px] h-[75px] absolute top-8 left-2 -mt-5" alt="" />
    </div>

  );
};

const EditProfile = ({user, setUser, setShowPopUp}: {user : User, setUser: React.Dispatch<React.SetStateAction<User>> , setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>}) => {


  const [error, setError] = useState('')

  const [userInfo, setUserInfo] = useState({
    phone: '',
    dateBirth: '',
    password: '',
  })

  const handleClosePopUp = () => {
    setShowPopUp(false)
  }

  const validateInfo = () => {
    if (userInfo.phone !== null && !/^(?:\+?54)?[0-9]{10}$/.test(userInfo.phone)) return false;
    if (userInfo.dateBirth !== null) {
      const today = new Date();
      const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      if (new Date(userInfo.dateBirth) > eighteenYearsAgo) return false;
    }
    
    return true;
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setUser((prevUser) => ({
      email: prevUser.email,
      phone: userInfo.phone ? parseInt(userInfo.phone) : prevUser.phone,
      dateBirth: userInfo.dateBirth ? new Date(userInfo.dateBirth) : prevUser.dateBirth,
      password: userInfo.password  ? userInfo.password : prevUser.password
    }));
    updateUser(userInfo)
    handleClosePopUp()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
  }


  const labels = [
    { title: 'contraseña', icon: lock, type: 'password', userProp: 'password' },
    { title: 'celular', icon: phone, type: 'number', placeholder: '+54 11 1234-5678', userProp: 'phone' },
    { title: 'fecha de nacimiento', icon: calendar, type: 'date', userProp: 'dateBirth' },
  ]
  

  return (
     <div>
      <div className="fixed inset-0 flex items-center justify-center z-10" >
        <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>

          <div className="bg-teloBlack opacity-90 rounded-3xl p-8 w-80 max-h-screen-90 overflow-y-auto relative">

          <p className='text-white opacity-80 text-xl pl-0 mb-1'>Modifique sus datos:</p>

            <div
              className="absolute top-4 right-4">
              <img src={close} alt="" className='h-8 w-8 invert' onClick={handleClosePopUp}/>
            </div>


            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3'>

              {labels.map((label, index) => (
                <div key={index}>
                  <p className='text-white opacity-30 text-left'>{label.title}</p>
                  <label htmlFor={label.userProp} className='mb-2 flex items-center'>
                    <img src={label.icon} alt="at symbol" className='bg-white opacity-60 h-full p-1 rounded-l-lg' />
                    <input type={label.type} id={label.userProp} placeholder={label?.placeholder} onChange={handleChange} className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
                  </label>
                </div>
              ))}

              {error && <p className='text-red-500 text-center'>{error}</p>}

              <button type="submit" className='mt-3 rounded-xl w-36 bg-white flex items-center justify-center'>
                <img src={arrowEnter} alt="Enter" />
              </button>
            </form>
          </div>
      </div>
    </div>
  )
};

export default ProfileCard;