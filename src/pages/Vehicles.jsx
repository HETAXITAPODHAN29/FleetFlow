import { FaPlus, FaSearch, FaFilter } from "react-icons/fa";
import vehicles from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import { useState } from "react";

export default function Vehicles() {
  const [search, setSearch] = useState("");
  const filteredVehicles = vehicles.filter((vehicle) =>
  vehicle.model.toLowerCase().includes(search.toLowerCase()) ||
  vehicle.driver.toLowerCase().includes(search.toLowerCase()) ||
  vehicle.number.toLowerCase().includes(search.toLowerCase())
);
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

      {/* Search + Filter */}

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 flex flex-col md:flex-row gap-4 mb-10">

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

        <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-100 transition">
          <FaFilter />
          Filter
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {filteredVehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}

      </div>

    </div>
  );
}