import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import { useState } from 'react'
import{FaTimes} from 'react-icons/fa'
import{CiMenuFries} from 'react-icons/ci'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signout } from '../redux/user/userSlice'
import { founderSignout } from '../redux/founder/founderSlice'
import { jwtDecode } from 'jwt-decode'

function Header() {

  const [click, setClick] = useState(false);
  const {currentUser} = useSelector((state) => state.user)
  const {founder} = useSelector((state) => state.founder)
  const dispatch = useDispatch()

  const handleNav = () => {
    setClick(!click)
  }
  if( currentUser !== null){
    const token = jwtDecode(currentUser.accessToken).role
    console.log(token)
  }
  const handlelogout = () => {
    localStorage.removeItem('accessToken')
    dispatch(signout())
    //dispatch(founderSignout())
    window.location.reload()
  }

  const content = <>
  <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition'>
    <ul className='text-center text-xl p-20'>
      <li className='my-4 py-4 border-b border-purple-600 hover:bg-slate-800 hover:rounded'><NavLink to="/about">About</NavLink></li>
      <li className='my-4 py-4 border-b border-purple-600 hover:bg-slate-800 hover:rounded'><NavLink to="/notes">Notes</NavLink></li>
      <li className='my-4 py-4 border-b border-purple-600 hover:bg-slate-800 hover:rounded'><NavLink to="/courses" >Courses</NavLink></li>
      <li className='my-4 py-4 border-b border-purple-600 hover:bg-slate-800 hover:rounded'><NavLink to="/contact" >Contact</NavLink></li>
      <li className='my-4 py-4 border-b border-purple-600 hover:bg-slate-800 hover:rounded'><NavLink to="/video" >Video</NavLink></li>
      <NavLink to='/signin'>
                  {
                     currentUser? <li className='my-4 py-4 border-b border-purple-600 hover:bg-slate-800 hover:rounded' onClick={handlelogout}>Sign Out</li> : <li className='my-4 py-4 border-b border-purple-600 hover:bg-slate-800 hover:rounded'>LogIn</li>
                  }
              </NavLink>

    </ul>
  </div>
  </>

  return (
    <div className='bg-white shadow sticky z-50 top-0'>
      <nav>
      <div className='h-10vh flex justify-between z-50 text-purple-500 lg:py-5 px-20 py-4'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>
            <Link to="/">Home</Link>
          </span>
        </div>
        <div className='lg-flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <li className='hover:text-purple-500 transition border-b-2 border-white hover:border-purple-600 cursor-pointer'><NavLink to="/about">About</NavLink></li>
              <li className='hover:text-purple-500 transition border-b-2 border-white hover:border-purple-600 cursor-pointer'><NavLink to="/notes">Notes</NavLink></li>
              <li className='hover:text-purple-500 transition border-b-2 border-white hover:border-purple-600 cursor-pointer'><NavLink to="/courses" >Courses</NavLink></li>
              <li className='hover:text-purple-500 transition border-b-2 border-white hover:border-purple-600 cursor-pointer'><NavLink to="/contact" >Contact</NavLink></li>
              <li className='hover:text-purple-500 transition border-b-2 border-white hover:border-purple-600 cursor-pointer'><NavLink to="/video" >Video</NavLink></li>
              <NavLink to='/signin'>
                  {
                    currentUser? <li className='hover:text-purple-500 transition border-b-2 border-white hover:border-purple-600 cursor-pointer' onClick={handlelogout}>Sign Out</li> : <li className='hover:text-purple-500 transition border-b-2 border-white hover:border-purple-600 cursor-pointer'>LogIn</li>
                  }
              </NavLink>
            </ul>
          </div>
        </div>

        <div>
            {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleNav}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Header