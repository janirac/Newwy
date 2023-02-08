import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css"

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="login-page-main">
      <h3 className="text-one-login">
      Create an Account to Shop Newwy Thrift
      </h3>
      <h3 className="text-one-login">
      Buy what you love, sell what someone else will love. Repeat.
      </h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div className='email-input-section'>
          <input
            className='email-input'
            type="text" //should I put email or text
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required //optional
          />
          <div className='email-input-text'>
            Email*
          </div>
        </div>
        <div className="password-input-section">
          <input
          className="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password*"
          />
          {/* <div className="password-input-text">
            Password*
          </div> */}
        </div>
        <div className="password-input-section">
          <input
            className="password-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password*"
            />
          {/* <div className="password-input-text">
            Confirm Password*
          </div> */}
        </div>
        <button className="submit-btn" type="submit">Sign Up</button>
        <text className="footer-text">
          Already have a Newwy account?
          <NavLink to='/login'>
            <text className="sign-in-text-link">  Sign In</text>
          </NavLink>
        </text>
        <text className="text-two">
          By joining, you agree to receive Newwy emails. You may unsubscribe at any time.
        </text>
      </form>
    </div>
  );
}

export default SignupFormPage;