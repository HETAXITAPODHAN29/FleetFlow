import { useState } from "react";
import DispatchViewModal from "../components/DispatchViewModal";
import EditDispatchModal from "../components/EditDispatchModal";
import {
  FaRoute,
  FaCalendarAlt,
  FaTruck,
  FaCheckCircle,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

import dispatches from "../data/dispatches";

export default function Dispatcher() {
const [search, setSearch] = useState("");
const [selectedTrip, setSelectedTrip] = useState(null);
const [editingTrip, setEditingTrip] = useState(null);
const [deleteTrip, setDeleteTrip] = useState(null);

const [dispatchList, setDispatchList] = useState(dispatches);

  const handleDelete = () => {
  if (!deleteTrip) return;

  setDispatchList((currentTrips) =>
    currentTrips.filter((trip) => trip.id !== deleteTrip.id)
  );

  setDeleteTrip(null);
};

  // -------------------- Statistics --------------------

  const totalTrips = dispatchList.length;

  const scheduledTrips = dispatchList.filter(
    (trip) => trip.status === "Scheduled"
  ).length;

  const inTransitTrips = dispatchList.filter(
    (trip) => trip.status === "In Transit"
  ).length;

  const completedTrips = dispatchList.filter(
    (trip) => trip.status === "Completed"
  ).length;

  const stats = [
    {
      title: "Total Trips",
      value: totalTrips,
      icon: <FaRoute />,
      color: "bg-blue-500",
    },
    {
      title: "Scheduled",
      value: scheduledTrips,
      icon: <FaCalendarAlt />,
      color: "bg-yellow-500",
    },
    {
      title: "In Transit",
      value: inTransitTrips,
      icon: <FaTruck />,
      color: "bg-orange-500",
    },
    {
      title: "Completed",
      value: completedTrips,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
  ];

  // -------------------- Search --------------------

  const filteredDispatches = dispatchList.filter((trip) => {
    const searchText = search.toLowerCase();

    return (
      trip.tripId.toLowerCase().includes(searchText) ||
      trip.vehicle.toLowerCase().includes(searchText) ||
      trip.driver.toLowerCase().includes(searchText) ||
      trip.source.toLowerCase().includes(searchText) ||
      trip.destination.toLowerCase().includes(searchText)
    );
  });

  // -------------------- UI --------------------

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Dispatcher
          </h1>

          <p className="text-slate-500 mt-2">
            Manage trips, assignments and deliveries.
          </p>
        </div>

        <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition-all hover:scale-105">

          <FaPlus />

          Create Dispatch

        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

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

      {/* Search */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 mb-8">

        <div className="relative">

          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search trip, vehicle, driver or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200
            focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

      </div>

      {/* Result Count */}

      <div className="text-slate-500 mb-4">

        Showing {filteredDispatches.length} trip(s)

      </div>

      {/* Dispatch List */}

      {filteredDispatches.length > 0 ? (

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

          {filteredDispatches.map((trip, index) => (

            <div
              key={trip.id}
              className={`p-6 hover:bg-slate-50 transition-all duration-300 ${
                index !== filteredDispatches.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >

              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">

                {/* Trip Information */}

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-2">

                    <h2 className="text-lg font-bold text-slate-800">
                      {trip.tripId}
                    </h2>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        trip.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-700"
                          : trip.status === "In Transit"
                          ? "bg-orange-100 text-orange-700"
                          : trip.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trip.status}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        trip.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : trip.priority === "Low"
                          ? "bg-slate-100 text-slate-600"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {trip.priority}
                    </span>

                  </div>

                  <p className="text-slate-600 font-medium">
                    {trip.source} → {trip.destination}
                  </p>

                  <div className="flex flex-wrap gap-x-8 gap-y-2 mt-3 text-sm text-slate-500">

                    <span>
                      🚚 {trip.vehicle}
                    </span>

                    <span>
                      👤 {trip.driver}
                    </span>

                    <span>
                      📅 {trip.date}
                    </span>

                    <span>
                      🕐 {trip.departureTime}
                    </span>

                  </div>

                </div>

                {/* Action Buttons */}

                <div className="flex gap-3">

                <button
                    onClick={() => setSelectedTrip(trip)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-blue-500 hover:text-white
                    transition-all duration-300"
                    title="View"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() => setEditingTrip(trip)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-yellow-500 hover:text-white
                    transition-all duration-300"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => setDeleteTrip(trip)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-red-500 hover:text-white
                    transition-all duration-300"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        /* Empty State */

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm py-20 flex flex-col items-center justify-center">

          <div className="text-7xl mb-4">
            🚚
          </div>

          <h2 className="text-3xl font-bold text-slate-700">
            No Trips Found
          </h2>

          <p className="text-slate-500 mt-3">
            Try changing your search criteria.
          </p>

        </div>

      )}
      
      <DispatchViewModal
        trip={selectedTrip}
        onClose={() => setSelectedTrip(null)}
      />
      

    {deleteTrip && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

      <div className="text-center">

        <div className="w-16 h-16 mx-auto rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl mb-5">
          <FaTrash />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          Delete Dispatch?
        </h2>

        <p className="text-slate-500 mt-3">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-slate-700">
            {deleteTrip.tripId}
          </span>
          ?
        </p>

        <p className="text-sm text-slate-400 mt-2">
          This action cannot be undone.
        </p>

      </div>

      <div className="flex justify-end gap-3 mt-8">

        <button
          onClick={() => setDeleteTrip(null)}
          className="px-6 py-3 rounded-xl border border-slate-300
          text-slate-600 hover:bg-slate-100 transition"
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="px-6 py-3 rounded-xl bg-red-600
          hover:bg-red-700 text-white font-medium
          transition hover:scale-105"
        >
          Delete
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}