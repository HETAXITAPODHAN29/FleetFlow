import {
  FaTimes,
  FaTruck,
  FaUser,
  FaMapMarkerAlt,
  FaGasPump,
  FaTools,
} from "react-icons/fa";

export default function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 relative"
      >

        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-500 hover:text-white transition"
        >
          <FaTimes />
        </button>

        {/* Header */}

        <div className="mb-8">

          <p className="text-blue-600 font-medium">
            Vehicle Details
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-1">
            {vehicle.model}
          </h2>

          <p className="text-slate-500 mt-1">
            {vehicle.number}
          </p>

        </div>

        {/* Details */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="bg-slate-50 rounded-2xl p-5 flex items-center gap-4">
            <FaTruck className="text-blue-600 text-xl" />

            <div>
              <p className="text-sm text-slate-500">
                Vehicle Number
              </p>

              <p className="font-semibold text-slate-800">
                {vehicle.number}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 flex items-center gap-4">
            <FaUser className="text-green-600 text-xl" />

            <div>
              <p className="text-sm text-slate-500">
                Driver
              </p>

              <p className="font-semibold text-slate-800">
                {vehicle.driver}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-xl" />

            <div>
              <p className="text-sm text-slate-500">
                Location
              </p>

              <p className="font-semibold text-slate-800">
                {vehicle.location}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 flex items-center gap-4">
            <FaGasPump className="text-orange-500 text-xl" />

            <div>
              <p className="text-sm text-slate-500">
                Fuel Level
              </p>

              <p className="font-semibold text-slate-800">
                {vehicle.fuel}%
              </p>
            </div>
          </div>

        </div>

        {/* Status */}

        <div className="mt-6">

          <p className="text-sm text-slate-500 mb-2">
            Current Status
          </p>

          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${
              vehicle.status === "Active"
                ? "bg-green-100 text-green-700"
                : vehicle.status === "Maintenance"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current"></span>
            {vehicle.status}
          </span>

        </div>

        {/* Fuel Progress */}

        <div className="mt-7">

          <div className="flex justify-between mb-2">

            <p className="font-semibold text-slate-700">
              Fuel Level
            </p>

            <p className="text-slate-500">
              {vehicle.fuel}%
            </p>

          </div>

          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700"
              style={{ width: `${vehicle.fuel}%` }}
            />

          </div>

        </div>

        {/* Close */}

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}