import {FaGlobeAfrica} from 'react-icons/fa'
function Header() {
  return (
    <nav>
       <div className='flex items-center justify-center bg-[#FF6347] h-24 '>
          <FaGlobeAfrica size={25} />
          <p className='ml-5'>my travel journal</p>
       </div>
    </nav>
  )
}

export default Header