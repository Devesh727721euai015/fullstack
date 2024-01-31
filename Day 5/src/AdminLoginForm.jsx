// src/AdminLoginForm.js
import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const AdminLoginForm = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLogin = () => {
    // Add your admin authentication logic here
    // For simplicity, you can use a basic check
    if (adminUsername === 'Devesh' && adminPassword === 'Devesh@123') {
      // Redirect or perform actions for successful admin login
      console.log('Admin login successful');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <>
      {/* Your Admin Login Form */}
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Admin Login</header>
            <form action="#">
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Admin Username"
                  className="input"
                  onChange={(e) => setAdminUsername(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Admin Password"
                  className="password"
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
                <i className="bx bx-hide eye-icon" />
              </div>
              <div className="field button-field">
               <Link to='/Ahome'><button onClick={handleAdminLogin}>Login</button></Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLoginForm;
