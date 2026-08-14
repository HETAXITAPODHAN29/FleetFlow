import { FaTimes, FaEdit, FaTools } from "react-icons/fa";

export default function MaintenanceModal({
  maintenance,
  mode,
  onClose,
  onSave,
}) {
  if (!maintenance) return null;

  const isEditMode = mode === "edit";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedMaintenance = {
      ...maintenance,
      vehicle: formData.get("vehicle"),
      vehicleId: formData.get("vehicleId"),
      task: formData.get("task"),
      description: formData.get("description"),
      priority: formData.get("priority"),
      status: formData.get("status"),
      date: formData.get("date"),
      technician: formData.get("technician"),
      cost: Number(formData.get("cost")),
    };

    onSave(updatedMaintenance);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm
      flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl
        p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div className="flex items-center gap-4">

            <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl text-2xl">
              <FaTools />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                {isEditMode ? "Edit Maintenance" : "Maintenance Details"}
              </h2>

              <p className="text-slate-500 mt-1">
                {isEditMode
                  ? "Update maintenance information."
                  : "View complete maintenance information."}
              </p>
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

        {/* Form */}

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Maintenance ID */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Maintenance ID
              </label>

              <input
                value={maintenance.maintenanceId}
                disabled
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 bg-slate-100 text-slate-500"
              />
            </div>

            {/* Vehicle */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Vehicle
              </label>

              <input
                name="vehicle"
                defaultValue={maintenance.vehicle}
                disabled={!isEditMode}
                required
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              />
            </div>

            {/* Vehicle ID */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Vehicle ID
              </label>

              <input
                name="vehicleId"
                defaultValue={maintenance.vehicleId}
                disabled={!isEditMode}
                required
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              />
            </div>

            {/* Task */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Maintenance Task
              </label>

              <input
                name="task"
                defaultValue={maintenance.task}
                disabled={!isEditMode}
                required
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              />
            </div>

            {/* Technician */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Technician
              </label>

              <input
                name="technician"
                defaultValue={maintenance.technician}
                disabled={!isEditMode}
                required
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              />
            </div>

            {/* Date */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Maintenance Date
              </label>

              <input
                type="date"
                name="date"
                defaultValue={maintenance.date}
                disabled={!isEditMode}
                required
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              />
            </div>

            {/* Cost */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Cost (₹)
              </label>

              <input
                type="number"
                name="cost"
                min="0"
                defaultValue={maintenance.cost}
                disabled={!isEditMode}
                required
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              />
            </div>

            {/* Priority */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Priority
              </label>

              <select
                name="priority"
                defaultValue={maintenance.priority}
                disabled={!isEditMode}
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none bg-white
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Status */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Status
              </label>

              <select
                name="status"
                defaultValue={maintenance.status}
                disabled={!isEditMode}
                className={`w-full px-4 py-3 rounded-xl border
                border-slate-200 outline-none bg-white
                ${
                  isEditMode
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <option value="Scheduled">Scheduled</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

          </div>

          {/* Description */}

          <div className="mt-5">

            <label className="block text-sm font-medium text-slate-600 mb-2">
              Description
            </label>

            <textarea
              name="description"
              defaultValue={maintenance.description}
              disabled={!isEditMode}
              rows="4"
              required
              className={`w-full px-4 py-3 rounded-xl border
              border-slate-200 outline-none resize-none
              ${
                isEditMode
                  ? "focus:ring-2 focus:ring-blue-500"
                  : "bg-slate-100 text-slate-500"
              }`}
            />

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 mt-8">

            {isEditMode ? (
              <>
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
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  // This will be handled from the parent
                  onClose();
                }}
                className="flex items-center gap-2 px-6 py-3
                rounded-xl bg-blue-600 hover:bg-blue-700
                text-white font-medium shadow-lg transition"
              >
                <FaEdit />
                Close
              </button>
            )}

          </div>

        </form>

      </div>
    </div>
  );
}