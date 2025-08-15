import { useNavigate } from 'react-router-dom';
import '../style.css';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container home">
      <h1 className="title">HR+ Portal</h1>
      <div className="button-group">
        <button className="btn" onClick={() => navigate('/login')}>Login</button>
        <button className="btn" onClick={() => navigate('/signup')}>Register</button>
      </div>
    </div>
  );
}

export default HomePage;
