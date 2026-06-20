import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    alert("Wrong email or password");
    return;
  }

  const safeUser = {
    ...user,
    myEvents: user.myEvents || [],
  };

  localStorage.setItem("currentUser", JSON.stringify(safeUser));

  window.dispatchEvent(new Event("storage"));

  navigate("/profile");
};

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

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

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;