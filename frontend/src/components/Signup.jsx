import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

function Signup() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    role: 'Employee',
    department: '',
    position: '',
    password: '',
    password1: '',
    employment_status: 'ACTIVE',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (form.password !== form.password1) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/register/', {
        full_name: form.full_name,
        email: form.email,
        phone_number: form.phone_number,
        role: form.role,
        department: form.department,
        position: form.position,
        password: form.password,
        password1: form.password1,
        employment_status: form.employment_status,
      });
      if (res.data && res.data.message) {
        navigate('/login');
      } else {
        setError('Signup failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="container signup">
      <div className="form-card">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="full_name"
            className="input-field"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone_number"
            className="input-field"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={handleChange}
            required
          />
          <select name="role" className="role-dropdown" value={form.role} onChange={handleChange} required>
            <option value="HR">HR</option>
            <option value="Employee">Employee</option>
          </select>
          <input
            type="text"
            name="department"
            className="input-field"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            className="input-field"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password1"
            className="input-field"
            placeholder="Confirm Password"
            value={form.password1}
            onChange={handleChange}
            required
          />
          <select name="employment_status" className="role-dropdown" value={form.employment_status} onChange={handleChange} required>
            <option value="ACTIVE">Active</option>
            <option value="ON_LEAVE">On Leave</option>
            <option value="RESIGNED">Resigned</option>
          </select>
          {error && <div className="error-message">{error}</div>}
          <button className="btn-primary form-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
