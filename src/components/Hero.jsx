export default function Hero({
  onAddVehicle,
  onViewReports,
}) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg">

      <div className="flex flex-col lg:flex-row justify-between gap-8">

        {/* Left Content */}
        <div className="flex-1">

          <p className="text-blue-100 text-lg mb-4">
            🚀 Fleet Management Dashboard
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Welcome Back,
            <br />
            Fleet Manager 👋
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mb-8">
            Monitor your vehicles, drivers, maintenance schedules,
            fuel expenses and trips from one intelligent dashboard.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* ADD VEHICLE */}
            <button
              type="button"
              onClick={onAddVehicle}
              className="bg-white text-blue-600 px-6 py-3 rounded-xl
              font-semibold hover:bg-blue-50 transition-all
              hover:scale-105 shadow-md"
            >
              + Add Vehicle
            </button>

            {/* VIEW REPORTS */}
            <button
              type="button"
              onClick={onViewReports}
              className="border border-white text-white px-6 py-3
              rounded-xl font-semibold hover:bg-white
              hover:text-blue-600 transition-all hover:scale-105"
            >
              View Reports
            </button>

          </div>

        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-4 min-w-[240px]">

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
            <div className="text-3xl font-bold">
              128
            </div>
            <div className="text-blue-100">
              Active Vehicles
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
            <div className="text-3xl font-bold">
              64
            </div>
            <div className="text-blue-100">
              Drivers
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
            <div className="text-3xl font-bold">
              94%
            </div>
            <div className="text-blue-100">
              On-Time Deliveries
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}