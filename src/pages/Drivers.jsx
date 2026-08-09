import {
  FaUsers,
  FaUserCheck,
  FaRoute,
  FaUserClock,
  FaSearch,
  FaEye,
  FaEdit,
} from "react-icons/fa";

import { useState } from "react";
import drivers from "../data/drivers";
import DriverDetailsModal from "../components/DriverDetailsModal";
import EditDriverModal from "../components/EditDriverModal";
import DriverViewModal from "../components/DriverViewModal";


export default function Drivers() {
  // -------------------- State --------------------

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [editingDriver, setEditingDriver] = useState(null);
  

  // -------------------- Statistics --------------------

  const totalDrivers = drivers.length;

  const availableDrivers = drivers.filter(
    (driver) => driver.status === "Available"
  ).length;

  const onTripDrivers = drivers.filter(
    (driver) => driver.status === "On Trip"
  ).length;

  const offDutyDrivers = drivers.filter(
    (driver) => driver.status === "Off Duty"
  ).length;

  const stats = [
    {
      title: "Total Drivers",
      value: totalDrivers,
      icon: <FaUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Available",
      value: availableDrivers,
      icon: <FaUserCheck />,
      color: "bg-green-500",
    },
    {
      title: "On Trip",
      value: onTripDrivers,
      icon: <FaRoute />,
      color: "bg-orange-500",
    },
    {
      title: "Off Duty",
      value: offDutyDrivers,
      icon: <FaUserClock />,
      color: "bg-red-500",
    },
  ];

  // -------------------- Filter Logic --------------------

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.vehicle.toLowerCase().includes(search.toLowerCase()) ||
      driver.phone.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      driver.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // -------------------- UI --------------------

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Drivers
        </h1>

        <p className="text-slate-500 mt-2">
          Manage drivers, assignments and performance.
        </p>

      </div>


      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm
            hover:shadow-xl hover:-translate-y-1
            transition-all duration-300"
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-2">
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

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 mt-8 mb-8">

        <div className="flex flex-col lg:flex-row gap-5 justify-between">

          {/* Search */}

          <div className="relative flex-1">

            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search driver, vehicle or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200
              focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>


          {/* Status Filters */}

          <div className="flex flex-wrap gap-3">

            {["All", "Available", "On Trip", "Off Duty"].map(
              (status) => (

                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-5 py-3 rounded-2xl font-medium
                  transition-all duration-300 ${
                    statusFilter === status
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-white border border-slate-300 text-slate-600 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {status}
                </button>

              )
            )}

          </div>

        </div>

      </div>


      {/* Result Count */}

      <div className="mb-5">

        <p className="text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {filteredDrivers.length}
          </span>{" "}
          driver(s)
        </p>

      </div>


      {/* Temporary Driver List */}

        {filteredDrivers.length > 0 ? (

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">

            {filteredDrivers.map((driver) => (

              <div
                key={driver.id}
                className="flex items-center justify-between
                py-5 border-b last:border-b-0
                hover:bg-slate-50 transition rounded-xl px-3"
              >

                {/* Driver Info */}

                <div className="flex items-center gap-4">

                  <div
                    className="w-12 h-12 rounded-xl bg-blue-100
                    text-blue-600 flex items-center justify-center text-xl"
                  >
                    <FaUsers />
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      {driver.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {driver.vehicle}
                    </p>

                  </div>

                </div>


                {/* Right Side */}

                <div className="flex items-center gap-4">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      driver.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : driver.status === "On Trip"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {driver.status}
                  </span>

                  {/* View Button */}

                  <button
                    onClick={() => setSelectedDriver(driver)}
                    className="w-10 h-10 rounded-xl bg-slate-100
                    hover:bg-blue-500 hover:text-white
                    flex items-center justify-center transition"
                    title="View Details"
                  >
                    <FaEye />
                  </button>
                  
                  {/* Edit Button */}
              <button
                onClick={() => setEditingDriver(driver)}
                className="w-10 h-10 rounded-xl bg-slate-100
                hover:bg-yellow-500 hover:text-white
                flex items-center justify-center transition"
                title="Edit Driver"
              >
                <FaEdit />
              </button>
                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-3xl border border-slate-200
            shadow-sm py-20 flex flex-col items-center justify-center">

            <div className="text-6xl mb-4">
              👤
            </div>

            <h2 className="text-2xl font-bold text-slate-700">
              No Drivers Found
            </h2>

            <p className="text-slate-500 mt-2">
              Try changing your search or filter criteria.
            </p>

          </div>

        )}

        <DriverDetailsModal
          driver={selectedDriver}
          onClose={() => setSelectedDriver(null)}
        />

        <EditDriverModal
          driver={editingDriver}
          onClose={() => setEditingDriver(null)}
          onSave={(updatedDriver) => {
            console.log("Updated Driver:", updatedDriver);
            setEditingDriver(null);
          }}
        />
    </div>
  );
}