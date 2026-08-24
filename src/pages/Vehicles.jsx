import { useState } from "react";
import AddVehicleModal from "../components/AddVehicleModal";
import EditVehicleModal from "../components/EditVehicleModal";
import DeleteVehicleModal from "../components/DeleteVehicleModal";
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
import VehicleModal from "../components/VehicleModal";

export default function Vehicles() {
  // -------------------- State --------------------

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [showAddModal, setShowAddModal] = useState(false);
  const [vehicleList, setVehicleList] = useState(vehicles);
  const [selectedEditVehicle, setSelectedEditVehicle] = useState(null);
  const [selectedDeleteVehicle, setSelectedDeleteVehicle] = useState(null);
  // Vehicle selected for modal
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // -------------------- Statistics --------------------

  const totalVehicles = vehicleList.length;

  const activeVehicles = vehicleList.filter(
    (v) => v.status === "Active"
  ).length;

  const maintenanceVehicles = vehicleList.filter(
    (v) => v.status === "Maintenance"
  ).length;

  const inactiveVehicles = vehicleList.filter(
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

  const filteredVehicles = vehicleList.filter((vehicle) => {
    const matchesSearch =
      vehicle.model.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.number.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || vehicle.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // -------------------- Sort --------------------

  const sortedVehicles = [...filteredVehicles];

  switch (sortBy) {
    case "name":
      sortedVehicles.sort((a, b) =>
        a.model.localeCompare(b.model)
      );
      break;

    case "fuel":
      sortedVehicles.sort((a, b) => b.fuel - a.fuel);
      break;

    case "location":
      sortedVehicles.sort((a, b) =>
        a.location.localeCompare(b.location)
      );
      break;

    default:
      break;
  }

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

        <button
           onClick={() => setShowAddModal(true)}
           className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition-all hover:scale-105"
        >
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

      {/* Search + Filter + Sort */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 flex flex-col lg:flex-row gap-5 justify-between items-center mb-10">

        {/* Search */}

        <div className="relative flex-1 w-full">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search vehicle, driver or number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">

          {["All", "Active", "Maintenance", "Inactive"].map(
            (status) => (

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

            )
          )}

          {/* Sort */}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-5 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-blue-500 text-slate-600 font-medium"
          >
            <option value="default">Sort By</option>
            <option value="name">Vehicle Name</option>
            <option value="fuel">Fuel Level</option>
            <option value="location">Location</option>
          </select>

        </div>

      </div>

      {/* Vehicle Cards */}

      {sortedVehicles.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {sortedVehicles.map((vehicle) => (

            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onView={() => setSelectedVehicle(vehicle)}
              onEdit={() => setSelectedEditVehicle(vehicle)}
              onDelete={() => setSelectedDeleteVehicle(vehicle)}
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

      {/* Vehicle Modal */}

      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />

      {showAddModal && (
        <AddVehicleModal
          onClose={() => setShowAddModal(false)}
          onAdd={(newVehicle) => {
            setVehicleList((prev) => [...prev, newVehicle]);
            setShowAddModal(false);
          }}
        />
      )}

e
                  : vehicle
              )
            );

            setSelectedEditVehicle(null);
          }}
        />
      )}

      {selectedDeleteVehicle && (
        <DeleteVehicleModal
          vehicle={selectedDeleteVehicle}
          onClose={() => setSelectedDeleteVehicle(null)}
          onConfirm={() => {
            setVehicleList((prev) =>
              prev.filter(
                (vehicle) => vehicle.id !== selectedDeleteVehicle.id
              )
            );

            setSelectedDeleteVehicle(null);
          }}
        />
      )}
  
    </div>
  );
}