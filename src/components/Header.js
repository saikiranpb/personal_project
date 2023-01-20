import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../assets/crown.svg'
import './Header.styles.scss'

export default function Header() {
  return (
   <>
    <div className='navigation'>
        <div> 
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'/>
          </Link>     
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/signIn'>SIGN IN</Link>
        </div>
    </div>
    <Outlet/>
    </>
  )
}
