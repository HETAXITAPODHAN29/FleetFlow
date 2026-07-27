import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-card">
      <h2 style={{ marginTop: 0 }}>Sign in to FleetFlow</h2>
      <p style={{ color: '#94a3b8' }}>Manage fleet operations with clarity.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" defaultValue="ops@fleetflow.com" />
        <input type="password" placeholder="Password" defaultValue="demo123" />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
