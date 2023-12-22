import React from 'react'
import './Header.css';
import Amazonlogo from './images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';



function Header() {
  const [{basket, user},dispatch]=useStateValue();
  const handleAuthentication =()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
      <img src={Amazonlogo} className='header_logo'/>
      </Link>
      <div className='header_search'>
        <input className='header_searchinput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className='header_nav'>
      <Link to={!user && '/login'}>
        <div  onClick={handleAuthentication}className='header_option'>
            <span className='header_option1'>
              Hello 
            </span>
            <span className='header_option2'>{user ? 'Sign Out':'Sign In'}
            </span>
        </div>
        </Link>
        <div className='header_option'>
          <span className='header_option1'>
            Return
          </span>
          <span className='header_option2'>
            & Orders
          </span>
        </div>
        <div className='header_option'>
        <span className='header_option1'>
            Your
          </span>
          <span className='header_option2'>
            Prime
          </span>
        </div>
        <Link to="/checkout">
        <div className='header_basketicon'>
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className='header_option2 header_basketcount'>{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
