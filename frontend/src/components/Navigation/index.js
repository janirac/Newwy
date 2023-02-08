import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faX } from '@fortawesome/free-solid-svg-icons'
import * as sessionActions from "../../store/session"



const userIcon = <FontAwesomeIcon icon={faUser} />
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
              <div>
                <NavLink to='/'>
                  <button>
                    <img className='img-dropdown' src="https://via.placeholder.com/50"/> 
                    <text>{sessionUser.email}</text>
                    <text>view</text>
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/">
                  <button>
                    <img className='img-dropdown' src="https://via.placeholder.com/50"/>
                    <text>Orders</text>
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink to='/'>
                  <button>
                    <img className='img-dropdown' src="https://via.placeholder.com/50"/>
                    <text>Settings</text>
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink to='/logout'>
                  <button onClick={logout}>
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
                {sessionLinks}
              </div>
            }
        </div>
    </nav>
  );
}

export default Navigation;