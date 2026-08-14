import { useState } from "react";
import {
  FaTools,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const maintenanceData = [
  {
    id: 1,
    maintenanceId: "MNT-001",
    vehicle: "Tata 407",
    vehicleId: "FV-214",
    task: "Brake Inspection",
    description: "Complete brake system inspection and testing.",
    priority: "High",
    status: "Scheduled",
    date: "2026-08-12",
    cost: 2500,
    technician: "Rajesh Patel",
  },
  {
    id: 2,
    maintenanceId: "MNT-002",
    vehicle: "Ashok Leyland",
    vehicleId: "FV-318",
    task: "Tire Replacement",
    description: "Replace worn-out front tires.",
    priority: "Medium",
    status: "In Progress",
    date: "2026-08-13",
    cost: 8500,
    technician: "Amit Shah",
  },
  {
    id: 3,
    maintenanceId: "MNT-003",
    vehicle: "Mahindra Bolero",
    vehicleId: "FV-102",
    task: "Software Update",
    description: "Update vehicle tracking and diagnostic software.",
    priority: "Low",
    status: "Completed",
    date: "2026-08-10",
    cost: 1500,
    technician: "Karan Mehta",
  },
  {
    id: 4,
    maintenanceId: "MNT-004",
    vehicle: "Tata Ace",
    vehicleId: "FV-125",
    task: "Engine Service",
    description: "Routine engine inspection and oil replacement.",
    priority: "Medium",
    status: "Scheduled",
    date: "2026-08-15",
    cost: 4200,
    technician: "Rajesh Patel",
  },
  {
    id: 5,
    maintenanceId: "MNT-005",
    vehicle: "Eicher Pro",
    vehicleId: "FV-201",
    task: "Oil Change",
    description: "Engine oil and oil filter replacement.",
    priority: "Low",
    status: "Completed",
    date: "2026-08-08",
    cost: 3200,
    technician: "Amit Shah",
  },
  {
    id: 6,
    maintenanceId: "MNT-006",
    vehicle: "BharatBenz",
    vehicleId: "FV-330",
    task: "Battery Inspection",
    description: "Check battery health and electrical connections.",
    priority: "High",
    status: "In Progress",
    date: "2026-08-14",
    cost: 1800,
    technician: "Karan Mehta",
  },
];

export default function Maintenance() {
  const [maintenanceList, setMaintenanceList] = useState(maintenanceData);
  const [search, setSearch] = useState("");

  // -------------------- Statistics --------------------

  const totalRecords = maintenanceList.length;

  const scheduledRecords = maintenanceList.filter(
    (item) => item.status === "Scheduled"
  ).length;

  const inProgressRecords = maintenanceList.filter(
    (item) => item.status === "In Progress"
  ).length;

  const completedRecords = maintenanceList.filter(
    (item) => item.status === "Completed"
  ).length;

  const stats = [
    {
      title: "Total Records",
      value: totalRecords,
      icon: <FaTools />,
      color: "bg-blue-500",
    },
    {
      title: "Scheduled",
      value: scheduledRecords,
      icon: <FaCalendarAlt />,
      color: "bg-yellow-500",
    },
    {
      title: "In Progress",
      value: inProgressRecords,
      icon: <FaClock />,
      color: "bg-orange-500",
    },
    {
      title: "Completed",
      value: completedRecords,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
  ];

  // -------------------- Search --------------------

  const filteredMaintenance = maintenanceList.filter((item) => {
    const searchText = search.toLowerCase();

    return (
      item.maintenanceId.toLowerCase().includes(searchText) ||
      item.vehicle.toLowerCase().includes(searchText) ||
      item.vehicleId.toLowerCase().includes(searchText) ||
      item.task.toLowerCase().includes(searchText) ||
      item.priority.toLowerCase().includes(searchText) ||
      item.status.toLowerCase().includes(searchText) ||
      item.technician.toLowerCase().includes(searchText)
    );
  });

  // -------------------- Delete --------------------

  const handleDelete = (item) => {
    setMaintenanceList((currentItems) =>
      currentItems.filter((maintenance) => maintenance.id !== item.id)
    );
  };

  // -------------------- UI --------------------

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Maintenance
          </h1>

          <p className="text-slate-500 mt-2">
            Track vehicle maintenance, service records and repairs.
          </p>
        </div>

        <button
          className="flex items-center gap-3 bg-blue-600
          hover:bg-blue-700 text-white px-6 py-3 rounded-2xl
          shadow-lg transition-all hover:scale-105"
        >
          <FaPlus />
          Create Maintenance
        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-3xl p-6 border border-slate-200
            shadow-sm hover:shadow-xl hover:-translate-y-1
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

      <div className="bg-white rounded-3xl border border-slate-200
      shadow-sm p-5 mb-8">

        <div className="relative">

          <FaSearch
            className="absolute left-4 top-1/2
            -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search vehicle, maintenance task, technician..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl
            border border-slate-200 focus:ring-2
            focus:ring-blue-500 outline-none"
          />

        </div>

      </div>

      {/* Result Count */}

      <div className="text-slate-500 mb-4">
        Showing {filteredMaintenance.length} maintenance record(s)
      </div>

      {/* Maintenance List */}

      {filteredMaintenance.length > 0 ? (

        <div className="bg-white rounded-3xl border border-slate-200
        shadow-sm overflow-hidden">

          {filteredMaintenance.map((item, index) => (

            <div
              key={item.id}
              className={`p-6 hover:bg-slate-50 transition-all duration-300 ${
                index !== filteredMaintenance.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >

              <div className="flex flex-col xl:flex-row
              xl:items-center justify-between gap-6">

                {/* Maintenance Information */}

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-2">

                    <h2 className="text-lg font-bold text-slate-800">
                      {item.maintenanceId}
                    </h2>

                    {/* Status */}

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-700"
                          : item.status === "In Progress"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.status}
                    </span>

                    {/* Priority */}

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : item.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.priority}
                    </span>

                  </div>

                  <p className="text-slate-700 font-semibold">
                    {item.task}
                  </p>

                  <div className="flex flex-wrap gap-x-8 gap-y-2
                  mt-3 text-sm text-slate-500">

                    <span>
                      🚚 {item.vehicle}
                    </span>

                    <span>
                      🆔 {item.vehicleId}
                    </span>

                    <span>
                      👤 {item.technician}
                    </span>

                    <span>
                      📅 {item.date}
                    </span>

                    <span>
                      💰 ₹{item.cost.toLocaleString("en-IN")}
                    </span>

                  </div>

                </div>

                {/* Action Buttons */}

                <div className="flex gap-3">

                  <button
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-blue-500 hover:text-white
                    transition-all duration-300"
                    title="View"
                  >
                    <FaEye />
                  </button>

                  <button
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-yellow-500 hover:text-white
                    transition-all duration-300"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(item)}
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

        <div className="bg-white rounded-3xl border border-slate-200
        shadow-sm py-20 flex flex-col items-center justify-center">

          <div className="text-7xl mb-4">
            🛠️
          </div>

          <h2 className="text-3xl font-bold text-slate-700">
            No Maintenance Records Found
          </h2>

          <p className="text-slate-500 mt-3">
            Try changing your search criteria.
          </p>

        </div>

      )}

    </div>
  );
}