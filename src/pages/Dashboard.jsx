import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import AddVehicleModal from "../components/AddVehicleModal";

import {
  FaTruck,
  FaUsers,
  FaRoute,
  FaTools,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import FleetChart from "../charts/FleetChart";
import ActivityTimeline from "../components/ActivityTimeline";
import QuickActions from "../components/QuickActions";
import Hero from "../components/Hero";
import AddVehicleModal from "../components/AddVehicleModal";

export default function Dashboard() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  // -----------------------------
  // ADD VEHICLE MODAL
  // -----------------------------
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);

  // -----------------------------
  // VEHICLE COUNT
  // -----------------------------
  const [vehicleCount, setVehicleCount] = useState(128);

  // -----------------------------
  // OPEN ADD VEHICLE
  // -----------------------------
  const handleAddVehicle = () => {
    setShowAddVehicleModal(true);
  };

  // -----------------------------
  // VEHICLE CREATED
  // -----------------------------
  const handleVehicleCreated = (newVehicle) => {
    console.log("New vehicle added:", newVehicle);

    setVehicleCount((currentCount) => currentCount + 1);

    setShowAddVehicleModal(false);
  };

  // -----------------------------
  // VIEW REPORTS
  // -----------------------------
  const handleViewReports = () => {
    navigate("/analytics");
  };

  const stats = [
    {
      title: "Active Vehicles",
      value: vehicleCount,
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
    <div
      className={`p-8 min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* Navbar */}
      <Navbar title="Dashboard" />

      {/* Hero Section */}
<Hero
  onAddVehicle={() => setShowAddVehicle(true)}
  onViewReports={() => alert("Reports feature coming soon!")}
/>

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

      {/* Charts + Activity */}
      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Fleet Chart */}
        <div
          className={`rounded-3xl shadow-lg p-8 ${
            darkMode ? "bg-slate-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-slate-700"
            }`}
          >
            Fleet Utilization
          </h2>

          <div className="h-80">
            <FleetChart />
          </div>
        </div>

        {/* Recent Activity */}
        <ActivityTimeline />
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <QuickActions />
      </div>

   {showAddVehicle && (
  <AddVehicleModal
    onClose={() => setShowAddVehicle(false)}
    onAdd={(vehicle) => {
      console.log("New Vehicle:", vehicle);
      setShowAddVehicle(false);
    }}
  />
)}
    </div>
  );
}