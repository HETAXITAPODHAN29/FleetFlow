import {
  FaTimes,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaTruck,
  FaIdCard,
  FaRoute,
  FaStar,
} from "react-icons/fa";

export default function DriverDetailsModal({
  driver,
  onClose,
}) {
  if (!driver) return null;

  const statusColor = {
    Available: "bg-green-100 text-green-700",
    "On Trip": "bg-orange-100 text-orange-700",
    "Off Duty": "bg-red-100 text-red-700",
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm
      flex items-center justify-center p-4"
      onClick={onClose}
    >

      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl
        p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="flex justify-between items-start mb-8">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-blue-100
              text-blue-600 flex items-center justify-center text-3xl">
              <FaUser />
            </div>

            <div>

              <h2 className="text-3xl font-bold text-slate-800">
                {driver.name}
              </h2>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full
                text-sm font-semibold ${
                  statusColor[driver.status] ||
                  "bg-slate-100 text-slate-700"
                }`}
              >
                {driver.status}
              </span>

            </div>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100
            hover:bg-red-500 hover:text-white
            flex items-center justify-center transition"
          >
            <FaTimes />
          </button>

        </div>


        {/* Driver Information */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Phone */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <FaPhone />
              <span className="text-sm font-medium">
                Phone
              </span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.phone || "Not Available"}
            </p>

          </div>


          {/* Email */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <FaEnvelope />
              <span className="text-sm font-medium">
                Email
              </span>
            </div>

            <p className="font-semibold text-slate-800 break-all">
              {driver.email || "Not Available"}
            </p>

          </div>


          {/* Vehicle */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <FaTruck />
              <span className="text-sm font-medium">
                Assigned Vehicle
              </span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.vehicle || "Not Assigned"}
            </p>

          </div>


          {/* License */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <FaIdCard />
              <span className="text-sm font-medium">
                License Number
              </span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.license || "Not Available"}
            </p>

          </div>


          {/* Total Trips */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <FaRoute />
              <span className="text-sm font-medium">
                Total Trips
              </span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.trips || 0}
            </p>

          </div>


          {/* Rating */}

          <div className="bg-slate-50 rounded-2xl p-5">

            <div className="flex items-center gap-3 text-yellow-500 mb-2">
              <FaStar />
              <span className="text-sm font-medium text-slate-600">
                Driver Rating
              </span>
            </div>

            <p className="font-semibold text-slate-800">
              {driver.rating || "Not Rated"} ⭐
            </p>

          </div>

        </div>


        {/* Close Button */}

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl
            bg-slate-100 hover:bg-slate-200
            text-slate-700 font-medium transition"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}