
import home from '../../assets/icons/home.svg'
import profile from '../../assets/icons/profile.svg'
import map from '../../assets/icons/map.svg'


const NavBar = () => {

    const sections = [
        { id: 'map', label: 'Map', icon: map  },
        { id: 'home', label: 'Home', icon: home },
        { id: 'profile', label: 'Profile', icon: profile  },
      ];


    return (
        <nav className=" bg-navBarPurple opacity-80 fixed bottom-0 left-0 w-full flex justify-around py-1 rounded-tl-2xl rounded-tr-2xl">
            {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} className="flex flex-col items-center text-gray-300">
          <img src={section.icon} alt={`${section.label} Icon`} className="h-full w-full backdrop-opacity-100 " />
        </a>
      ))}
    </nav>

       
      );
};

export default NavBar;