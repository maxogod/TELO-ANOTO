import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes, Navigate , useLocation } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes';

import LoadingPage from './components/loading/LoadingPage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import HomePage from './components/main/home/HomePage'
import { getSessionUser } from './utils/localStorage'
import MapPage from './components/main/mapPage/MapPage'
import ProfilePage from './components/main/profile/ProfilePage'
import Book from './components/payments/Book'

function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(getSessionUser())

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login'element={user ? <Navigate to='/' /> : <Login setUser={setUser}/>}/>
        <Route path='/signup'element={user ? <Navigate to='/' /> : <SignUp setUser={setUser}/>}/>
        <Route path='/book/:hotel_id/:room_id' element={<Book />} />
      </Routes>
      <SlideRoutes >
          <Route path='/map'element={<MapPage/>}/>
          <Route path='/'element={
            loading ? <LoadingPage /> : ( user ? <HomePage /> : <Navigate to='/login' />)
            }/>
          <Route path='/profile'element={<ProfilePage/>}/>
        </SlideRoutes>
    </BrowserRouter>
  )
}

export default App
