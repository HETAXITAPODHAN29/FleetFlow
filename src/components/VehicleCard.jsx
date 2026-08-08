import {
  FaMapMarkerAlt,
  FaUser,
  FaGasPump,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

export default function VehicleCard({
  vehicle,
  onView,
  onEdit,
  onDelete,
}) {
  const statusColor = {
    Active: "bg-green-100 text-green-700",
    Maintenance: "bg-yellow-100 text-yellow-700",
    Inactive: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Vehicle Image */}

      <div className="h-44 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">

        <div className="text-7xl">
          🚚
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Title */}

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              {vehicle.model}
            </h2>

            <p className="text-slate-500">
              {vehicle.number}
            </p>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              statusColor[vehicle.status]
            }`}
          >
            {vehicle.status}
          </span>

        </div>

        {/* Vehicle Information */}

        <div className="space-y-3 mt-5 text-slate-600">

          <div className="flex items-center gap-2">
            <FaUser />
            {vehicle.driver}
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            {vehicle.location}
          </div>

        </div>

        {/* Fuel */}

        <div className="mt-6">

          <div className="flex justify-between text-sm mb-2">

            <span className="flex items-center gap-2">
              <FaGasPump />
              Fuel
            </span>

            <span>
              {vehicle.fuel}%
            </span>

          </div>

          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">

            <div
              style={{ width: `${vehicle.fuel}%` }}
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-8">

          {/* View */}

          <button
            onClick={onView}
            className="p-3 rounded-xl bg-slate-100 hover:bg-blue-500 hover:text-white transition"
            title="View Details"
          >
            <FaEye />
          </button>

          {/* Edit */}

        <button
          onClick={() => onEdit(vehicle)}
          className="p-3 rounded-xl bg-slate-100 hover:bg-yellow-500 hover:text-white transition"
        >
          <FaEdit />
        </button>
        
          {/* Delete */}

          <button
            onClick={() => onDelete(vehicle)}
            className="p-3 rounded-xl bg-slate-100 hover:bg-red-500 hover:text-white transition"
            title="Delete Vehicle"
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>
  );
}