import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handlePatientLogin = () => {
    // In a real app, this would set auth context/tokens
    navigate('/home');
  };

  const handleDoctorLogin = () => {
    // In a real app, this would set auth context/tokens
    navigate('/Doctor-Dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container fade-in-up">
        <div className="login-header">
          <h1>Welcome to DoctoSlot</h1>
          <p>Please select your role to continue</p>
        </div>
        
        <div className="login-cards">
          <div className="login-card patient-card" onClick={handlePatientLogin}>
            <div className="login-icon">
              <span className="material-symbols-outlined">person</span>
            </div>
            <h2>Patient Login</h2>
            <p>Book appointments, view queue status, and manage your health.</p>
            <button className="btn btn-primary login-btn">Login as Patient</button>
          </div>

          <div className="login-card doctor-card" onClick={handleDoctorLogin}>
            <div className="login-icon">
              <span className="material-symbols-outlined">stethoscope</span>
            </div>
            <h2>Doctor Login</h2>
            <p>Manage your appointments, patient queue, and clinic flow.</p>
            <button className="btn btn-secondary login-btn">Login as Doctor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
