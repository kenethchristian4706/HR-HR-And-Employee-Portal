import { useState } from "react";
import axios from "axios";
// import "./style.css";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login/", {
        username,
        password
      });
      alert(res.data.message);
      setUser(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>HR+ Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Full Name"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}
