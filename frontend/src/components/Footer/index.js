import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css"

function Footer() {

    return (
        <div className='footer-container'>
            <div className='footer-sections'>
                <span>
                    <NavLink className='logo-image-footer' exact to="/">
                        <div className='logo-image-footer'>newwy</div>
                    </NavLink>
                </span>
                <span>
                    <p className='footer-copyright'> 2023 NEWWY ALL RIGHTS RESERVED</p>
                </span>
            </div>    
            <div className='footer-sections'>
                <h4 className='footer-headers'>
                    Explore
                </h4>
                <p className='footer-section-text'>placeholder</p>
                <p className='footer-section-text'>placeholder</p>
            </div>    
            <div className='footer-sections'>
                <h4 className='footer-headers'>
                    Help
                </h4>
                <p className='footer-section-text'>placeholder</p>
            </div>    
            <div className='footer-sections'>
                <h4 className='footer-headers'>
                    About Newwy
                </h4>
                <p className='footer-section-text'>JavaScript</p>
                <p className='footer-section-text'>HTML</p>
                <p className='footer-section-text'>React</p>
                <p className='footer-section-text'>Redux</p>
                <p className='footer-section-text'>Ruby on Rails</p>
            </div>    
            <div className='footer-sections'>
                <h4 className='footer-headers'>
                    Stay Connected
                </h4>
            </div>    
        </div>
    )
}

export default Footer