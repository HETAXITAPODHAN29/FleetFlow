import Navbar from '../components/Navbar';

const vehicles = [
  { id: 'FV-102', driver: 'Mina K.', status: 'In transit', location: 'North Hub' },
  { id: 'FV-214', driver: 'Ari S.', status: 'Maintenance', location: 'Garage A' },
  { id: 'FV-318', driver: 'Noah P.', status: 'Idle', location: 'South Yard' }
];

export default function Vehicles() {
  return (
    <div>
      <Navbar title="Vehicles" />
      <table className="table">
        <thead>
          <tr><th>Vehicle</th><th>Driver</th><th>Status</th><th>Location</th></tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}><td>{vehicle.id}</td><td>{vehicle.driver}</td><td>{vehicle.status}</td><td>{vehicle.location}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
