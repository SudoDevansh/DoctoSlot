import { NavLink ,Link,useNavigate} from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    return(
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="ogo">
                DoctoSlot
                </Link>
 <nav className="nav-links">

          <NavLink to="/" className="nav-link">

            Home

          </NavLink>

          <NavLink to="/about" className="nav-link">

            About

          </NavLink>

          <NavLink to="/services" className="nav-link">

            Services

          </NavLink>

          <NavLink to="/contact" className="nav-link">

            Contact

          </NavLink>

        </nav>

        <div className="nav-actions">

          <button className="nav-book-btn" onClick={() => navigate("/BookAppointment")}>

            Book Now

          </button>

          <Link to="/dashboard" className="dashboard-icon">

            <span className="material-symbols-outlined">account_circle</span>

          </Link>

        </div>

      </div>

    </header>

  );

}

export default Navbar;