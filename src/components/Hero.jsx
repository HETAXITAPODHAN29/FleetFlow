import {
  FaTruck,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaPlus,
  FaCircle,
} from "react-icons/fa";

export default function Hero({
  onAddVehicle,
  onViewReports,
  vehicleCount,
  driverCount,
  completedTrips,
  totalTrips,
}) {
  const completionRate =
    totalTrips > 0
      ? Math.round((completedTrips / totalTrips) * 100)
      : 0;

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-2xl">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute -top-32 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative p-8 lg:p-10">

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-12 items-center">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-lg">

              <span className="flex items-center justify-center">
                <FaCircle className="text-[7px] text-green-300 animate-pulse" />
              </span>

              <span className="text-sm font-medium text-blue-100">
                Fleet Management • Live Overview
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6">

              Welcome back,

              <br />

              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Fleet Manager
              </span>

              <span className="ml-3">
                <FaTruck className="inline-block text-blue-500" />
              </span>

            </h1>

            {/* Description */}
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Manage your fleet, monitor vehicles, coordinate drivers
              and track daily operations — all from one intelligent
              platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              {/* Add Vehicle */}
              <button
                type="button"
                onClick={onAddVehicle}
                className="group flex items-center gap-3 bg-white text-blue-700 px-6 py-3.5 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
              >

                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition">
                  <FaPlus className="text-sm" />
                </span>

                Add Vehicle

                <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

              </button>

              {/* View Reports */}
              <button
                type="button"
                onClick={onViewReports}
                className="group flex items-center gap-3 border border-white/30 bg-white/10 backdrop-blur-md text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
              >

                <FaChartLine />

                View Reports

                <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

              </button>

            </div>

          </div>


          {/* =====================================================
              RIGHT LIVE STATS
          ===================================================== */}

          <div className="space-y-4">

            {/* ================= VEHICLES ================= */}

            <div className="group relative overflow-hidden bg-white/[0.09] hover:bg-white/[0.14] border border-white/15 backdrop-blur-xl rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-center justify-between">

                <div>

                  <div className="flex items-center gap-2 mb-1">

                    <p className="text-blue-100 text-sm">
                      Active Vehicles
                    </p>

                    <FaCircle className="text-[5px] text-green-300" />

                  </div>

                  <h3 className="text-3xl font-bold tracking-tight">
                    {vehicleCount}
                  </h3>

                  <p className="text-xs text-blue-200 mt-1">
                    Live fleet status
                  </p>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/30 border border-blue-300/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                  <FaTruck className="text-2xl text-blue-100" />

                </div>

              </div>

            </div>


            {/* ================= DRIVERS ================= */}

            <div className="group relative overflow-hidden bg-white/[0.09] hover:bg-white/[0.14] border border-white/15 backdrop-blur-xl rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-blue-100 text-sm mb-1">
                    Total Drivers
                  </p>

                  <h3 className="text-3xl font-bold tracking-tight">
                    {driverCount}
                  </h3>

                  <p className="text-xs text-blue-200 mt-1">
                    Registered in fleet
                  </p>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-green-500/30 border border-green-300/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                  <FaUsers className="text-2xl text-green-100" />

                </div>

              </div>

            </div>


            {/* ================= TRIPS ================= */}

            <div className="group relative overflow-hidden bg-white/[0.09] hover:bg-white/[0.14] border border-white/15 backdrop-blur-xl rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-blue-100 text-sm mb-1">
                    Trip Completion
                  </p>

                  <div className="flex items-end gap-2">

                    <h3 className="text-3xl font-bold tracking-tight">
                      {completionRate}%
                    </h3>

                    <span className="text-xs text-blue-200 mb-1">
                      completion rate
                    </span>

                  </div>

                  <p className="text-xs text-blue-200 mt-1">
                    {completedTrips} of {totalTrips} trips completed
                  </p>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-purple-500/30 border border-purple-300/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                  <FaChartLine className="text-2xl text-purple-100" />

                </div>

              </div>

              {/* Progress bar */}
              <div className="relative mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-purple-300 to-white rounded-full transition-all duration-700"
                  style={{
                    width: `${completionRate}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}