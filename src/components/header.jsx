import { Link } from 'react-router-dom';    
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='py-4 flex justify-between items-center'>
            <Link>
                <img src="/logo.png" alt="logo" className='h-20 ' />
                <img src="/logo.png" alt="logo" className='h-20 ' />
            </Link>
            <button variant="outline">Login</button>

        </nav>
    </div>
  )
}

export default Header
