import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/CatShop_Logo.svg'
import hamburger from '../assets/icons/Icon_Hamburger_28x21.svg'
import './NavBar.css'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
        <nav className='navbar'>
            <NavLink to="/">
                <img src={logo} alt="Cat Shop Logo" height="25"></img>
            </NavLink>

            <div className='nav-links'>
                <NavLink to="/cats">Cats</NavLink>
                <NavLink to="/about-us">About us</NavLink>
                <NavLink to="/shopping-cart">Shopping cart</NavLink>
            </div>

            <button className='hamburger' onClick={() =>
                setMenuOpen(!menuOpen)}>
                <img src={hamburger} alt="Menu" />
            </button>
        </nav>

        {menuOpen &&  (
            <div className='mobile-menu'>
            <NavLink to='/cats' onClick={() => setMenuOpen(false)}>Cats</NavLink>
            <NavLink to='/about-us' onClick={() => setMenuOpen(false)}>About us</NavLink>
            <NavLink to='/shopping-cart' onClick={() => setMenuOpen(false)}>Shopping cart</NavLink>
            </div>
        )}
        </>
    )
}

export default NavBar