import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="authContainer">
      <div className="authPageTitle">
        <h1>Hello Again!</h1>
        <h3>Welcome Back</h3>
      </div>
      <div className="loginInputs">
        <div className="inputWithIcon">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input
            className="emailInput"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="inputWithIcon">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <button type="submit">Login</button>
      <Link to="/register">
        <p>
          Do not have an account?{" "}
          <span style={{ textDecoration: "underline" }}>Register</span>
        </p>
      </Link>
    </div>
  );
}

export default Login;
