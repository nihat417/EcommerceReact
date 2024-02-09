import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { Link,useNavigate  } from "react-router-dom";
import { loginUser } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate()
  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));

    try {
      await dispatch(loginUser(formData));
      navigate("/");
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  return (
    <div className="authContainer">
      <div className="authPageTitle">
        <h1>Hello Again!</h1>
        <h3>Welcome Back</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="loginInputs">
          <div className="inputWithIcon">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              className="emailInput"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputWithIcon">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="Log in" disabled={loading}>
          {loading ? "Logining ..." : "Log in"}
        </button>
      </form>
      {error && <p>{error}</p>}
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
