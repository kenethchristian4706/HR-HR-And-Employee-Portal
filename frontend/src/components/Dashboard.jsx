import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout/');
    } catch (err) {}
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="container dashboard">
      <h2>Welcome, {user.worker_id ? user.worker_id : ''}</h2>
      <p>Role: {user.role}</p>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
