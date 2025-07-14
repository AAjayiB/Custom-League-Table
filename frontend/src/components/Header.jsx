import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/medium.png'

const Header = () => {
  return (
    <div className='bg-white flex items-center justify-center'>
        
        
           <img src={logo} alt='Premier League Logo' height="100" width='100' />
         <Link to={'/'}>   <span className="label font-bold text-purple-950 text-3xl">League Table Visualiser</span>
        </Link> 
       
    </div>
  )
}

export default Header