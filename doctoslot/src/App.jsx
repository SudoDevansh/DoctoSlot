import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import BookAppointment from "./pages/BookAppointment.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (<>
  <Navbar/>
  <div style={{marginTop: "30px",padding:"20px"}}>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/BookAppointment" element={<BookAppointment />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;