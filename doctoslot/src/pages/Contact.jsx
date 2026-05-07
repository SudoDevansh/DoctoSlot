import { useState } from "react";
import "./Contact.css";

const clinic = {
  name: "Sharma Family Clinic",
  doctor: "Dr. Aarav Sharma",
  address: "123 Medical Enclave, Sonipat, Haryana 131001",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "contact@sharmafamilyclinic.in",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM, Sunday: Closed",
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello, I want to contact ${clinic.name}.
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${clinic.phoneRaw}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  const directWhatsappUrl = `https://wa.me/${clinic.phoneRaw}?text=${encodeURIComponent(
    `Hello, I want to book an appointment with ${clinic.doctor}.`
  )}`;

  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Contact {clinic.doctor} at {clinic.name} for appointments or clinic
          related queries.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h2>{clinic.name}</h2>
          <p className="doctor-name">{clinic.doctor}</p>

          <div className="contact-details">
            <p>
              <strong>Address:</strong> {clinic.address}
            </p>
            <p>
              <strong>Phone:</strong> {clinic.phone}
            </p>
            <p>
              <strong>Email:</strong> {clinic.email}
            </p>
            <p>
              <strong>Hours:</strong> {clinic.hours}
            </p>
          </div>

          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Message on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h2>Send a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Clinic Location</h2>

        <iframe
          title="Clinic Location"
          src="https://maps.google.com/maps?q=Sonipat,Haryana,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

      <section className="emergency-note">
        <h2>Emergency Note</h2>
        <p>
          For serious medical emergencies, call 112 or visit the nearest
          hospital immediately.
        </p>
      </section>
    </main>
  );
}

export default Contact;