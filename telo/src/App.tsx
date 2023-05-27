import { useEffect, useState } from 'react'
import LoadingPage from './components/loading/LoadingPage'
import Login from './components/auth/Login'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <>
      {loading ? <LoadingPage /> : <Login />}
    </>
  )
}

export default App
