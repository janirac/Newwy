import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    // const gitHub = <FontAwesomeIcon icon={faGit} />

    return (
        <div className='footer-main'>
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
                    <p className='footer-section-text'>about project</p>
                </div>    
                <div className='footer-sections'>
                    <h4 className='footer-headers'>
                        Help
                    </h4>
                    <p className='footer-section-text'>FAQs</p>
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
                        <div className='footer-personal-links'>
                        <i class="fa-brands fa-square-github"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-solid fa-envelope"></i>
                        </div>
                    </h4>
                </div> 
                <div className='privacy-links'>
                    Janira Crispin
                </div>   
            </div>
        </div>
    )
}

export default Footer