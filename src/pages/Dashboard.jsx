import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import {
  FaTruck,
  FaUsers,
  FaRoute,
  FaTools,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Hero from "../components/Hero";
import AddVehicleModal from "../components/AddVehicleModal";
import AddDriverModal from "../components/AddDriverModal";

export default function Dashboard() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  // =============================
  // MODALS
  // =============================

  const [showAddVehicleModal, setShowAddVehicleModal] =
    useState(false);

  const [showAddDriverModal, setShowAddDriverModal] =
    useState(false);

  // =============================
  // DASHBOARD DATA
  // =============================

  const [vehicleCount, setVehicleCount] = useState(0);
  const [driverCount, setDriverCount] = useState(0);
  const [tripsToday, setTripsToday] = useState(0);
  const [maintenanceCount, setMaintenanceCount] = useState(0);
  const [completedTrips, setCompletedTrips] = useState(0);
  const [totalTrips, setTotalTrips] = useState(0);

  // =============================
  // FETCH DASHBOARD DATA
  // =============================

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [
          vehiclesResponse,
          driversResponse,
          dispatchesResponse,
          maintenanceResponse,
        ] = await Promise.all([
          fetch("http://localhost:5000/api/vehicles"),
          fetch("http://localhost:5000/api/drivers"),
          fetch("http://localhost:5000/api/dispatches"),
          fetch("http://localhost:5000/api/maintenance"),
        ]);

        const vehicles = await vehiclesResponse.json();
        const drivers = await driversResponse.json();
        const dispatches = await dispatchesResponse.json();
        const maintenance = await maintenanceResponse.json();

        // Active vehicles
        const activeVehicles = vehicles.filter(
          (vehicle) => vehicle.status === "Active"
        );

        setVehicleCount(activeVehicles.length);

        // Total drivers
        setDriverCount(drivers.length);

        // Today's date
        const today = new Date()
          .toISOString()
          .split("T")[0];

        // Today's trips
        const todayTrips = dispatches.filter(
          (trip) => trip.date === today
        );

        setTripsToday(todayTrips.length);

        // Completed trips
        const completedTripsCount = dispatches.filter(
          (trip) => trip.status === "Completed"
        ).length;

        setCompletedTrips(completedTripsCount);

        // Total trips
        setTotalTrips(dispatches.length);

        // Pending maintenance
        const pendingMaintenance = maintenance.filter(
          (item) => item.status !== "Completed"
        );

        setMaintenanceCount(pendingMaintenance.length);
      } catch (error) {
        console.error(
          "Error fetching dashboard data:",
          error
        );
      }
    };

    fetchDashboardData();
  }, []);

  // =============================
  // ADD VEHICLE
  // =============================

  const handleAddVehicle = () => {
    setShowAddVehicleModal(true);
  };

  const handleVehicleCreated = (newVehicle) => {
    if (newVehicle.status === "Active") {
      setVehicleCount((currentCount) => currentCount + 1);
    }

    setShowAddVehicleModal(false);
  };

  // =============================
  // ADD DRIVER
  // =============================

  const handleAddDriver = () => {
    setShowAddDriverModal(true);
  };

  const handleDriverCreated = (newDriver) => {
    setDriverCount((currentCount) => currentCount + 1);

    setShowAddDriverModal(false);
  };

  // =============================
  // HERO BUTTON
  // =============================

  const handleViewReports = () => {
    navigate("/dispatcher");
  };

  // =============================
  // QUICK ACTIONS
  // =============================

  const quickActions = [
    {
      title: "Add Vehicle",
      description: "Register a new vehicle",
      icon: <FaTruck />,
      color: "blue",
      action: handleAddVehicle,
    },
    {
      title: "Add Driver",
      description: "Register a new driver",
      icon: <FaUsers />,
      color: "green",
      action: handleAddDriver,
    },
    {
      title: "Create Trip",
      description: "Schedule a new dispatch",
      icon: <FaRoute />,
      color: "orange",
      action: () => navigate("/dispatcher"),
    },
    {
      title: "Maintenance",
      description: "Manage maintenance",
      icon: <FaTools />,
      color: "purple",
      action: () => navigate("/maintenance"),
    },
  ];

  // =============================
  // STAT CARDS
  // =============================

  const stats = [
    {
      title: "Active Vehicles",
      value: vehicleCount,
      change: "Live",
      icon: <FaTruck />,
      color: "blue",
    },
    {
      title: "Drivers",
      value: driverCount,
      change: "Live",
      icon: <FaUsers />,
      color: "green",
    },
    {
      title: "Trips Today",
      value: tripsToday,
      change: "Live",
      icon: <FaRoute />,
      color: "orange",
    },
    {
      title: "Maintenance",
      value: maintenanceCount,
      change: "Pending",
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
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar title="Dashboard" />

      {/* =========================
          HERO
      ========================= */}

      <Hero
        onAddVehicle={handleAddVehicle}
        onViewReports={handleViewReports}
        vehicleCount={vehicleCount}
        driverCount={driverCount}
        completedTrips={completedTrips}
        totalTrips={totalTrips}
      />

      {/* =========================
          STAT CARDS
      ========================= */}

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

      {/* =========================
          QUICK ACTIONS
      ========================= */}

      <div className="mt-10">

        <div className="mb-5">
          <h2
            className={`text-2xl font-bold ${
              darkMode
                ? "text-white"
                : "text-slate-800"
            }`}
          >
            Quick Actions
          </h2>

          <p
            className={`mt-1 ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Manage your fleet quickly from here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {quickActions.map((action) => {

            const colors = {
              blue: {
                bg: "bg-blue-600",
                hover: "hover:bg-blue-700",
              },
              green: {
                bg: "bg-emerald-600",
                hover: "hover:bg-emerald-700",
              },
              orange: {
                bg: "bg-orange-500",
                hover: "hover:bg-orange-600",
              },
              purple: {
                bg: "bg-purple-600",
                hover: "hover:bg-purple-700",
              },
            };

            return (
              <button
                key={action.title}
                onClick={action.action}
                className={`group ${colors[action.color].bg}
                ${colors[action.color].hover}
                text-white rounded-2xl p-6 text-left
                shadow-lg hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-1`}
              >

                <div className="flex items-start justify-between">

                  <div
                    className="w-12 h-12 rounded-xl
                    bg-white/20 flex items-center
                    justify-center text-xl"
                  >
                    {action.icon}
                  </div>

                  <FaArrowRight
                    className="opacity-60
                    group-hover:opacity-100
                    group-hover:translate-x-1
                    transition"
                  />

                </div>

                <h3 className="text-lg font-bold mt-6">
                  {action.title}
                </h3>

                <p className="text-sm text-white/75 mt-1">
                  {action.description}
                </p>

              </button>
            );
          })}

        </div>
      </div>

      {/* =========================
          ADD VEHICLE MODAL
      ========================= */}

      {showAddVehicleModal && (
        <AddVehicleModal
          onClose={() =>
            setShowAddVehicleModal(false)
          }
          onAdd={handleVehicleCreated}
        />
      )}

      {/* =========================
          ADD DRIVER MODAL
      ========================= */}

      {showAddDriverModal && (
        <AddDriverModal
          onClose={() =>
            setShowAddDriverModal(false)
          }
          onAdd={handleDriverCreated}
        />
      )}

    </div>
  );
}