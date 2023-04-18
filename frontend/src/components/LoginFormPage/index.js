import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LoginForm.css'

const errorIcon = <FontAwesomeIcon className='errorIcon' icon="fa-thin fa-square-exclamation" />

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [emailClick, setEmailClick] = useState(false)

  const emailError = errors.find(error => error.toLowerCase().includes('email'))
  const passwordError = errors.find(error => error.toLowerCase().startsWith('password '))

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  let emailInputClassName = "email-input-section"

  const setClickedInput = (e) => {
    if (emailClick){
      emailInputClassName = "email-input-section-focus"
    } else {
      emailInputClassName = "email-input-section"
    }
  }

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.fetchSession({ credential: 'demo@user.io', password: 'password'}))
  }

  return (
    <div className='login-page-main'>
     <img className='img-login' src="https://newwy-seeds.s3.us-east-2.amazonaws.com/Concept+1-3.jpg"/>
        <h3 className='text-one-login'>
        Already Have an Account?
        </h3>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className="email-input-section">
          <input
            className='email-input'
            type="text" //should I put email or text
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required //optional
            />
          <div className='email-input-text'>
            Email*
          </div>
          <ul className='email-error-handling'>
            {emailError ? <i class="fa-solid fa-circle-exclamation"></i> : " "}
            {emailError}
          </ul>
        </div>
        <div className='password-input-section'>
          <input
          className='password-input'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password*'
          />
          <ul className='pass-error-handling'>
            {passwordError ? <i class="fa-solid fa-circle-exclamation"></i> : ""}
            {passwordError}
          </ul>
        </div>
        <button className='submit-btn' type="submit">Sign In</button>
      </form>
      <form onSubmit={handleDemoSubmit}>
        <button className='demo-btn'>Demo Login</button>
      </form>
      <div>
        <text className='footer-text'>Don't have a Newwy account yet?      
          <NavLink to="/signup" value='Join Now'>
              <text className='join-now-btn'>   Join Now</text>
          </NavLink>
        </text>
      </div>
    </div>
  );
}

export default LoginFormPage;
