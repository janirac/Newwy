import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Logo from '../../images/logo.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const userIcon = <FontAwesomeIcon icon={faUser} />

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showUserDropdown, setshowUserDropdown] = useState(false);
  
  const userLoginDropdown = () => {

    if (showUserDropdown){
        return (
          <div className='user-dropdown'>
            <ul>
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
          </div>
        )
    }

  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
            <NavLink exact to="/">
                <img src={Logo} className='logo-image'/>
            </NavLink>
        </div>
        <div className='user-links'>
            <span className="user-logo-link" onClick={() => setshowUserDropdown(showUserDropdown ? false : true)}>
                {userIcon}
            </span>
            <ul>
                {sessionLinks}
            </ul>
        </div>
    </nav>
  );
}

export default Navigation;