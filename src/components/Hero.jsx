import {
  FaTruck,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaPlus,
} from "react-icons/fa";

export default function Hero({
  onAddVehicle,
  onViewReports,
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-2xl">

      {/* Decorative background circles */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative p-8 lg:p-10">

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-10 items-center">

          {/* ================= LEFT ================= */}
          <div>



            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
              Welcome Back,
              <br />
              <span className="text-blue-100">
                Fleet Manager
              </span>{" "}
              👋
            </h1>

            {/* Description */}
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Monitor your vehicles, drivers, maintenance schedules,
              expenses and trips — all from one intelligent fleet
              management platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              {/* Add Vehicle */}
              <button
                type="button"
                onClick={onAddVehicle}
                className="group flex items-center gap-3 bg-white text-blue-700 px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100">
                  <FaPlus className="text-sm" />
                </span>

                Add Vehicle

                <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>

              {/* View Reports */}
              <button
                type="button"
                onClick={onViewReports}
                className="group flex items-center gap-3 border border-white/40 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                <FaChartLine />

                View Reports

                <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>

            </div>

          </div>

          {/* ================= RIGHT STATS ================= */}
          <div className="space-y-4">

            {/* Active Vehicles */}
            <div className="group bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-blue-100 text-sm mb-1">
                    Active Vehicles
                  </p>

                  <h3 className="text-3xl font-bold">
                    128
                  </h3>

                  <p className="text-xs text-green-300 mt-1">
                    ↑ 8% this month
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaTruck className="text-2xl" />
                </div>

              </div>

            </div>

            {/* Drivers */}
            <div className="group bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-blue-100 text-sm mb-1">
                    Active Drivers
                  </p>

                  <h3 className="text-3xl font-bold">
                    64
                  </h3>

                  <p className="text-xs text-green-300 mt-1">
                    ↑ 5% this month
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaUsers className="text-2xl" />
                </div>

              </div>

            </div>

            {/* On Time Deliveries */}
            <div className="group bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-blue-100 text-sm mb-1">
                    On-Time Deliveries
                  </p>

                  <h3 className="text-3xl font-bold">
                    94%
                  </h3>

                  <p className="text-xs text-green-300 mt-1">
                    ↑ 3.2% this month
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-purple-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaChartLine className="text-2xl" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}