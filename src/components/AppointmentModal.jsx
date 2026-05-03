import { Link } from "react-router-dom";

function AppointmentModal({ appointment, onClose }) {
  if (!appointment) {
    return null;
  }

  const message = `Appointment Confirmed

Patient: ${appointment.name}
Doctor: Dr. Aarav Sharma
Date: ${appointment.date}
Time: ${appointment.time}
Token: ${appointment.token}
Clinic: Sharma Family Clinic, Sonipat`;

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="modal-overlay">
      <div className="appointment-modal">
        <div className="modal-success-icon">
          <span className="material-symbols-outlined fill-icon">
            check_circle
          </span>
        </div>

        <h2>Appointment Confirmed!</h2>

        <p className="modal-subtitle">
          Your visit has been scheduled successfully.
        </p>

        <div className="confirmation-details">
          <div>
            <span>Token Number</span>
            <strong>#{appointment.token}</strong>
          </div>

          <div>
            <span>Patient</span>
            <strong>{appointment.name}</strong>
          </div>

          <div>
            <span>Date</span>
            <strong>{appointment.date}</strong>
          </div>

          <div>
            <span>Time</span>
            <strong>{appointment.time}</strong>
          </div>

          <div>
            <span>Doctor</span>
            <strong>Dr. Aarav Sharma</strong>
          </div>

          <div>
            <span>Clinic</span>
            <strong>Sharma Family Clinic</strong>
          </div>
        </div>

        <p className="arrival-note">
          Please arrive 10 minutes before your selected time slot.
        </p>

        <div className="modal-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            Send on WhatsApp
          </a>

          <Link to="/" className="btn btn-primary" onClick={onClose}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;