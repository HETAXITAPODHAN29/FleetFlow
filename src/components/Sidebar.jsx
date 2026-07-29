import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "🏠 Dashboard" },
  { to: "/vehicles", label: "🚚 Vehicles" },
  { to: "/drivers", label: "👨 Drivers" },
  { to: "/dispatcher", label: "📍 Dispatcher" },
  { to: "/maintenance", label: "🔧 Maintenance" },
  { to: "/expenses", label: "💰 Expenses" },
  { to: "/analytics", label: "📊 Analytics" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-blue-400">
          🚚 FleetFlow
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Fleet Management System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 px-4">

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 mb-2 transition-all duration-300 font-medium ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}

      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-700 p-4">

        <button className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl py-3 transition">
          🌙 Dark Mode
        </button>

        <div className="mt-6 flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=Fleet+Manager&background=2563EB&color=fff"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <p className="font-semibold">Fleet Manager</p>
            <p className="text-sm text-slate-400">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </aside>
  );
}