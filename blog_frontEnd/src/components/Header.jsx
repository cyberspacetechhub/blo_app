import React, { useState } from 'react'
import { FaList, FaSearch } from 'react-icons/fa'
import { MdArrowDropDown, MdOutlineMenu, MdOutlineSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
  const [action, setAction] = useState(null)
  const handleAction = () => {
    setAction(!action)
  }
  return (
    <div className=' flex flex-col gap-4 border-b border-gray-300 py-3 px-5'>
      <div className=' flex justify-between items-center'>
        <img src="" alt="Logo" />
        <div className=' flex items-center gap-4'>
          <form className=' w-32 relative p-2 flex items-center' action="search">
            <input className=' w-full bg-gray-300 rounded-l-md pl-1 pr-3 py-1 outline-none relative text-xs caret-slate-500 font-normal' type="text" placeholder='search'/>
            <div className=' bg-rose-600 py-1 px-2 rounded-r-md'>
              <MdOutlineSearch fontSize="large"/>
            </div>
          </form>
          <nav>
            <button onClick={handleAction}><MdOutlineMenu fontSize="large"/></button>
            {
              action && 
              <div className=' flex flex-col items-center gap-2 '>
                <Link to="/signup" onClick={handleAction} className=' p-2 block text-green-600 font-semibold hover:bg-green-100'>SignUp</Link>
                <Link className=' p-2 block text-red-600 font-semibold hover:bg-red-100'>LogOut</Link>
              </div>
            }
          </nav>
        </div>
      </div>
      <div>
        <nav className='nav-wrapper flex  gap-5 items-center overflow-auto'>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Home</Link>
          <Link className=' flex items-center font-sans text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>
            News
            <span className=' text-red-600 pt-1'><MdArrowDropDown /></span>
          </Link>
          <Link className=' font-sans  flex gap-2 text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'><span>Edo </span>decides</Link>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Politics</Link>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Business</Link>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Science</Link>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Entertainment</Link>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Sports</Link>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Opinion</Link>
          <Link className=' font-sans block text-gray-600 hover:bg-gray-100 px-2 font-semibold uppercase'>Metro</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
