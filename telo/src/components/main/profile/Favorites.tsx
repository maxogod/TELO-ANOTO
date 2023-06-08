import { useState } from 'react'

const Favorites = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };


  return (
    <div className={`relative ${expanded ? 'h-screen' : 'w-80 h-40'} rounded-xl overflow-hidden`}>
      <div className='bg-teloBlack opacity-70 w-full h-full rounded-xl'>
        {/* Add your content here */}
      </div>

      {!expanded && (
        <button
          className='absolute bottom-0 left-0 w-full bg-teloBlack text-white text-center py-2'
          onClick={handleExpand}
        >
          Expand
        </button>
      )}
    </div>
  );
};

export default Favorites;