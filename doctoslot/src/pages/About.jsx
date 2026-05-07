import { useState } from "react";
import "./About.css";
const doctor = {
  name: "Dr. Aarav Sharma",
  specialty: "General Physician",
  qualification: "MBBS, MD",
  experience: "10+ Years Experience",
  rating: "Highly Rated Specialist",
  bio: "Dr. Aarav Sharma is a highly dedicated General Physician committed to providing comprehensive medical care with an empathetic approach. With over a decade of clinical experience, he specializes in diagnosing and managing a wide array of medical conditions, from acute illnesses to complex chronic diseases. His methodology integrates the latest medical advancements with a patient-first philosophy, ensuring that every individual receives personalized and effective treatment plans in a reassuring environment.",
  image: "/assets/doctor.jpg",
};

const education = [
  {
    degree: "MD in General Medicine",
    institute: "All India Institute of Medical Sciences (AIIMS)",
  },
  {
    degree: "MBBS",
    institute: "Maulana Azad Medical College",
  },
  {
    degree: "Advanced Certification in Internal Medicine",
    institute: "Royal College of Physicians",
  },
];

const expertise = [
  "Chronic Disease Management",
  "Preventive Healthcare",
  "Infectious Diseases",
  "Metabolic Disorders",
  "Geriatric Care",
  "Comprehensive Health Screenings",
];

const mission =
  "To deliver expert, evidence-based medical care while fostering a compassionate environment that prioritizes patient comfort, trust, and long-term well-being.";

function About() {
  return (
    <main className="about-page">
      {/* ===== Doctor Profile Card ===== */}
      <section className="about-profile">
        <div className="about-profile-image">
          <img src={doctor.image} alt={doctor.name} />
        </div>

        <div className="about-profile-info">
          <span className="about-badge">{doctor.specialty}</span>
          <h1 className="about-doctor-name">{doctor.name}</h1>
          <p className="about-qualification">{doctor.qualification}</p>

          <div className="about-chips">
            <div className="about-chip">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>{doctor.experience}</span>
            </div>

            <div className="about-chip">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2" />
              </svg>
              <span>{doctor.rating}</span>
            </div>
          </div>

          <div className="about-bg-box">
            <p className="about-bg-label">PROFESSIONAL BACKGROUND</p>
            <p className="about-bg-text">{doctor.bio}</p>
          </div>
        </div>
      </section>

      {/* ===== Education + Mission Row ===== */}
      <section className="about-grid">
        <div className="about-card about-education">
          <div className="about-card-header">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <h2>Education &amp; Certifications</h2>
          </div>

          <ul className="about-edu-list">
            {education.map((item) => (
              <li key={item.degree} className="about-edu-item">
                <svg
                  className="about-edu-check"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <div>
                  <strong>{item.degree}</strong>
                  <p>{item.institute}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-card about-mission">
          <div className="about-mission-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="12" y1="11" x2="12" y2="16" />
              <line x1="9.5" y1="13.5" x2="14.5" y2="13.5" />
            </svg>
          </div>
          <h2>Clinic Mission</h2>
          <p>"{mission}"</p>
        </div>
      </section>

      {/* ===== Expertise + Timings Row ===== */}
      <section className="about-grid">
        <div className="about-card about-expertise">
          <div className="about-card-header">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16.5 3.5a3.5 3.5 0 1 1 4 4l-12 12a3.5 3.5 0 1 1-4-4z" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <h2>Areas of Expertise</h2>
          </div>

          <div className="about-tags">
            {expertise.map((tag) => (
              <span key={tag} className="about-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="about-right-column">
          <div className="about-card about-timings">
            <div className="about-card-header">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h2>Clinic Timings</h2>
            </div>

            <div className="about-timing-row">
              <strong>Mon - Sat</strong>
              <div className="about-timing-hours">
                <span>9:00 AM - 12:00 PM</span>
                <span>5:00 PM - 7:00 PM</span>
              </div>
            </div>

            <div className="about-timing-row about-timing-row-divider">
              <strong>Sunday</strong>
              <span className="about-timing-closed">Closed</span>
            </div>
          </div>

          <div className="about-emergency">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <strong>Emergency Note</strong>
              <p>For emergency cases, please contact the clinic directly.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;