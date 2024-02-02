import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';

function Register() {
  return (
    <div className='authContainer'>
        <div className='authPageTitle'>
        <h1>Hello Again!</h1>
        <h3>Welcome Back</h3>
      </div>

      <div className='smallChildcontainer'>
        <div className='loginInputs'>
            <div className='inputWithIcon'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <input className='emailInput' type="email" placeholder='Name' />
            </div>
            <div className='inputWithIcon'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <input type="text" placeholder='Surname' />
            </div>
        </div>
        <div className='loginInputs'>
            <div className='inputWithIcon'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                <input className='emailInput' type="email" placeholder='Email Address' />
            </div>
            <div className='inputWithIcon'>
                <FontAwesomeIcon icon={faLock} className='icon'/>
                <input type="password" placeholder='Password' />
            </div>
        </div>
      </div>

      <button type="submit">Sign up</button>
      <p>Do you have account? <span style={{ textDecoration: "underline" }}>Log in</span></p>
    </div>
  )
}

export default Register