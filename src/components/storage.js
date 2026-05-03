import { sampleAppointments } from "../data/appointmentData.js";

const STORAGE_KEY = "doctoslot_appointments";

export function getAppointments() {
  const storedAppointments = localStorage.getItem(STORAGE_KEY);

  if (!storedAppointments) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleAppointments));
    return sampleAppointments;
  }

  try {
    return JSON.parse(storedAppointments);
  } catch (error) {
    console.error("Failed to parse appointments from localStorage:", error);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleAppointments));
    return sampleAppointments;
  }
}

export function saveAppointments(appointments) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}

export function addAppointment(appointment) {
  const appointments = getAppointments();
  const updatedAppointments = [...appointments, appointment];

  saveAppointments(updatedAppointments);

  return updatedAppointments;
}

export function updateAppointmentStatus(id, status) {
  const appointments = getAppointments();

  const updatedAppointments = appointments.map((appointment) =>
    appointment.id === id ? { ...appointment, status } : appointment
  );

  saveAppointments(updatedAppointments);

  return updatedAppointments;
}