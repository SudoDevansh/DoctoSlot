import { useState } from "react";
import "./Contact.css";
 
const clinic = {
  name: "Sharma Family Clinic",
  doctor: "Dr. Aarav Sharma",
  address: ["123 Medical Enclave,", "Sonipat, Haryana 131001"],
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "contact@sharmafamilyclinic.in",
  hours: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
};
 
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const text = `Hello, I want to contact ${clinic.name}.
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;
 
    const whatsappUrl = `https://wa.me/${clinic.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
 
    setFormData({ name: "", phone: "", message: "" });
  };
 
  const directWhatsappUrl = `https://wa.me/${clinic.phoneRaw}?text=${encodeURIComponent(
    `Hello, I want to book an appointment with ${clinic.doctor}.`
  )}`;
 
  return (
    <main className="contact-page">
      {/* ===== Header ===== */}
      <header className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We're here to help. Reach out to {clinic.doctor} and the team at{" "}
          {clinic.name} for appointments or inquiries.
        </p>
      </header>
 
      <div className="contact-grid">
        {/* ===== LEFT COLUMN ===== */}
        <div className="contact-left">
          <div className="contact-info-card">
            <h2 className="contact-clinic-name">{clinic.name}</h2>
            <p className="contact-doctor-name">{clinic.doctor}</p>
 
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>Address</strong>
                  {clinic.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
 
              <li className="contact-info-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <strong>Phone</strong>
                  <p>{clinic.phone}</p>
                </div>
              </li>
 
              <li className="contact-info-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
                <div>
                  <strong>Email</strong>
                  <p>{clinic.email}</p>
                </div>
              </li>
 
              <li className="contact-info-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <strong>Opening Hours</strong>
                  {clinic.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
            </ul>
 
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Message on WhatsApp
            </a>
          </div>
 
          <div className="contact-emergency">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
            <div>
              <strong>Medical Emergency?</strong>
              <p>
                If you are experiencing a life-threatening medical emergency,
                please dial 112 or head to the nearest hospital immediately.
              </p>
            </div>
          </div>
        </div>
 
        {/* ===== RIGHT COLUMN ===== */}
        <div className="contact-right">
          <div className="contact-map">
            <iframe
              title="Clinic Location"
              src="https://maps.google.com/maps?q=Sonipat,Haryana,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
 
          <div className="contact-form-card">
            <h2 className="contact-form-title">Send us a Message</h2>
 
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
 
                <div className="contact-form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
 
              <div className="contact-form-field">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
 
              <button type="submit" className="contact-form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default Contact;
 