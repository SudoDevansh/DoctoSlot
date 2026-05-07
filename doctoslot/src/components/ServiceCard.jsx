import { Link } from "react-router-dom";

function ServiceCard({ icon, title, description }) {
  return (
    <article className="services-card">
      <div className="services-card-icon">{icon}</div>
      <h3 className="services-card-title">{title}</h3>
      <p className="services-card-description">{description}</p>
      <Link to="/BookAppointment" className="services-card-button">
        Book Now
      </Link>
    </article>
  );
}

export default ServiceCard;