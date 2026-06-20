import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const [user, setUser] = useState(null);

useEffect(() => {
  const loadUser = () => {
    const data = JSON.parse(localStorage.getItem("currentUser"));
    setUser(data);
  };

  loadUser();

  window.addEventListener("storage", loadUser);

  return () => window.removeEventListener("storage", loadUser);
}, []);
  if (!user) return null;

  return (
    <div className="dashboard">
      
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>AirsoftHub</h2>

        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/events")}>Events</button>
        <button onClick={() => navigate("/my-events")}>My Events</button>
        <button onClick={() => navigate("/create-event")}>Create Event</button>

        <button onClick={logout} style={{ marginTop: "auto", background: "crimson" }}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">

        <div className="profile-card">

          <div className="avatar">
            {user.email?.charAt(0).toUpperCase()}
          </div>

          <h2>{user.email}</h2>
          <p>Airsoft Player</p>

          <div style={{ marginTop: "20px" }}>
            <p>📍 Location: Unknown</p>
            <p>🎯 Events joined: {user.myEvents?.length || 0}</p>
          </div>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;