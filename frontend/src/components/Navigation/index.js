import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faX, faBagShopping, faBars, faMagnifyingGlass, faGear, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import * as sessionActions from "../../store/session"
import CartItems from '../Cart/CartIndex';
import { fetchCartItems } from '../../store/cartItems';
import { fetchProducts } from '../../store/product';
import { useEffect } from 'react';
import SearchModal from '../SearchModal';
import BrowseModal from '../BrowseModal';

export const checklistIcon = <FontAwesomeIcon className='checklist-icon' icon={faClipboardList} />
export const settingsIcon = <FontAwesomeIcon className='settings-icon' icon={faGear} />
export const searchIcon = <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
const browseIcon = <FontAwesomeIcon className='browse-icon' icon={faBars} />
const cartIcon = <FontAwesomeIcon className='shopping-bag' icon={faBagShopping} />
const userIcon = <FontAwesomeIcon className='user-icon' icon={faUser} />
export const exitModalIcon = <FontAwesomeIcon icon={faX} />

function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showUserDropdown, setshowUserDropdown] = useState(false);
  const location = useLocation()
  const [showCart, setShowCart] = useState(false)
  const history = useHistory()
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showBrowseModal, setShowBrowseModal] = useState(false)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCartItems())
  }, [dispatch])

  const handleShoppingCart = (e) => {
    e.preventDefault()

    if(!sessionUser){
      history.push(`/login`)
    } else {
      showCart ? setShowCart(false) : setShowCart(true)
      dispatch(fetchCartItems())
    }
  }

  const handleDropdownClicks = () => {
    setshowUserDropdown(false)
  }
  
  const handleSearchBarClick = (e) => {
    e.preventDefault()
    showSearchModal ? setShowSearchModal(false) : setShowSearchModal(true)
  }

  const handleBrosweClick = (e) => {
    e.preventDefault()
    showBrowseModal ? setShowBrowseModal(false) : setShowBrowseModal(true)
  }

  const userLoginDropdown = () => {

    if (showUserDropdown){
        return (
            <div className='user-dropdown'
            onMouseEnter={() => setshowUserDropdown(true)}
            onMouseLeave={() => setshowUserDropdown(false)}
            onClick={() => setshowUserDropdown(false)}
            >
              <img className='img-dropdown' src="https://newwy-seeds.s3.us-east-2.amazonaws.com/Concept+1-3.jpg" alt='profile-img'/> 
              <p className='signin-text-dropdown'>Sign In</p>
              <div className='middle-dropdown'>
                <p className='middle-dropdown-text'>Buy what you love, sell what someone else will love. Repeat</p>
              </div>
              <ul className='user-dropdown-btns'>
                  <li>
                      <NavLink to="/login">
                        <button onClick={handleDropdownClicks} className='login-btn'>Log In</button>
                      </NavLink>
                    </li>
                  <li>
                    <NavLink to="/signup">
                      <button onClick={handleDropdownClicks} className='signup-btn'>Join Now</button>
                    </NavLink>
                  </li>
              </ul>
            </div>
        )
    }

  };

  const logout = (e) => {
    e.preventDefault();
    setshowUserDropdown(false)
    dispatch(sessionActions.logout());
  };

  const userLogoutDropDown = () => {
    if (showUserDropdown) {
      return (
        <div className='user-dropdown'
            onMouseEnter={() => setshowUserDropdown(true)}
            onMouseLeave={() => setshowUserDropdown(false)}
            >
              <div className='profile-btn-main'>
                <NavLink className='profile-btn-main-link' to='/profile'>
                  <button onClick={handleDropdownClicks} className='profile-btn'>
                    <img className='img-dropdown' src="https://newwy-seeds.s3.us-east-2.amazonaws.com/Concept+1-3.jpg" alt='profile-img'/> 
                    <div className='profile-btn-view'>
                      <h4 className='profile-name'>{sessionUser.email}</h4>
                      <div className='view-name'>View</div>
                    </div>
                  </button>
                </NavLink>
              </div>
              <div className='orders-btn-main'>
                <NavLink className='orders-btn-main-link' to="/futurefeature">
                  <button onClick={handleDropdownClicks} className='orders-btn'>
                    {checklistIcon}
                    <text className='orders-text'>Orders</text>
                  </button>
                </NavLink>
              </div>
              <div className='settings-btn-main'>
                <NavLink to='/futurefeature'>
                  <button onClick={handleDropdownClicks} className='settings-btn'>
                    {settingsIcon}
                    <text className='settings-text'>Settings</text>
                  </button>
                </NavLink>
              </div>
              <div className='logout-button-main'>
                <NavLink to='/'>
                  <button className='logout-button' onClick={logout}>
                    <text className='signout-text'>Sign Out</text>
                  </button>
                </NavLink>
              </div>
            </div>
      )
    }
  }


  const locationLoginOrSignUp = location.pathname === "/login" || location.pathname === "/signup"

  let sessionLinks;
  let mainLinks;

  if (locationLoginOrSignUp){
    mainLinks = (
      <div className='main-links'>
            
      </div>
    )
    sessionLinks = (
      <NavLink className='exit-btn' to='/'>
        {exitModalIcon}
      </NavLink>
    )
  } else if (sessionUser) {
    mainLinks = (
      <div className='main-links'>
            <div className='browse-link'>
              <div className='browse-link-icon' onClick={handleBrosweClick}>
                {browseIcon}
                Browse
              </div>
              {showBrowseModal ? <BrowseModal /> : " "}
            </div>
            <div className='search-link'>
              <div className='search-link-icon' onClick={handleSearchBarClick}>
                {searchIcon}
                Search
              </div>
                {showSearchModal ? <SearchModal /> : " "}
            </div>
        </div>
    )
    sessionLinks = (
      userLogoutDropDown()
    );
  } else {
    mainLinks = (
      <div className='main-links'>
            <div className='browse-link'>
              <NavLink className='browse-link-icon' to='/'>
                {browseIcon}
                Browse
              </NavLink>
            </div>
            <div className='search-link'>
              <NavLink className='search-link-icon' to='/'>
                {searchIcon}
                Search
              </NavLink>
            </div>
        </div>
    )
    sessionLinks = (
      userLoginDropdown()
    );
  }

  return (
    <nav className='navigation-bar'>
        {mainLinks}
        <div className='logo'>
            <NavLink className='logo-image' exact to="/">
              <div className='logo-image'>newwy</div>
            </NavLink>
        </div>
        <div className='user-links'
        >
            {locationLoginOrSignUp ? 
              sessionLinks :
              <div>  
                 <span 
                  className="user-logo-link" 
                  onClick={() => setshowUserDropdown(showUserDropdown ? false : true)}
                  onMouseEnter={() => setshowUserDropdown(true)}
                  >
                  {userIcon}
                </span>
                <button className='button-cart-icon' onClick={handleShoppingCart}>
                  {cartIcon}
                </button>
                {sessionLinks}
              </div>
            }
        </div>
        {showCart && <CartItems setShowCart={setShowCart}/>}
    </nav>
  );
}

export default Navigation;