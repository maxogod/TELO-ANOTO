import { useState } from 'react'
import { Link } from 'react-router-dom'

import atSymbol from '../../assets/icons/atSymbol.svg'
import lock from '../../assets/icons/lock.svg'
import calendar from '../../assets/icons/calendar.svg'
import phone from '../../assets/icons/phone.svg'
import googleIcon from '../../assets/icons/google.svg'
import arrowEnter from '../../assets/icons/arrowEnter.svg'

import BackgroundAuth from '../utils/BackgroundAuth'
import { registerUser } from '../../utils/localStorage'

const SignUp = () => {

  const [userInfo, setUserInfo] = useState({
    email: '',
    phone: '',
    dateBirth: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerUser({
      email: userInfo.email,
      phone: parseInt(userInfo.phone),
      dateBirth: new Date(userInfo.dateBirth),
      password: userInfo.password,
    })
  }

  const handleGoogleAuth = () => {}

  const labels = [
    { title: 'email', icon: atSymbol, type: 'email', userProp: 'email'},
    { title: 'contraseña', icon: lock, type: 'password', userProp: 'password'},
    { title: 'celular', icon: phone, type: 'number', placeholder: '+54 11 1234-5678', userProp: 'phone'},
    { title: 'fecha de nacimiento', icon: calendar, type: 'date', userProp: 'dateBirth'},
  ]

  return (
    <>
			<BackgroundAuth/>

      <div className="fixed inset-0  flex items-center justify-center flex-col">
				<h1 className="text-3xl scale-125 leading-7 text-white -mb-28">Sumate a TeloBusco!</h1>
      
        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-40 gap-3'>
          <p className='text-white opacity-80 w-full text-left'>Ingrese sus datos:</p>

          {labels.map((label, index) => (
            <div key={index}>
              <p className='text-white opacity-30 w-full text-left'>{label.title}</p>
              <label htmlFor={label.userProp} className='mb-2 flex items-center'>
                <img src={label.icon} alt="at symbol" className='bg-white opacity-60 h-full p-1 rounded-l-lg' />
                <input type={label.type} id={label.userProp} placeholder={label?.placeholder} onChange={handleChange} required className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
              </label>
            </div>
          ))}

          <button type="submit" className='mt-3 rounded-xl w-36 bg-white flex items-center justify-center'>
            <img src={arrowEnter} alt="Enter" />
          </button>
        </form>

        <button className='brightness-75 contrast-200 mt-3 mb-8' onClick={handleGoogleAuth}>
          <img src={googleIcon} alt="" />
        </button>

        <div className='text-gray-400 w-80'>
          <Link to='/'><p>ya esta registrado? <b className='text-white'>Inciar Sesion</b></p></Link>
        </div>

        <footer className='absolute bottom-1 text-gray-400 w-full ml-7'>Ide.all - 2023</footer>
      </div>
    </>
  )
}

export default SignUp