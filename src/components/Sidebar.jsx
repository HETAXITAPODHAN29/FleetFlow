import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/drivers', label: 'Drivers' },
  { to: '/dispatcher', label: 'Dispatcher' },
  { to: '/maintenance', label: 'Maintenance' },
  { to: '/expenses', label: 'Expenses' },
  { to: '/analytics', label: 'Analytics' }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>FleetFlow</h2>
      <p>Operations dashboard</p>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} className="nav-link">
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}
