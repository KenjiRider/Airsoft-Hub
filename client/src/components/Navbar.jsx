import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AirsoftHub</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/my-events">My Events</Link>
        <Link to="/create-event">Create Event</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login" className="login-link">
          Login
        </Link>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;