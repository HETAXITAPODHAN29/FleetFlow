import Navbar from '../components/Navbar';

const drivers = [
  { name: 'Mina K.', route: 'Route 12', hours: '8.5h', status: 'Available' },
  { name: 'Ari S.', route: 'Route 03', hours: '6.2h', status: 'On shift' },
  { name: 'Noah P.', route: 'Route 19', hours: '4.8h', status: 'Break' }
];

export default function Drivers() {
  return (
    <div>
      <Navbar title="Drivers" />
      <table className="table">
        <thead>
          <tr><th>Name</th><th>Route</th><th>Hours</th><th>Status</th></tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.name}><td>{driver.name}</td><td>{driver.route}</td><td>{driver.hours}</td><td>{driver.status}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
