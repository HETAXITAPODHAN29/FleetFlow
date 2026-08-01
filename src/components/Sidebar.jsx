import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaTruck,
  FaUsers,
  FaClipboardList,
  FaTools,
  FaMoneyBillWave,
  FaChartBar,
  FaBars,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: FaHome },
  { to: "/vehicles", label: "Vehicles", icon: FaTruck },
  { to: "/drivers", label: "Drivers", icon: FaUsers },
  { to: "/dispatcher", label: "Dispatcher", icon: FaClipboardList },
  { to: "/maintenance", label: "Maintenance", icon: FaTools },
  { to: "/expenses", label: "Expenses", icon: FaMoneyBillWave },
  { to: "/analytics", label: "Analytics", icon: FaChartBar },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const user = {
    name: "Hetaxi",
    role: "Fleet Manager",
  };

  return (
    <aside
      className={`${
        collapsed ? "w-24" : "w-72"
      } min-h-screen bg-slate-900 text-white flex flex-col transition-all duration-300 shadow-2xl`}
    >
      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-slate-700">

        {!collapsed && (
          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              FleetFlow
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              Fleet Management
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-xl hover:text-blue-400 transition"
        >
          <FaBars />
        </button>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-3 py-5">

        {links.map((link) => {

          const Icon = link.icon;

          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "gap-4"
                } px-4 py-3 rounded-xl mb-3 transition-all duration-300
                ${
                  isActive
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />

              {!collapsed && (
                <span className="font-medium">
                  {link.label}
                </span>
              )}
            </NavLink>
          );

        })}
      </nav>

      {/* User */}

      <div className="border-t border-slate-700 p-4">

        {!collapsed ? (
          <>
            <div className="flex items-center gap-3">

              <FaUserCircle
                size={42}
                className="text-blue-400"
              />

              <div>

                <h3 className="font-semibold">
                  {user.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {user.role}
                </p>

              </div>

            </div>

            <button className="mt-5 w-full bg-red-500 hover:bg-red-600 rounded-xl py-3 transition font-medium flex items-center justify-center gap-2">

              <FaSignOutAlt />

              Logout

            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-5">

            <FaUserCircle
              size={36}
              className="text-blue-400"
            />

            <FaSignOutAlt
              size={22}
              className="cursor-pointer hover:text-red-400"
            />

          </div>
        )}

      </div>
    </aside>
  );
}