import { Link } from "react-router-dom";
import {
  Home,
  Mail,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Home size={24} />
            SmartStay
          </Link>

          <p>
            Find comfortable rooms, apartments, PGs and
            houses that fit your lifestyle.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-column">
          <h3>Account</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>
            <Mail size={17} />
            support@smartstay.com
          </p>

          <p>
            <Phone size={17} />
            +91 XXXXX XXXXX
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 SmartStay. All rights reserved.
        </p>

        <div>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;