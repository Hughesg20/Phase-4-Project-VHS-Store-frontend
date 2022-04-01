import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <NavLink to='/'>
                <button> Home </button>
            </NavLink>
            <NavLink to='/videos'>
                <button> Videos </button>
            </NavLink>
            <NavLink to='/logout'>
                <button> Log Out </button>
            </NavLink>
            <NavLink to = '/profile'>
                <button>Profile</button>
            </NavLink>
                    
                
        </div>
    )
}

export default Header;