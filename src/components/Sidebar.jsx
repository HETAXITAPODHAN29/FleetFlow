import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTruck,
  FaUsers,
  FaClipboardList,
  FaTools,
  FaMoneyBillWave,
  FaChartBar,
} from "react-icons/fa";

const links = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: FaHome,
  },
  {
    to: "/vehicles",
    label: "Vehicles",
    icon: FaTruck,
  },
  {
    to: "/drivers",
    label: "Drivers",
    icon: FaUsers,
  },
  {
    to: "/dispatcher",
    label: "Dispatcher",
    icon: FaClipboardList,
  },
  {
    to: "/maintenance",
    label: "Maintenance",
    icon: FaTools,
  },
  {
    to: "/expenses",
    label: "Expenses",
    icon: FaMoneyBillWave,
  },
  {
    to: "/analytics",
    label: "Analytics",
    icon: FaChartBar,
  },
];

export default function Sidebar() {
   return (
  <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-2xl">

    {/* Logo */}

    <div className="p-6 border-b border-slate-700">

      <h1 className="text-3xl font-bold text-blue-400">
        FleetFlow
      </h1>

      <p className="text-sm text-slate-400 mt-2">
        Fleet Management System
      </p>

    </div>

    {/* Navigation */}

    <nav className="flex-1 p-4">

      {links.map((link) => {

        const Icon = link.icon;

        return (

          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-300
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >

            <Icon size={20} />

            <span>{link.label}</span>

          </NavLink>

        );

      })}

    </nav>

  </aside>

  );
}