import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

import BackgroundAuth from '../utils/BackgroundAuth'
import { logInUser } from '../../utils/localStorage'

import logo from '../../assets/logo.svg'
import arrowEnter from '../../assets/icons/arrowEnter.svg'
import atSymbol from '../../assets/icons/atSymbol.svg'
import lock from '../../assets/icons/lock.svg'
import googleIcon from '../../assets/icons/google.svg'


type setUserFunction = React.Dispatch<React.SetStateAction<{
  email: string
  phone: number
  dateBirth: Date
  password: string
} | null>>

const Login = ({ setUser }: { setUser: setUserFunction }) => {

  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = logInUser(userInfo.email, userInfo.password)
    if (user) setUser(user)
    else setError('email o contraseña incorrectos')
  }

  const handleGoogleAuth = () => { }

  const labels = [
    { title: 'email', icon: atSymbol, type: 'email' },
    { title: 'contraseña', icon: lock, type: 'password' },
  ]

  return (
    <>
      <BackgroundAuth />

      <div className="fixed inset-0  flex items-center justify-center flex-col">
        <img src={logo} className="absolute top-10 contrast-200" alt="logo" />

        <form onSubmit={handleSubmit} className='flex flex-col items-center mt-40'>
          <p className='text-white w-full text-left'>Ingrese su email y contraseña</p>

          {labels.map((label, index) => (
            <label key={index} htmlFor={label.type} className='mb-2 flex items-center'>
              <img src={label.icon} alt="at symbol" className='bg-white opacity-60 h-full p-1 rounded-l-lg' />
              <input type={label.type} id={label.type} onChange={handleChange} required className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
            </label>
          ))}

          {error && <p className='text-red-500 text-center'>{error}</p>}

          <button type="submit" className=' rounded-xl w-36 bg-white flex items-center justify-center'>
            <img src={arrowEnter} alt="Enter" />
          </button>
        </form>

        <button className='brightness-75 contrast-200 mt-3 mb-16' onClick={handleGoogleAuth}>
          <img src={googleIcon} alt="" />
        </button>

        <div className='text-gray-400 w-80'>
          <a href="#"><p>olvidaste tu contraseña?</p></a>
          <Link to='/signup'><p>no esta registrado? <b className='text-white'>Crear Cuenta</b></p></Link>
        </div>

        <footer className='absolute bottom-1 text-gray-400 w-full ml-7'>Ide.all - 2023</footer>
      </div>
    </>
  )
}

export default Login