import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/medium.png'

const Header = () => {
  return (
    <div className='bg-white flex items-center justify-center '>
           <img src={logo} alt='Premier League Logo' className='size-10 md:size-17 lg:size-25' />
         <Link to={'/'}>   <span className="label text-wrap font-bold text-purple-950 text-xl md:text-2xl lg:text-3xl">League Table Visualiser (Premier League 24/25 Season) </span>
        </Link> 
       
    </div>
  )
}

export default Header