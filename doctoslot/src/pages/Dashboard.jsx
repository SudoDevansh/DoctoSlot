import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css';
import TopNavigation from '../components/TopNavigation.jsx';
import HeroSection from '../components/HeroSection.jsx';
import PatientList from '../components/PatientList.jsx';
import ConsultationDetails from '../components/ConsultationDetails.jsx';
import RightSidebar from '../components/RightSidebar.jsx';


function Dashboard() {
  const [selectedPatientId, setSelectedPatientId] = useState(1);

  const patients = [
    { id: 1, name: 'Pappu Yadav', time: '9:00 AM', status: 'Report' },
    { id: 2, name: 'Siddhart Pandey', time: '9:15 AM', status: 'Weekly Visit' },
    { id: 3, name: 'Nitin Saluja', time: '9:30 AM', status: 'Routine Checkup' }
  ];

  const activePatient = patients.find(p => p.id === selectedPatientId);

  return (
    <div className="dashboard-container">
      <TopNavigation />
      <div className="main-content">
        <div className="left-column">
          <HeroSection />
          
          <div className="patient-section">
            <PatientList 
              patients={patients} 
              selectedId={selectedPatientId} 
              onSelectPatient={setSelectedPatientId} 
            />
            <ConsultationDetails patient={activePatient} />
          </div>
        </div>

        <div className="right-column">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;