import {
  FaTimes,
  FaUser,
  FaTruck,
  FaPhone,
  FaIdCard,
  FaCircle,
} from "react-icons/fa";

export default function DriverViewModal({ driver, onClose }) {
  if (!driver) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8
        animate-[fadeIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
              <FaUser />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {driver.name}
              </h2>

              <p className="text-slate-500">
                Driver Details
              </p>
            </div>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100
            hover:bg-red-500 hover:text-white
            flex items-center justify-center transition-all"
          >
            <FaTimes />
          </button>

        </div>

        {/* Details */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Vehicle */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-slate-400 mb-2">
              <FaTruck />
              <span className="text-sm">Assigned Vehicle</span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.vehicle}
            </p>

          </div>

          {/* Phone */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-slate-400 mb-2">
              <FaPhone />
              <span className="text-sm">Phone</span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.phone}
            </p>

          </div>

          {/* Status */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-slate-400 mb-2">
              <FaCircle />
              <span className="text-sm">Status</span>
            </div>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                driver.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : driver.status === "On Trip"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {driver.status}
            </span>

          </div>

          {/* License */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-slate-400 mb-2">
              <FaIdCard />
              <span className="text-sm">License</span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.license || "Not available"}
            </p>

          </div>

        </div>

        {/* Close Button */}

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-100
            text-slate-700 font-medium
            hover:bg-slate-200 transition"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}