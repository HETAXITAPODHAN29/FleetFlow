import { FaTimes } from "react-icons/fa";

export default function EditDispatchModal({
  trip,
  onClose,
  onSave,
}) {
  if (!trip) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedTrip = {
      ...trip,
      source: formData.get("source"),
      destination: formData.get("destination"),
      vehicle: formData.get("vehicle"),
      driver: formData.get("driver"),
      date: formData.get("date"),
      departureTime: formData.get("departureTime"),
      status: formData.get("status"),
      priority: formData.get("priority"),
    };

    onSave(updatedTrip);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Edit Dispatch
            </h2>

            <p className="text-slate-500 mt-1">
              Update dispatch information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100
            hover:bg-red-500 hover:text-white
            flex items-center justify-center transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Source */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Source
              </label>

              <input
                name="source"
                defaultValue={trip.source}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>

            {/* Destination */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Destination
              </label>

              <input
                name="destination"
                defaultValue={trip.destination}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>

            {/* Vehicle */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Vehicle
              </label>

              <input
                name="vehicle"
                defaultValue={trip.vehicle}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>

            {/* Driver */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Driver
              </label>

              <input
                name="driver"
                defaultValue={trip.driver}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>

            {/* Date */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Date
              </label>

              <input
                type="date"
                name="date"
                defaultValue={trip.date}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>

            {/* Departure Time */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Departure Time
              </label>

              <input
                type="time"
                name="departureTime"
                defaultValue={trip.departureTime}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>

            {/* Status */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Status
              </label>

              <select
                name="status"
                defaultValue={trip.status}
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none bg-white"
              >
                <option value="Scheduled">Scheduled</option>
                <option value="In Transit">In Transit</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Priority */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Priority
              </label>

              <select
                name="priority"
                defaultValue={trip.priority}
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none bg-white"
              >
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </select>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border
              border-slate-300 text-slate-600
              hover:bg-slate-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600
              hover:bg-blue-700 text-white font-medium
              shadow-lg transition hover:scale-105"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}