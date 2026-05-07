import React from 'react';

function PatientList({ patients, selectedId, onSelectPatient }) {
  return (
    <div className="patient-list">
      <h3>Patient List</h3>
      <div className="list-container">
        {patients.map(patient => (
          <div 
            key={patient.id} 
            style={{ 
              backgroundColor: selectedId === patient.id ? '#e0f7fa' : 'white',
              padding: '10px',
              border: '1px solid #ccc',
              cursor: 'pointer'
            }}
            onClick={() => onSelectPatient(patient.id)}
          >
            <strong>{patient.name}</strong>
            <p>{patient.time} - {patient.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientList;