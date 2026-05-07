import ServiceCard from "../components/ServiceCard.jsx";
import { useState } from "react";
import "./Services.css";

const StethoscopeIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 2v2M7 2v2M5 4h8v6a4 4 0 0 1-8 0z" />
    <path d="M9 14v3a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4v-2" />
    <circle cx="17" cy="11" r="2" />
  </svg>
);

const ThermometerIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4a2 2 0 0 0-4 0v10.5a4 4 0 1 0 4 0z" />
  </svg>
);

const PulseIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 12 7 12 10 6 14 18 17 12 21 12" />
  </svg>
);

const FamilyIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="5" r="2" />
    <circle cx="17" cy="5" r="2" />
    <path d="M5 22v-7H3l2-6h4l2 6h-2v7z" />
    <path d="M15 22v-7h-2l2-6h4l2 6h-2v7z" />
  </svg>
);

const CalendarClockIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <circle cx="12" cy="15" r="3" />
    <line x1="12" y1="15" x2="13" y2="14" />
  </svg>
);

const ShieldIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" />
    <line x1="12" y1="9" x2="12" y2="14" />
    <line x1="9.5" y1="11.5" x2="14.5" y2="11.5" />
  </svg>
);

const services = [
  {
    id: 1,
    icon: StethoscopeIcon,
    title: "General Consultation",
    description:
      "Comprehensive medical evaluations for common ailments, routine checkups, and general health advice to keep you feeling your best.",
  },
  {
    id: 2,
    icon: ThermometerIcon,
    title: "Fever and Infection Treatment",
    description:
      "Rapid diagnosis and effective treatment plans for viral and bacterial infections, ensuring a quick and safe recovery.",
  },
  {
    id: 3,
    icon: PulseIcon,
    title: "Diabetes and Blood Pressure Checkup",
    description:
      "Regular monitoring and management of chronic conditions to prevent complications and maintain optimal cardiovascular health.",
  },
  {
    id: 4,
    icon: FamilyIcon,
    title: "Child and Family Health",
    description:
      "Pediatric care, vaccinations, and holistic health services designed to support the wellness of every family member.",
  },
  {
    id: 5,
    icon: CalendarClockIcon,
    title: "Follow-up Consultation",
    description:
      "Review progress, adjust treatment plans, and address any ongoing concerns after an initial visit or recent medical procedure.",
  },
  {
    id: 6,
    icon: ShieldIcon,
    title: "Preventive Health Checkup",
    description:
      "Proactive screening packages tailored to your age and lifestyle to identify potential health risks before they become serious issues.",
  },
];

function Services() {
  return (
    <main className="services-page">
      <header className="services-header">
        <h1 className="services-title">Our Medical Services</h1>
        <p className="services-subtitle">
          Providing comprehensive, expert care with a focus on your long-term
          health and well-being. Book an appointment today for personalized
          medical attention.
        </p>
      </header>

      <section className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Services;