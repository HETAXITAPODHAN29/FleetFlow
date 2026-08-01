import { FaTruck, FaUserTie, FaChartLine } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl flex flex-col lg:flex-row justify-between items-center">

      {/* Left Side */}
      <div>
        <p className="text-blue-200 text-lg mb-2">
          🚀 Fleet Management Dashboard
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Welcome Back,
          <br />
          Fleet Manager 👋
        </h1>

        <p className="mt-4 text-blue-100 max-w-xl">
          Monitor your vehicles, drivers, maintenance schedules,
          fuel expenses and trips from one intelligent dashboard.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
            + Add Vehicle
          </button>

          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
            View Reports
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-1 gap-4 mt-10 lg:mt-0">

        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
          <FaTruck size={28} />
          <div>
            <h2 className="text-3xl font-bold">128</h2>
            <p>Active Vehicles</p>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
          <FaUserTie size={28} />
          <div>
            <h2 className="text-3xl font-bold">64</h2>
            <p>Drivers</p>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
          <FaChartLine size={28} />
          <div>
            <h2 className="text-3xl font-bold">94%</h2>
            <p>On-Time Deliveries</p>
          </div>
        </div>

      </div>
    </div>
  );
}