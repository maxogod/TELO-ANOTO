import { useEffect, useState } from 'react'
import LoadingPage from './components/loading/LoadingPage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={loading ? <LoadingPage /> : <Login />}/>
      <Route path='/signUp'element={<SignUp/>}/>

  

    </Routes>



    </BrowserRouter>
    </>
  )
}

export default App
