import {FaGlobeAfrica} from 'react-icons/fa'
function Header() {
  return (
    <nav>
       <div className='flex items-center justify-center bg-purple-400 h-24 mt-4 mb-0  border rounded-t-lg'>
          <FaGlobeAfrica size={25} />
          <p className='ml-5'>my travel journal</p>
       </div>
    </nav>
  )
}

export default Header