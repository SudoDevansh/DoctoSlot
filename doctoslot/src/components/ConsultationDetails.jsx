import React from 'react';

function ConsultationDetails({ patient }) {
  if (!patient) return <div>Please select a patient.</div>;

  return (
    <div className="consultation-details">
      <h3>Consultation</h3>
      <div className="details-card">
        <h2>{patient.name}</h2>
        <p>Scheduled Time: {patient.time}</p>
        <p>Visit Type: {patient.status}</p>
        <div className="medical-notes">
          <h4>Observations</h4>
          <p>High fever and cough...</p>
        </div>
      </div>
    </div>
  );
}

export default ConsultationDetails;