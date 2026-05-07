import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./BookAppointment.css";
const consultationOptions = [
  "General Consultation",
  "Fever and Infection Treatment",
  "Diabetes and Blood Pressure Checkup",
  "Child and Family Health",
  "Preventive Health Checkup"
];
const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"
];

const BookAppointment = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contactNo: "",
    whatsappNo: "",
    sameAsContact: false,
    email: "",
    patientType: "new",
    consultationRegarding: "",
    date: "",
    timeSlot: "",
    flexibleTiming: false,
    symptoms: "",
    hasMedicalHistory: false,
    medicalHistoryDetails: "",
    syncCalendar: false
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "sameAsContact") {
        setFormData(prev => ({
          ...prev,
          sameAsContact: checked,
          whatsappNo: checked ? prev.contactNo : prev.whatsappNo
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => {
        const newData = { ...prev, [name]: value };
        if (name === "contactNo" && prev.sameAsContact) {
          newData.whatsappNo = value;
        }
        return newData;
      });
    }
  };
  const handlePatientTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      patientType: type,
      consultationRegarding: type === "consultation" ? "" : prev.consultationRegarding
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      navigate("/home", { state: { newPatient: formData } });
    }, 2000);
  };
  return (
    <main className="book-appointment-page">
      <div className="appointment-header">
        <h1>Book Your Appointment</h1>
        <p>Fill out the details below to schedule your visit with Dr. Aarav Sharma.</p>
      </div>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <section className="form-section">
          <h2>1. Personal Information</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Rahul Sharma" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required placeholder="e.g. 32" min="0" max="120" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. rahul@example.com" />
            </div>
            <div className="form-group hidden-desktop"></div>
            <div className="form-group">
              <label htmlFor="contactNo">Contact Number *</label>
              <input type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required placeholder="+91" />
            </div>
            <div className="form-group">
              <label htmlFor="whatsappNo">WhatsApp Number *</label>
              <input type="tel" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} required placeholder="+91" disabled={formData.sameAsContact} className={formData.sameAsContact ? "disabled-input" : ""} />
              <div className="checkbox-wrapper mt-2">
                <input type="checkbox" id="sameAsContact" name="sameAsContact" checked={formData.sameAsContact} onChange={handleChange} />
                <label htmlFor="sameAsContact" className="checkbox-label">Same as Contact Number</label>
              </div>
            </div>
          </div>
        </section>
        <section className="form-section">
          <h2>2. Consultation Details</h2>
          <div className="toggle-group full-width">
            <label className="toggle-label">Patient Type</label>
            <div className="toggle-buttons">
              <button type="button" className={`toggle-btn ${formData.patientType === "new" ? "active" : ""}`} onClick={() => handlePatientTypeChange("new")}>
                New Patient
              </button>
              <button type="button" className={`toggle-btn ${formData.patientType === "consultation" ? "active" : ""}`} onClick={() => handlePatientTypeChange("consultation")}>
                Regular / Follow-up
              </button>
            </div>
          </div>
          {formData.patientType === "new" && (
            <div className="form-group full-width fade-in">
              <label htmlFor="consultationRegarding">Consultation Regarding *</label>
              <select id="consultationRegarding" name="consultationRegarding" value={formData.consultationRegarding} onChange={handleChange} required>
                <option value="" disabled>Select Reason for Visit</option>
                {consultationOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group full-width">
            <label htmlFor="symptoms">Brief Description of Symptoms</label>
            <textarea id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} rows="3" placeholder="Please briefly describe your problem..."></textarea>
          </div>
          <div className="form-group full-width medical-history-box">
            <div className="checkbox-wrapper">
              <input type="checkbox" id="hasMedicalHistory" name="hasMedicalHistory" checked={formData.hasMedicalHistory} onChange={handleChange} />
              <label htmlFor="hasMedicalHistory" className="checkbox-label font-medium">Do you have any ongoing medications or allergies?</label>
            </div>
            {formData.hasMedicalHistory && (
              <div className="mt-4 fade-in">
                <textarea id="medicalHistoryDetails" name="medicalHistoryDetails" value={formData.medicalHistoryDetails} onChange={handleChange} rows="2" placeholder="Please list your medications and allergies here..." required></textarea>
              </div>
            )}
          </div>
        </section>
        <section className="form-section">
          <h2>3. Scheduling</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="date">Preferred Date *</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="form-group">
              <label htmlFor="timeSlot">Preferred Time Slot *</label>
              <select id="timeSlot" name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
                <option value="" disabled>Select Time Slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group full-width flexible-box">
            <div className="checkbox-wrapper custom-switch">
              <input type="checkbox" id="flexibleTiming" name="flexibleTiming" checked={formData.flexibleTiming} onChange={handleChange} />
              <label htmlFor="flexibleTiming" className="switch-label">
                <span className="switch-slider"></span>
                I am flexible to change my timing within a 2-hour range if required.
              </label>
            </div>
          </div>
          <div className="form-group full-width sync-box">
            <div className="checkbox-wrapper">
              <input type="checkbox" id="syncCalendar" name="syncCalendar" checked={formData.syncCalendar} onChange={handleChange} />
              <label htmlFor="syncCalendar" className="checkbox-label font-medium" style={{color: "var(--primary)"}}>
                Sync with Google Calendar (Send email invitation for this time slot)
              </label>
            </div>
          </div>
        </section>
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Confirm Appointment Request
            <span className="material-symbols-outlined">event_available</span>
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="payment-popup-overlay">
          <div className="payment-popup-card fade-in-up">
            <div className="popup-spinner"></div>
            <h2>Processing Request...</h2>
            <p>Redirecting to secure payment gateway.</p>
            <span className="secure-badge">
              <span className="material-symbols-outlined">lock</span>
              Secure Connection
            </span>
          </div>
        </div>
      )}
    </main>
  );
};

export default BookAppointment;
