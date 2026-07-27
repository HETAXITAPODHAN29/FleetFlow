import Navbar from '../components/Navbar';

export default function Analytics() {
  return (
    <div>
      <Navbar title="Analytics" />
      <div className="card-grid">
        <div className="card">
          <h3>Utilization</h3>
          <div className="stats">81%</div>
          <small>Fleet utilization this quarter</small>
        </div>
        <div className="card">
          <h3>Idle time</h3>
          <div className="stats">14h</div>
          <small>Average idle window per vehicle</small>
        </div>
      </div>
    </div>
  );
}
