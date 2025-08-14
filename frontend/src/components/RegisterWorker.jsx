import { useState } from "react";
import axios from "axios";
// import "./style.css";

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    role: "Employee",
    department: "",
    position: "",
    employment_status: "ACTIVE",
    password: "",
    password1: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/register/", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("Registered successfully");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="page-center">
      <div className="card" style={{ width: "500px" }}>
        <h2>Worker Registration</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input name="full_name" placeholder="Full Name" className="input" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" className="input" onChange={handleChange} />
          <input name="phone_number" placeholder="Phone Number" className="input" onChange={handleChange} />
          <select name="role" className="input" onChange={handleChange}>
            <option value="HR">HR</option>
            <option value="Employee">Employee</option>
          </select>
          <input name="department" placeholder="Department" className="input" onChange={handleChange} />
          <input name="position" placeholder="Position" className="input" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} />
          <input name="password1" type="password" placeholder="Confirm Password" className="input" onChange={handleChange} />
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
}
