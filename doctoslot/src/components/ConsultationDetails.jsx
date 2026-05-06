import React from 'react';

function ConsultationDetails({ patient }) {
  if (!patient) return <div className="consultation-details">Select a patient</div>;
  return (
    <div className="consultation-details">
      <h3>Consultation Details</h3>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Time:</strong> {patient.time}</p>
      <p><strong>Status:</strong> {patient.status}</p>
    </div>
  );
}

export default ConsultationDetails;
