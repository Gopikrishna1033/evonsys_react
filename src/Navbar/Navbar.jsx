import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar_body'>
        <nav className='navbar'>
            <h3 className='navbar_brand'><Link to={'/'} className='brand'>EVONSYS</Link></h3>
            <ul className='navbar_menu'>
                <li className='navbar_item'><Link to={'/notification'} className='nav-link'><i class='bx bx-bell'></i></Link></li>
                <li className='navbar_item'><Link to={'/user'} className='nav-link'><i class='bx bx-user-circle' ></i></Link></li>
                <li className='navbar_item dropdown'><i class='bx bx-menu '></i>
                <div className="dropdown-content">
                  <Link to={'/notification'} className='drop_item'>Notifications</Link>
                  <div>
                    <Link to={'/user'} className='drop_item'>Profile</Link>
                  </div>
                  
                </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar