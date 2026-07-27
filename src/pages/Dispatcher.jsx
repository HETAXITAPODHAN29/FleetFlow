import Navbar from '../components/Navbar';

export default function Dispatcher() {
  return (
    <div>
      <Navbar title="Dispatcher" />
      <div className="card">
        <h3>Live dispatch board</h3>
        <p>Assign vehicles, monitor delays, and coordinate with drivers in one place.</p>
      </div>
    </div>
  );
}
