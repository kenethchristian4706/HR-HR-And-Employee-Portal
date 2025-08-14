// import "./style.css";

export default function Navbar({ onLogout }) {
  return (
    <div className="navbar">
      <h1>HR+ Portal</h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <button 
          onClick={onLogout} 
          style={{
            background: "white",
            color: "var(--hr-green)",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
