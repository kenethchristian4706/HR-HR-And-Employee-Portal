import Navbar from "./Navbar";
// import "./style.css";

export default function Dashboard({ user, onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <div className="dashboard">
        <div className="sidebar">
          {user.role === "HR" ? (
            <>
              <a href="/manage-employees">Manage Employees</a>
              <a href="/add-employee">Add Employee</a>
              <a href="/reports">Reports</a>
            </>
          ) : (
            <>
              <a href="/my-profile">My Profile</a>
              <a href="/my-tasks">My Tasks</a>
              <a href="/leave-request">Leave Request</a>
            </>
          )}
        </div>
        <div className="content">
          <h2>Welcome, {user.full_name}</h2>
          <div className="card-grid">
            <div className="dashboard-card">📋 {user.role === "HR" ? "Total Employees: 25" : "Your Tasks: 5"}</div>
            <div className="dashboard-card">📅 Upcoming Events</div>
            <div className="dashboard-card">📊 Performance Overview</div>
          </div>
        </div>
      </div>
    </>
  );
}
