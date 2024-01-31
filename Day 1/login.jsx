// src/LoginForm.js
import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can perform authentication logic here
    // For simplicity, just check if both username and password are non-empty
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
<>
  {/* Coding By CodingNepal - codingnepalweb.com */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title> Responsive Login and Signup Form </title>
  {/* CSS */}
  <link rel="stylesheet" href="css/style.css" />
  {/* Boxicons CSS */}
  <link
    href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
    rel="stylesheet"
  />
  <section className="container forms">
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
            <i className="bx bx-hide eye-icon" />
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass">
              Forgot password?
            </a>
            
          </div>
          <div className="field button-field">
            <Link to='/home'>
            <button>Login</button></Link>
           
          </div>
        </form>
        <div className="form-link">
          <span>
            Don't have an account?{" "}
            <a href="#" className="link signup-link">
              <Link to='/signup'>Signup</Link>
            </a>
          </span>
          <br></br>
          <br></br>
        </div>
        <div className="admin-login-link">
        <Link to='/AdminLoginForm'>Admin Login</Link>
      </div>
      </div>
      <div className="line" />
      <div className="media-options">
        <a href="#" className="field facebook">
          <i className="bx bxl-facebook facebook-icon" />
          <span>Login with Facebook</span>
        </a>
      </div>
      <div className="media-options">
        <a href="#" className="field google">
          <img src="#" alt="" className="google-img" />
          <span>Login with Google</span>
        </a>
      </div>
    </div>
    {/* Signup Form */}
    <div className="form signup">
      <div className="form-content">
        <header>Signup</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Create password"
              className="password"
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Confirm password"
              className="password"
            />
            <i className="bx bx-hide eye-icon" />
          </div>
          <div className="field button-field">
            <button>Signup</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Already have an account?{" "}
            <a href="#" className="link login-link">
              Login
            </a>
          </span>
        </div>
      </div>
      <div className="line" />
      <div className="media-options">
        <a href="#" className="field facebook">
          <i className="bx bxl-facebook facebook-icon" />
          <span>Login with Facebook</span>
        </a>
      </div>
      <div className="media-options">
        <a href="#" className="field google">
          <img src="#" alt="" className="google-img" />
          <span>Login with Google</span>
        </a>
      </div>
    </div>
  </section>
  {/* JavaScript */}
</>

  );
};

export default LoginForm;