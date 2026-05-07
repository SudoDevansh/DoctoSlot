import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const location = useLocation();
  const [queueState, setQueueState] = useState({
    currentToken: "",
    patientName: "-",
    availableSlots: "5",
    averageWait: "15 min"
  });
  const [newBooking, setNewBooking] = useState(null);

  useEffect(() => {
    if (location.state && location.state.newPatient) {
      const patient = location.state.newPatient;
      setNewBooking(patient);
      setQueueState({
        currentToken: "09",
        patientName: patient.name || "New Patient",
        availableSlots: 4,
        averageWait: "15 min"
      });
      // Clear state so refresh doesn't trigger again
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <main className="home-page">
      {newBooking && (
        <div className="success-banner fade-in" style={{
          background: "#dcfce7", color: "var(--success)", padding: "16px",
          textAlign: "center", borderRadius: "8px", margin: "0 24px 24px",
          fontWeight: "600", border: "1px solid #bbf7d0"
        }}>
          Appointment Confirmed for {newBooking.name}. Please check your email and WhatsApp for details!
        </div>
      )}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Book Your Doctor Appointment Without Waiting in Long Queues</h1>

          <p>
            DoctoSlot connects patients with Dr. Aarav Sharma through simple
            time slot booking, WhatsApp support, and smarter clinic queue
            management.
          </p>

          <div className="hero-buttons">
            <Link to="/BookAppointment" className="btn btn-primary">
              Book Appointment
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <span className="material-symbols-outlined">chat</span>
              Book via WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="doctor-card">
            <div className="doctor-avatar">AS</div>
            <h3>Dr. Aarav Sharma</h3>
            <p>General Physician</p>
            <span>Available Today</span>
          </div>

          <div className="queue-card">
            <h3>Today’s Clinic Flow</h3>

            <div className="queue-row">
              <span>Current Token</span>
              <strong>#{queueState.currentToken}</strong>
            </div>

            <div className="queue-row">
              <span>Patient Name</span>
              <strong>{queueState.patientName}</strong>
            </div>

            <div className="queue-row">
              <span>Available Slots</span>
              <strong>{queueState.availableSlots}</strong>
            </div>

            <div className="queue-row">
              <span>Average Wait</span>
              <strong>{queueState.averageWait}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        {[
          {
            icon: "calendar_month",
            title: "Easy Booking",
            desc: "Schedule appointments in just a few clicks.",
          },
          {
            icon: "schedule",
            title: "Time Slot Selection",
            desc: "Choose the exact time that works for you.",
          },
          {
            icon: "support_agent",
            title: "WhatsApp Support",
            desc: "Get quick appointment help through WhatsApp.",
          },
          {
            icon: "hourglass_empty",
            title: "Less Waiting",
            desc: "Arrive on time and reduce waiting room crowd.",
          },
        ].map((item) => (
          <div className="feature-card" key={item.title}>
            <div className="feature-icon">
              <span className="material-symbols-outlined fill-icon">
                {item.icon}
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;