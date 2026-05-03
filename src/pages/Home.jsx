import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Book Your Doctor Appointment Without Waiting in Long Queues</h1>

          <p>
            DoctoSlot connects patients with Dr. Aarav Sharma through simple
            time slot booking, WhatsApp support, and smarter clinic queue
            management.
          </p>

          <div className="hero-buttons">
            <Link to="/book" className="btn btn-primary">
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
              <strong>#08</strong>
            </div>

            <div className="queue-row">
              <span>Next Patient</span>
              <strong>Rahul Verma</strong>
            </div>

            <div className="queue-row">
              <span>Available Slots</span>
              <strong>5</strong>
            </div>

            <div className="queue-row">
              <span>Average Wait</span>
              <strong>12 min</strong>
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