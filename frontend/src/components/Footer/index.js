import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css"

function Footer() {

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
                    <a href='https://github.com/janirac/Newwy'target="_blank" rel="noopener noreferrer" className='footer-section-text'>about project</a>
                </div>    
                {/* <div className='footer-sections'>
                    <h4 className='footer-headers'>
                        Help
                    </h4>
                    <p className='footer-section-text'>FAQs</p>
                </div>     */}
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
                            <a href="https://github.com/janirac" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/janira-crispin-396656a9/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                            <a href="mailto:janiracrispin@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
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