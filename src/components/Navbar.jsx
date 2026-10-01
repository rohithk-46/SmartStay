import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  LogOut,
  Menu,
  X,
  CalendarDays,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <Home size={24} />
        <span>SmartStay</span>
      </Link>

      <div
        className={`nav-links ${
          menuOpen ? "mobile-open" : ""
        }`}
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link
          to="/properties"
          onClick={closeMenu}
        >
          Properties
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
      </div>

      <div
        className={`nav-actions ${
          menuOpen ? "mobile-open" : ""
        }`}
      >
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              onClick={closeMenu}
            >
              Dashboard
            </Link>

            <Link
              to="/profile"
              onClick={closeMenu}
            >
              Profile
            </Link>

            <Link
              to="/favorites"
              onClick={closeMenu}
            >
              Favorites
            </Link>

            <Link
              to="/bookings"
              className="booking-nav-link"
              onClick={closeMenu}
            >
              <CalendarDays size={17} />
              Bookings
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              <LogOut size={17} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
              onClick={closeMenu}
            >
              Register
            </Link>
          </>
        )}
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

    </nav>
  );
}

export default Navbar;