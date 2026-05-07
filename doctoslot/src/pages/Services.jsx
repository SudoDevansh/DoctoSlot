import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "General Consultation",
    description:
      "Basic medical consultation for common health problems and regular checkups.",
  },
  {
    title: "Fever and Infection Treatment",
    description:
      "Treatment for fever, cold, cough, viral infections, and minor illnesses.",
  },
  {
    title: "Diabetes and BP Checkup",
    description:
      "Regular monitoring and advice for diabetes and blood pressure patients.",
  },
  {
    title: "Child and Family Health",
    description:
      "General health support for children, adults, and family members.",
  },
  {
    title: "Follow-up Consultation",
    description:
      "Follow-up visits for existing patients and ongoing treatment review.",
  },
  {
    title: "Preventive Health Checkup",
    description:
      "Routine health checkups to detect health issues at an early stage.",
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-header">
        <h1>Our Medical Services</h1>
        <p>
          We provide simple and reliable medical services for regular health
          problems, checkups, and follow-up consultations.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>

            <Link to="/BookAppointment" className="service-button">
              Book Appointment
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;