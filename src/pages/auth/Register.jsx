import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/slices/registerSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await dispatch(registerUser(formData));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="authContainer">
      <div className="authPageTitle">
        <h1>Hello Again!</h1>
        <h3>Welcome Back</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="smallChildcontainer">
          <div className="loginInputs">
            <div className="inputWithIcon">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputWithIcon">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                placeholder="Email Address"
                type="email"
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
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/login">
        <p>
          Do you have account?{" "}
          <span style={{ textDecoration: "underline" }}>Log in</span>
        </p>
      </Link>
    </div>
  );
}

export default Register;
