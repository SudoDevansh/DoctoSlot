import React from 'react';

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Good Morning Dr. Sharma!</h1>
      <div className="stats-banner">
        <h2>Visits for Today</h2>
        <h1>107</h1>
        <div className="stat-cards">
          <div className="card">New Patients: 40</div>
          <div className="card">Old Patients: 67</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;