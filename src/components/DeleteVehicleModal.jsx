import { FaTrash, FaTimes } from "react-icons/fa";

export default function DeleteVehicleModal({
  vehicle,
  onClose,
  onConfirm,
}) {
  if (!vehicle) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 text-center"
      >

        {/* Icon */}

        <div className="w-16 h-16 mx-auto rounded-full bg-red-100 text-red-500 flex items-center justify-center text-2xl mb-5">
          <FaTrash />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          Delete Vehicle?
        </h2>

        <p className="text-slate-500 mt-3">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-slate-700">
            {vehicle.model}
          </span>
          ?
        </p>

        <p className="text-sm text-slate-400 mt-2">
          This action cannot be undone.
        </p>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <button
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
          >
            <FaTimes />
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition hover:scale-105"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}