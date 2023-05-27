import logo from "../../assets/logo.svg"

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-bl from-violet-950 to-black flex items-center justify-center h-screen">

        <div className="bg-violet-900 rounded-full animate-pulse absolute translate-y-4 z-10 blur-2xl"
            style={{width: "15rem", height: "15rem"}}></div>
        <img src={logo} className="relative z-20" alt="logo" />

    </div>
  )
}

export default LoadingPage