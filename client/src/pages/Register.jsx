import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleRegister = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    id: Date.now().toString(),
    email,
    password,
    myEvents: [],
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  window.dispatchEvent(new Event("storage"));

  navigate("/profile");
};

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Register</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;