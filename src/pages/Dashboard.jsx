import {
  FaTruck,
  FaUsers,
  FaRoute,
  FaTools,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const stats = [
    {
      title: "Active Vehicles",
      value: "128",
      change: "+8%",
      icon: <FaTruck />,
      color: "blue",
    },
    {
      title: "Drivers",
      value: "64",
      change: "+5%",
      icon: <FaUsers />,
      color: "green",
    },
    {
      title: "Trips Today",
      value: "39",
      change: "+12%",
      icon: <FaRoute />,
      color: "orange",
    },
    {
      title: "Maintenance",
      value: "6",
      change: "-2%",
      icon: <FaTools />,
      color: "purple",
    },
  ];

  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      <Navbar title="Dashboard" />

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 text-white mt-6 shadow-xl">

        <h1 className="text-4xl font-bold">
          Welcome back, Fleet Manager 👋
        </h1>

        <p className="mt-3 text-blue-100 text-lg">
          Monitor your fleet operations in real time.
        </p>

      </div>

      {/* Stat Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        {stats.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value}
            change={card.change}
            icon={card.icon}
            color={card.color}
          />
        ))}

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-xl font-bold text-slate-700">
            Fleet Utilization
          </h2>

          <div className="h-80 flex items-center justify-center text-slate-400">
            Chart will be added here 📈
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-xl font-bold text-slate-700">
            Recent Activities
          </h2>

          <div className="mt-6 space-y-5">

            <div className="border-l-4 border-blue-500 pl-4">
              Vehicle GJ01AB1234 dispatched
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              Driver Rahul completed Trip #241
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              Maintenance scheduled for Truck #18
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}