import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });
      if (res.data && res.data.worker_id) {
        localStorage.setItem('user', JSON.stringify(res.data));
        if (res.data.role === 'HR') {
          navigate('/dashboard');
        } else if (res.data.role === 'Employee') {
          navigate('/dashboard');
        } else {
          setError('Unknown role');
        }
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="container login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
