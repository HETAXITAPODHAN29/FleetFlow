import {
  FaTimes,
  FaTruck,
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaFlag,
  FaRoute,
} from "react-icons/fa";

export default function DispatchViewModal({ trip, onClose }) {
  if (!trip) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl
        p-8 max-h-[90vh] overflow-y-auto"
      >

        {/* Header */}

        <div className="flex justify-between items-start mb-8">

          <div>

            <div className="flex items-center gap-3">

              <FaRoute className="text-blue-600 text-2xl" />

              <h2 className="text-3xl font-bold text-slate-800">
                {trip.tripId}
              </h2>

            </div>

            <p className="text-slate-500 mt-2">
              Complete dispatch details
            </p>

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

        {/* Status */}

        <div className="flex flex-wrap gap-3 mb-8">

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
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
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              trip.priority === "High"
                ? "bg-red-100 text-red-700"
                : trip.priority === "Low"
                ? "bg-slate-100 text-slate-600"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {trip.priority} Priority
          </span>

        </div>

        {/* Route */}

        <div className="bg-blue-50 rounded-2xl p-5 mb-6">

          <div className="flex items-center gap-3 text-blue-600 mb-3">

            <FaMapMarkerAlt />

            <span className="font-semibold">
              Route
            </span>

          </div>

          <div className="flex items-center gap-4 text-lg font-semibold text-slate-800">

            <span>
              {trip.source}
            </span>

            <span className="text-blue-500">
              →
            </span>

            <span>
              {trip.destination}
            </span>

          </div>

        </div>

        {/* Details */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <DetailItem
            icon={<FaTruck />}
            label="Vehicle"
            value={`${trip.vehicle} (${trip.vehicleNumber})`}
          />

          <DetailItem
            icon={<FaUser />}
            label="Driver"
            value={trip.driver}
          />

          <DetailItem
            icon={<FaCalendarAlt />}
            label="Date"
            value={trip.date}
          />

          <DetailItem
            icon={<FaClock />}
            label="Departure Time"
            value={trip.departureTime}
          />

          <DetailItem
            icon={<FaFlag />}
            label="Priority"
            value={trip.priority}
          />

          <DetailItem
            icon={<FaRoute />}
            label="Trip ID"
            value={trip.tripId}
          />

        </div>

        {/* Close */}

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl
            bg-slate-100 text-slate-700
            hover:bg-slate-200 transition"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}


/* Detail Item */

function DetailItem({ icon, label, value }) {
  return (
    <div className="border border-slate-200 rounded-2xl p-4">

      <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">

        {icon}

        <span>
          {label}
        </span>

      </div>

      <p className="font-semibold text-slate-800">
        {value}
      </p>

    </div>
  );
}