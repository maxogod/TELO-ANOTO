

import cityPic from '../../assets/cityPic.png'
import logo from '../../assets/logo.svg'
import arrowEnter from '../../assets/arrowEnter.svg'
import atSymbol from '../../assets/icons/atSymbol.svg'
import lock from '../../assets/icons/lock.svg'
import googleIcon from '../../assets/icons/google.svg'
import { useState } from 'react'
import BackgroundLogin from '../tools/BackgroundLogin'


const Register = () => {

  const [userInfo, setUserInfo] = useState({ email: '', password: ''})
  const [showRegister, setShowRegister] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleGoogleAuth = () => {}

  return (
    <>
			<BackgroundLogin/>
      <div  className="fixed inset-0 flex items-center justify-center flex-col">
				<div className="absolute w-355 h-51 left-21 top-91 ">
					<p className="text-3xl leading-7 text-white">Sumate a TeloBusco!</p>

					<p className='text-gray-400 w-full text-left'>email</p>
          <label htmlFor="email" className='mb-2 flex items-center'>
            <img src={atSymbol} alt="at symbol" className='bg-white h-full p-1 rounded-l-lg' />
            <input type="email" id="email" onChange={handleChange} className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
          </label>

					<p className='text-gray-400 w-full text-left'>celular</p>
          <label htmlFor="email" className='mb-2 flex items-center'>
            <img src={atSymbol} alt="at symbol" className='bg-white h-full p-1 rounded-l-lg' />
            <input type="email" id="email" onChange={handleChange} className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
          </label>

					<p className='text-gray-400 w-full text-left'>fecha de nacimiento</p>
          <label htmlFor="email" className='mb-2 flex items-center'>
            <img src={atSymbol} alt="at symbol" className='bg-white h-full p-1 rounded-l-lg' />
            <input type="email" id="email" onChange={handleChange} className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
          </label>

					<p className='text-gray-400 w-full text-left'>contraseña</p>
          <label htmlFor="email" className='mb-2 flex items-center'>
            <img src={atSymbol} alt="at symbol" className='bg-white h-full p-1 rounded-l-lg' />
            <input type="email" id="email" onChange={handleChange} className='w-72 h-8 rounded-r-lg opacity-40 font-extrabold pl-2' />
          </label>

							<div className="flex items-center justify-center mt-3 mb-16">
								<button className="brightness-75 contrast-200">
									<img src={googleIcon} alt="" />
								</button>
							</div>


				</div>

				

				
			
			


        <footer className='absolute bottom-1 text-gray-400 w-full ml-7'>Ide.all - 2023</footer>
      </div>

    </>
  )
}

export default Register