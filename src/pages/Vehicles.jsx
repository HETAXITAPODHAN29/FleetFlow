import { useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaTruck,
  FaCheckCircle,
  FaTools,
  FaTimesCircle,
} from "react-icons/fa";

import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";

export default function Vehicles() {
  // -------------------- State --------------------

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // -------------------- Statistics --------------------

  const totalVehicles = vehicles.length;

  const activeVehicles = vehicles.filter(
    (v) => v.status === "Active"
  ).length;

  const maintenanceVehicles = vehicles.filter(
    (v) => v.status === "Maintenance"
  ).length;

  const inactiveVehicles = vehicles.filter(
    (v) => v.status === "Inactive"
  ).length;

  const stats = [
    {
      title: "Total Vehicles",
      value: totalVehicles,
      icon: <FaTruck />,
      color: "bg-blue-500",
    },
    {
      title: "Active",
      value: activeVehicles,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
    {
      title: "Maintenance",
      value: maintenanceVehicles,
      icon: <FaTools />,
      color: "bg-yellow-500",
    },
    {
      title: "Inactive",
      value: inactiveVehicles,
      icon: <FaTimesCircle />,
      color: "bg-red-500",
    },
  ];

  // -------------------- Filter --------------------

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.model.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.number.toLowerCase().includes(search.toLowerCase());

  const sortedVehicles = [...filteredVehicles];

    if (sortBy === "name") {
      sortedVehicles.sort((a, b) => a.model.localeCompare(b.model));
    }

    if (sortBy === "fuel") {
      sortedVehicles.sort((a, b) => b.fuel - a.fuel);
    }

    if (sortBy === "location") {
      sortedVehicles.sort((a, b) => a.location.localeCompare(b.location));
    } 
    const matchesStatus =
      statusFilter === "All" || vehicle.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // -------------------- UI --------------------

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Vehicles
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your fleet efficiently.
          </p>
        </div>

        <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition-all hover:scale-105">
          <FaPlus />
          Add Vehicle
        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`${item.color} text-white p-4 rounded-2xl text-2xl`}
              >
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Search + Filter */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 flex flex-col lg:flex-row gap-5 justify-between mb-10">

        {/* Search */}

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search vehicle, driver or number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        {/* Status Filter */}

        <div className="flex flex-wrap gap-3">

          {["All", "Active", "Maintenance", "Inactive"].map((status) => (

            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
                statusFilter === status
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white border border-slate-300 text-slate-600 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {status}
            </button>

          ))}

        </div>

      </div>

      {/* Vehicle Cards */}

      {filteredVehicles.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredVehicles.map((vehicle) => (

            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
            />

          ))}

        </div>

      ) : (

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm py-20 flex flex-col items-center justify-center">

          <div className="text-7xl mb-4">
            🚚
          </div>

          <h2 className="text-3xl font-bold text-slate-700">
            No Vehicles Found
          </h2>

          <p className="text-slate-500 mt-3">
            Try changing your search or filter criteria.
          </p>

        </div>

      )}

    </div>
  );
}