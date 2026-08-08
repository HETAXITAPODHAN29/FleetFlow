import {
  FaUsers,
  FaUserCheck,
  FaRoute,
  FaUserClock,
  FaSearch,
} from "react-icons/fa";

import { useState } from "react";
import drivers from "../data/drivers";

export default function Drivers() {
  // -------------------- State --------------------

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

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

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          {filteredDrivers.map((driver) => (

            <div
              key={driver.id}
              className="flex justify-between items-center py-4 border-b last:border-b-0"
            >

              <div>

                <h3 className="font-semibold text-slate-800">
                  {driver.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {driver.vehicle}
                </p>

              </div>

              <span className="text-sm font-medium text-slate-600">
                {driver.status}
              </span>

            </div>

          ))}

        </div>

      ) : (

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm py-20 text-center">

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

    </div>
  );
}