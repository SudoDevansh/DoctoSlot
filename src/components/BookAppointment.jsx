import { useState } from "react";
import TimeSlot from "../components/TimeSlot.jsx";
import AppointmentModal from "../components/AppointmentModal.jsx";
import { addAppointment, getAppointments } from "../utils/storage.js";

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
];

const defaultBookedSlots = ["09:00 AM", "09:30 AM", "10:00 AM"];

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "Male",
    date: "",
    reason: "",
  });

  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");
  const [confirmedAppointment, setConfirmedAppointment] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function generateToken() {
    const appointments = getAppointments();
    const nextTokenNumber = appointments.length + 1;

    return String(nextTokenNumber).padStart(2, "0");
  }

  function validateForm() {
    if (!formData.name.trim()) {
      return "Patient name is required.";
    }

    if (!formData.phone.trim()) {
      return "Phone number is required.";
    }

    if (!formData.age) {
      return "Age is required.";
    }

    if (!formData.date) {
      return "Appointment date is required.";
    }

    if (!selectedTime) {
      return "Please select a time slot.";
    }

    return "";
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const newAppointment = {
      id: Date.now(),
      token: generateToken(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      age: Number(formData.age),
      gender: formData.gender,
      date: formData.date,
      time: selectedTime,
      reason: formData.reason.trim() || "General Consultation",
      status: "Waiting",
    };

    addAppointment(newAppointment);
    setConfirmedAppointment(newAppointment);
    setError("");

    setFormData({
      name: "",
      phone: "",
      age: "",
      gender: "Male",
      date: "",
      reason: "",
    });

    setSelectedTime("");
  }

  return (
    <main className="booking-page">
      <section className="booking-header">
        <p className="page-badge">Book Appointment</p>
        <h1>Choose Your Time Slot</h1>
        <p>
          Fill in patient details, select an available time slot, and confirm
          your visit with Dr. Aarav Sharma.
        </p>
      </section>

      <section className="booking-layout">
        <form className="booking-form-card" onSubmit={handleSubmit}>
          <h2>
            <span className="material-symbols-outlined fill-icon">
              person_add
            </span>
            Patient Details
          </h2>

          {error && <p className="form-error">{error}</p>}

          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter patient name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Appointment Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Reason for Visit</label>
              <textarea
                name="reason"
                placeholder="Example: Fever, cough, follow-up..."
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="slot-section">
            <h3>Select Time Slot</h3>

            <div className="slot-legend">
              <span>
                <i className="legend available"></i> Available
              </span>
              <span>
                <i className="legend selected"></i> Selected
              </span>
              <span>
                <i className="legend booked"></i> Booked
              </span>
            </div>

            <div className="time-slot-grid">
              {timeSlots.map((time) => (
                <TimeSlot
                  key={time}
                  time={time}
                  selected={selectedTime === time}
                  booked={defaultBookedSlots.includes(time)}
                  onSelect={setSelectedTime}
                />
              ))}
            </div>
          </div>

          <button type="submit" className="confirm-btn">
            Confirm Appointment
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>

        <aside className="booking-summary-card">
          <div className="doctor-mini-card">
            <div className="doctor-avatar">AS</div>

            <div>
              <h3>Dr. Aarav Sharma</h3>
              <p>General Physician</p>
            </div>
          </div>

          <div className="summary-list">
            <div>
              <span>Clinic</span>
              <strong>Sharma Family Clinic</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Sonipat, Haryana</strong>
            </div>

            <div>
              <span>Consultation Fee</span>
              <strong>₹500</strong>
            </div>

            <div>
              <span>Selected Date</span>
              <strong>{formData.date || "Not selected"}</strong>
            </div>

            <div>
              <span>Selected Time</span>
              <strong>{selectedTime || "Not selected"}</strong>
            </div>
          </div>

          <div className="booking-note">
            <span className="material-symbols-outlined fill-icon">info</span>
            <p>Please arrive 10 minutes before your selected time slot.</p>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="summary-whatsapp"
          >
            Book via WhatsApp
          </a>
        </aside>
      </section>

      <AppointmentModal
        appointment={confirmedAppointment}
        onClose={() => setConfirmedAppointment(null)}
      />
    </main>
  );
}

export default BookAppointment;