import {React,useContext} from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../assets/crown.svg'
import { UserContext } from '../contexts/users.context'
import { CartContext } from '../contexts/cart.context'

import './Header.styles.scss'
import {signOutUser} from '../utils/firebase/firebase.utils'
import CartIcon from './Cart-icon/CartIcon'
import CartDropdown from './Cart-dropdown/CartDropdown'

export default function Header() {
  const {currentUser}= useContext(UserContext)
  const {isCartOpen}= useContext(CartContext);
  console.log(currentUser)
  // const signOutHandler=async ()=>{
  //    await  signOutUser();
  //    setCurrentUser(null);
  // }
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
          {currentUser ?
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            : <Link className='nav-link' to='/auth'>SIGN IN</Link>
          }
          <CartIcon/>
         {isCartOpen && <CartDropdown/>}
          {/* {currentUser} */}
        </div>
    </div>
    <Outlet/>
    </>
  )
}
