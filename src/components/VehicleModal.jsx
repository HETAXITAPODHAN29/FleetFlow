import { FaTimes, FaTruck, FaUser, FaMapMarkerAlt, FaGasPump } from "react-icons/fa";

export default function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-[90%] max-w-2xl p-8 relative animate-[fadeIn_.3s]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-slate-500 hover:text-red-500"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          {vehicle.model}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="flex items-center gap-3">
            <FaTruck className="text-blue-600" />
            <span>{vehicle.number}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaUser className="text-green-600" />
            <span>{vehicle.driver}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            <span>{vehicle.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaGasPump className="text-orange-500" />
            <span>{vehicle.fuel}% Fuel</span>
          </div>

        </div>

        <div className="mt-8">

          <span
            className={`px-4 py-2 rounded-full text-white ${
              vehicle.status === "Active"
                ? "bg-green-500"
                : vehicle.status === "Maintenance"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {vehicle.status}
          </span>

        </div>
      </div>
    </div>
  );
}