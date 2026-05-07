import "./About.css";

const doctor = {
  name: "Dr. Aarav Sharma",
  specialty: "General Physician",
  qualification: "MBBS, MD",
  experience: "10+ Years Experience",
  image: "/assets/doctor.jpg",
};
const education = [
  "MBBS - Maulana Azad Medical College",
  "MD in General Medicine - AIIMS",
  "Advanced Certification in Internal Medicine",
];
const expertise = [
  "General Consultation",
  "Fever and Infection",
  "Diabetes and BP Care",
  "Preventive Health Checkups",
];
function About() {
  return (
    <main className="about-page">
      <section className="about-header">
        <div className="about-image">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <div className="about-info">
          <p className="about-specialty">{doctor.specialty}</p>
          <h1>{doctor.name}</h1>
          <p className="about-qualification">{doctor.qualification}</p>
          <p className="about-experience">{doctor.experience}</p>
          <p className="about-description">
            Dr. Aarav Sharma is a general physician who provides basic medical
            care, regular health checkups, and treatment for common health
            problems. The clinic focuses on simple, clear, and patient-friendly
            consultation.
          </p>
        </div>
      </section>
      <section className="about-content">
        <div className="about-card">
          <h2>Education</h2>
          <ul>
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="about-card">
          <h2>Areas of Treatment</h2>
          <ul>
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h2>Clinic Timings</h2>
          <p>
            <strong>Monday - Saturday:</strong> 9:00 AM - 12:00 PM
          </p>
          <p>
            <strong>Evening:</strong> 5:00 PM - 7:00 PM
          </p>
          <p>
            <strong>Sunday:</strong> Closed
          </p>
        </div>
      </section>
      <section className="about-note">
        <h2>Emergency Note</h2>
        <p>
          For emergency cases, please contact the clinic directly or visit the
          nearest hospital.
        </p>
      </section>
    </main>
  );
}
export default About;