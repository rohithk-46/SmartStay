import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Home,
  ShieldCheck,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <Home size={25} />
          <span>SmartStay</span>
        </div>

        <div className="auth-header">
          <h1>Welcome Back</h1>

          <p>
            Login to continue to SmartStay
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>Email Address</label>

            <div className="input-box">
              <Mail size={19} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

          </div>

          <div className="form-group">

            <label>Password</label>

            <div className="input-box">
              <Lock size={19} />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

          </div>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <div className="forgot-password">
            <a href="#">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Login
            <ArrowRight size={18} />
          </button>

        </form>

        <div className="auth-security">
          <ShieldCheck size={17} />
          Secure SmartStay account
        </div>

        <p className="auth-footer">
          Don't have an account?
          <Link to="/register">
            {" "}Create Account
          </Link>
        </p>

      </div>

    </main>
  );
}

export default Login;