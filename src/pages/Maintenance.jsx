import Navbar from '../components/Navbar';

const maintenance = [
  { vehicle: 'FV-214', task: 'Brake inspection', priority: 'High', eta: 'Today' },
  { vehicle: 'FV-318', task: 'Tire replacement', priority: 'Medium', eta: 'Tomorrow' },
  { vehicle: 'FV-102', task: 'Software update', priority: 'Low', eta: 'Next week' }
];

export default function Maintenance() {
  return (
    <div>
      <Navbar title="Maintenance" />
      <table className="table">
        <thead>
          <tr><th>Vehicle</th><th>Task</th><th>Priority</th><th>ETA</th></tr>
        </thead>
        <tbody>
          {maintenance.map((item) => (
            <tr key={item.vehicle}><td>{item.vehicle}</td><td>{item.task}</td><td>{item.priority}</td><td>{item.eta}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
