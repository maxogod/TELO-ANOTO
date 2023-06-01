
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
        <nav className="bg-purple-400 fixed bottom-0 left-0 w-full flex justify-around py-3 rounded-t-lg rounded-b-lg">
            {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} className="flex flex-col items-center text-gray-300">
          <img src={section.icon} alt={`${section.label} Icon`} className="h-6 w-6" />
          <span className="text-xs mt-1">{section.label}</span>
        </a>
      ))}
    </nav>

       
      );
};

export default NavBar;