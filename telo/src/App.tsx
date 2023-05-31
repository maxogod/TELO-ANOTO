import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LoadingPage from './components/loading/LoadingPage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import HomePage from './components/main/home/HomePage'
import { getSessionUser } from './utils/localStorage'

function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({
    email: '',
    phone: 0,
    dateBirth: new Date(),
    password: '',
  })

  useEffect(() => {
    const sessionUser = getSessionUser()
    if (sessionUser) setUser(sessionUser)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={
          loading ? <LoadingPage /> : ( user.email ? <HomePage /> : <Login setUser={setUser} />)
          }/>
        <Route path='/signUp'element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
