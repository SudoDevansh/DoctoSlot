import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import BookAppointment from "./pages/BookAppointment.jsx";
import DoctorDashboard from "./pages/Doctor-Dashboard.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/Doctor-Dashboard" || location.pathname === "/";

  return (
    <>
      {!hideLayout && <Navbar />}
      
      <div style={hideLayout ? {} : { marginTop: "30px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
          <Route path="/Doctor-Dashboard" element={<DoctorDashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;