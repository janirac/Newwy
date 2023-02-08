import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faX, faBagShopping, faBars, faMagnifyingGlass, faGear, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import * as sessionActions from "../../store/session"

const checklistIcon = <FontAwesomeIcon icon={faClipboardList} />
const settingsIcon = <FontAwesomeIcon icon={faGear} />
const searchIcon = <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
const browseIcon = <FontAwesomeIcon className='browse-icon' icon={faBars} />
const cartIcon = <FontAwesomeIcon className='shopping-bag' icon={faBagShopping} />
const userIcon = <FontAwesomeIcon className='user-icon' icon={faUser} />
const exitModalIcon = <FontAwesomeIcon icon={faX} />

function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showUserDropdown, setshowUserDropdown] = useState(false);
  const location = useLocation()
  
  const userLoginDropdown = () => {

    if (showUserDropdown){
        return (
            <div className='user-dropdown'
            onMouseEnter={() => setshowUserDropdown(true)}
            onMouseLeave={() => setshowUserDropdown(false)}
            >
              {/* <div className='place'>testing
              </div>  */}
              <img className='img-dropdown' src="https://via.placeholder.com/50"/> 
              <p className='signin-text-dropdown'>Sign In</p>
              <div className='middle-dropdown'>
                <p className='middle-dropdown-text'>Buy what you love, sell what someone else will love. Repeat</p>
              </div>
              <ul className='user-dropdown-btns'>
                  <li>
                      <NavLink to="/login">
                        <button className='login-btn'>Log In</button>
                      </NavLink>
                    </li>
                  <li>
                    <NavLink to="/signup">
                      <button className='signup-btn'>Join Now</button>
                    </NavLink>
                  </li>
              </ul>
            </div>
        )
    }

  };

  const logout = (e) => {
    e.preventDefault();
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
                <NavLink to='/'>
                  <button className='profile-btn'>
                    <img className='img-dropdown' src="https://via.placeholder.com/50"/> 
                    <div className='profile-btn-view'>
                      <h4 className='profile-name'>{sessionUser.email}</h4>
                      <div>View</div>
                    </div>
                  </button>
                </NavLink>
              </div>
              <div className='orders-btn-main'>
                <NavLink to="/">
                  <button className='orders-btn'>
                    {checklistIcon}
                    <text>Orders</text>
                  </button>
                </NavLink>
              </div>
              <div className='settings-btn-main'>
                <NavLink to='/'>
                  <button className='settings-btn'>
                    {settingsIcon}
                    <text>Settings</text>
                  </button>
                </NavLink>
              </div>
              <div className='logout-button-main'>
                <NavLink to='/logout'>
                  <button className='logout-button' onClick={logout}>
                    <text>Sign Out</text>
                  </button>
                </NavLink>
              </div>
            </div>
      )
    }
  }


  const locationLoginOrSignUp = location.pathname === "/login" || location.pathname === "/signup"

  let sessionLinks;
  if (locationLoginOrSignUp){
    sessionLinks = (
      <NavLink className='exit-btn' to='/'>
        {exitModalIcon}
      </NavLink>
    )
  } else if (sessionUser) {
    sessionLinks = (
      userLogoutDropDown()
    );
  } else {
    sessionLinks = (
      userLoginDropdown()
    );
  }

  return (
    <nav className='navigation-bar'>
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
                  onMouseEnter={() => setshowUserDropdown(showUserDropdown ? false : true)}
                  onMouseOut={() => setshowUserDropdown(false)}
                  >
                  {userIcon}
                </span>
                {cartIcon}
                {sessionLinks}
              </div>
            }
        </div>
    </nav>
  );
}

export default Navigation;