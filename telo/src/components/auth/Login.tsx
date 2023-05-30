import { useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import arrowEnter from '../../assets/arrowEnter.svg'
import atSymbol from '../../assets/icons/atSymbol.svg'
import lock from '../../assets/icons/lock.svg'
import googleIcon from '../../assets/icons/google.svg'
import Register from './SignUp'
import BackgroundLogin from '../tools/BackgroundLogin';

const Login = () => {

  const [userInfo, setUserInfo] = useState({ email: '', password: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleGoogleAuth = () => {}

  return (
    <>
      <BackgroundLogin/>
      <div className="fixed inset-0  flex items-center justify-center flex-col">
        <img src={logo} className="absolute top-10 contrast-200" alt="logo" />
        
        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-40'>
          <p className='text-white w-full text-left'>Ingrese su email y contraseña</p>
          <label htmlFor="email" className='mb-2 flex items-center'>
            <img src={atSymbol} alt="at symbol" className='bg-white h-full p-1 rounded-l-lg' />
            <input type="email" id="email" onChange={handleChange} className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
          </label>
          <label htmlFor="password" className='mb-6 flex items-center'>
            <img src={lock} alt="lock" className='bg-white p-1 rounded-l-lg' />
            <input type="password" id="password" onChange={handleChange} className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
          </label>
          <button type="submit" className=' rounded-xl w-36 bg-white flex items-center justify-center'>
            <img src={arrowEnter} alt="Enter" />
          </button>
        </form>

        <button className='brightness-75 contrast-200 mt-3 mb-16' onClick={handleGoogleAuth}>
          <img src={googleIcon} alt="" />
        </button>

        <div className='text-gray-400 w-80'>
          <a href="#"><p>olvidaste tu contraseña?</p></a>
          <a href="#"><p>no esta registrado? 
            <b onClick={Register} className='text-white'>Crear Cuenta</b></p></a>
        </div>

        <footer className='absolute bottom-1 text-gray-400 w-full ml-7'>Ide.all - 2023</footer>
      </div>
    </>
  )
}

export default Login