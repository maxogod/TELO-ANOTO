import { Link } from 'react-router-dom'

import home from '../../assets/icons/home.svg'
import profile from '../../assets/icons/profile.svg'
import map from '../../assets/icons/map.svg'


const NavBar = ({ opacity }: { opacity: number }) => {

  const sections = [
    { id: 'map', url: '/map', icon: map },
    { id: 'home', url: '/', icon: home },
    { id: 'profile', url: '/profile', icon: profile },
  ]


  return (
    <nav className={`z-10 bg-navBarPurple opacity-${opacity} fixed bottom-0 w-screen flex justify-around py-1 rounded-tl-2xl rounded-tr-2xl`}>
      {sections.map((section) => {
        const isActive = location.pathname === section.url;
        return (
          <Link to={section.url} key={section.id} className=" transition-transform flex flex-col items-center text-gray-300">
            <img
              src={section.icon}
              alt={`${section.id} Icon`}
              className={`h-full w-full  ${isActive ? 'invert' : 'none'}`}
            />
          </Link>
        )
      })}
    </nav>
  )
}

export default NavBar;