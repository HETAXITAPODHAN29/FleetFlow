import { FaTimes } from "react-icons/fa";

export default function EditVehicleModal({
  vehicle,
  onClose,
  onSave,
}) {
  if (!vehicle) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedVehicle = {
      ...vehicle,
      model: formData.get("model"),
      number: formData.get("number"),
      driver: formData.get("driver"),
      location: formData.get("location"),
      fuel: Number(formData.get("fuel")),
      status: formData.get("status"),
    };

    onSave(updatedVehicle);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8"
      >

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Edit Vehicle
            </h2>

            <p className="text-slate-500 mt-1">
              Update vehicle information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-500 hover:text-white flex items-center justify-center transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Model */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Vehicle Model
              </label>

              <input
                name="model"
                defaultValue={vehicle.model}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Number */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Vehicle Number
              </label>

              <input
                name="number"
                defaultValue={vehicle.number}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Driver */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Driver
              </label>

              <input
                name="driver"
                defaultValue={vehicle.driver}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Location */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Location
              </label>

              <input
                name="location"
                defaultValue={vehicle.location}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Fuel */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Fuel Level (%)
              </label>

              <input
                name="fuel"
                type="number"
                min="0"
                max="100"
                defaultValue={vehicle.fuel}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Status */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Status
              </label>

              <select
                name="status"
                defaultValue={vehicle.status}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="Active">Active</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg transition hover:scale-105"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}