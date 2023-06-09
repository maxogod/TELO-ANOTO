import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="bg-gradient-to-bl from-purpleGradient-0 via-purpleGradient-1 to-purpleGradient-1 text-white  h-screen w-screen fixed inset-0 flex flex-col justify-center items-center">
            <h1 className="text-4xl">404 Not Found</h1>
            <div className='flex gap-2'>
                <Link to='/' className='bg-violet-900 opacity-70 p-2 rounded-xl'>Back Home</Link>
                <Link to='/profile' className='bg-violet-900 opacity-70 p-2 rounded-xl'>My Profile</Link>
            </div>
        </div>
    )
}

export default NotFound