import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <NavLink exact to='/'>
                <button> Home </button>
            </NavLink>
            <NavLink to='/videos'>
                <button> Videos 🍴 </button>
            </NavLink>

        </div>
    )
}

export default Header;