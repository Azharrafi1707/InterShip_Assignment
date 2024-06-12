import React, { useContext ,useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { AuthContext } from "../context/auth.js";
import "../index.css"
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [auth, setauth] = useContext(AuthContext);
  const handleLogout = () => {
    setauth({
      user: null,
      token: ""
    })
    localStorage.removeItem("auth")
  }
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <>
      <nav className="navbar">
      <div className="container-fluid">
        <div>
          <Link to="/" className="navbar-brand">
            <PiShoppingCartSimpleDuotone /> Ecommerce App
          </Link>
          <button className="navbar-toggle" onClick={toggleNav}>
            ☰
          </button>
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${isNavOpen ? 'show' : ''}`}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" onClick={handleLogout} className="nav-link">
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
