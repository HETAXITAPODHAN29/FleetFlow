import { FaTimes } from "react-icons/fa";

export default function EditDriverModal({
  driver,
  onClose,
  onSave,
}) {
  if (!driver) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedDriver = {
      ...driver,
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      vehicle: formData.get("vehicle"),
      license: formData.get("license"),
      status: formData.get("status"),
      trips: Number(formData.get("trips")),
      rating: Number(formData.get("rating")),
    };

    onSave(updatedDriver);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm
      flex items-center justify-center p-4"
      onClick={onClose}
    >

      <div
        className="bg-white w-full max-w-2xl rounded-3xl
        shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Edit Driver
            </h2>

            <p className="text-slate-500 mt-1">
              Update driver information.
            </p>
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

            {/* Name */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Driver Name
              </label>

              <input
                name="name"
                defaultValue={driver.name}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>


            {/* Phone */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Phone
              </label>

              <input
                name="phone"
                defaultValue={driver.phone}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>


            {/* Email */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Email
              </label>

              <input
                name="email"
                type="email"
                defaultValue={driver.email || ""}
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>


            {/* Vehicle */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Assigned Vehicle
              </label>

              <input
                name="vehicle"
                defaultValue={driver.vehicle}
                required
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>


            {/* License */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                License Number
              </label>

              <input
                name="license"
                defaultValue={driver.license || ""}
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
                defaultValue={driver.status}
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none bg-white"
              >
                <option value="Available">Available</option>
                <option value="On Trip">On Trip</option>
                <option value="Off Duty">Off Duty</option>
              </select>
            </div>


            {/* Trips */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Total Trips
              </label>

              <input
                name="trips"
                type="number"
                min="0"
                defaultValue={driver.trips || 0}
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>


            {/* Rating */}

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Rating
              </label>

              <input
                name="rating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                defaultValue={driver.rating || 0}
                className="w-full px-4 py-3 rounded-xl border
                border-slate-200 focus:ring-2 focus:ring-blue-500
                outline-none"
              />
            </div>

          </div>


          {/* Buttons */}

          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl
              border border-slate-300 text-slate-600
              hover:bg-slate-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl
              bg-blue-600 hover:bg-blue-700 text-white
              font-medium shadow-lg transition hover:scale-105"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}