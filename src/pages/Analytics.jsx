import { useState } from "react";
import {
  FaChartLine,
  FaTruck,
  FaRoute,
  FaGasPump,
  FaTools,
  FaUsers,
  FaArrowUp,
  FaArrowDown,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

export default function Analytics() {
  const stats = [
    {
      title: "Fleet Utilization",
      value: "81%",
      change: "+6.4%",
      description: "vs. previous month",
      icon: <FaTruck />,
      color: "bg-blue-500",
      positive: true,
    },
    {
      title: "Total Trips",
      value: "128",
      change: "+12.8%",
      description: "vs. previous month",
      icon: <FaRoute />,
      color: "bg-green-500",
      positive: true,
    },
    {
      title: "Fuel Cost",
      value: "$6,240",
      change: "-4.2%",
      description: "vs. previous month",
      icon: <FaGasPump />,
      color: "bg-orange-500",
      positive: true,
    },
    {
      title: "Maintenance Cost",
      value: "$3,890",
      change: "+3.1%",
      description: "vs. previous month",
      icon: <FaTools />,
      color: "bg-red-500",
      positive: false,
    },
  ];
  
  const [timeRange, setTimeRange] = useState("month");

  const chartData = {
  month: [
    { label: "Week 1", value: 68 },
    { label: "Week 2", value: 74 },
    { label: "Week 3", value: 79 },
    { label: "Week 4", value: 81 },
  ],

  quarter: [
    { label: "Jun 2026", value: 72 },
    { label: "Jul 2026", value: 76 },
    { label: "Aug 2026", value: 81 },
  ],

  year: [
    { label: "Jan 2026", value: 52 },
    { label: "Feb 2026", value: 64 },
    { label: "Mar 2026", value: 58 },
    { label: "Apr 2026", value: 72 },
    { label: "May 2026", value: 68 },
    { label: "Jun 2026", value: 81 },
    { label: "Jul 2026", value: 76 },
    { label: "Aug 2026", value: 88 },
  ],
};

  const tripData = [
    { label: "Completed", value: 72, color: "bg-green-500" },
    { label: "In Transit", value: 16, color: "bg-orange-500" },
    { label: "Scheduled", value: 28, color: "bg-yellow-500" },
    { label: "Cancelled", value: 12, color: "bg-red-500" },
  ];

  const driverPerformance = [
    {
      name: "Rahul Sharma",
      trips: 32,
      completion: "96%",
    },
    {
      name: "Amit Patel",
      trips: 28,
      completion: "93%",
    },
    {
      name: "Karan Mehta",
      trips: 25,
      completion: "91%",
    },
    {
      name: "Priya Shah",
      trips: 22,
      completion: "89%",
    },
  ];

  return (
    <div className="min-h-full">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Analytics
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor fleet performance, costs and operational efficiency.
          </p>
        </div>

        <div className="flex items-center gap-3">

        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-3 rounded-xl border border-slate-200
          bg-white text-slate-600 outline-none
          focus:ring-2 focus:ring-blue-500"
        >
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
          <option value="year">This Year</option>
        </select>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-3xl p-6 border border-slate-200
            shadow-sm hover:shadow-xl hover:-translate-y-1
            transition-all duration-300"
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-slate-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-2">
                  {item.value}
                </h2>

                <div className="flex items-center gap-2 mt-3">

                  <span
                    className={`flex items-center gap-1 text-sm font-semibold ${
                      item.positive
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.positive ? <FaArrowUp /> : <FaArrowDown />}
                    {item.change}
                  </span>

                  <span className="text-xs text-slate-400">
                    {item.description}
                  </span>

                </div>

              </div>

              <div
                className={`${item.color} text-white p-4 rounded-2xl text-xl`}
              >
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Main Analytics Grid */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        {/* Fleet Performance */}

        <div
          className="xl:col-span-2 bg-white rounded-3xl
          border border-slate-200 shadow-sm p-6"
        >

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Fleet Performance
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Monthly fleet utilization
              </p>
            </div>

            <div
              className="w-11 h-11 rounded-xl bg-blue-100
              text-blue-600 flex items-center justify-center"
            >
              <FaChartLine />
            </div>

          </div>

          {/* Fake chart */}

          <div className="h-64 flex items-end gap-4 px-4">

          {chartData[timeRange].map((item) => (
            <div
              key={item.label}
              className="flex-1 flex flex-col items-center gap-2"
            >
              <div className="w-full flex items-end h-48">
                <div
                  className="w-full bg-blue-500 rounded-t-xl
                  hover:bg-blue-600 transition-all"
                  style={{ height: `${item.value}%` }}
                />
              </div>

              <span className="text-xs text-slate-400 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}

          </div>

        </div>

        {/* Trip Status */}

        <div
          className="bg-white rounded-3xl
          border border-slate-200 shadow-sm p-6"
        >

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Trip Status
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Current trip distribution
              </p>
            </div>

            <FaRoute className="text-blue-500 text-xl" />

          </div>

          <div className="space-y-5">

            {tripData.map((item) => (

              <div key={item.label}>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-medium text-slate-600">
                    {item.label}
                  </span>

                  <span className="text-sm font-bold text-slate-800">
                    {item.value}
                  </span>

                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">

                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{
                      width: `${(item.value / 128) * 100}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Driver Performance */}

        <div
          className="bg-white rounded-3xl border border-slate-200
          shadow-sm p-6"
        >

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold text-slate-800">
                Driver Performance
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Top performing drivers
              </p>

            </div>

            <div
              className="w-11 h-11 rounded-xl bg-purple-100
              text-purple-600 flex items-center justify-center"
            >
              <FaUsers />
            </div>

          </div>

          <div className="space-y-4">

            {driverPerformance.map((driver, index) => (

              <div
                key={driver.name}
                className="flex items-center justify-between
                p-4 rounded-2xl bg-slate-50"
              >

                <div className="flex items-center gap-4">

                  <div
                    className="w-10 h-10 rounded-full bg-blue-100
                    text-blue-600 flex items-center justify-center
                    font-bold"
                  >
                    {index + 1}
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      {driver.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {driver.trips} trips completed
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="font-bold text-green-600">
                    {driver.completion}
                  </p>

                  <p className="text-xs text-slate-400">
                    Completion
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Operational Summary */}

        <div
          className="bg-white rounded-3xl border border-slate-200
          shadow-sm p-6"
        >

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-bold text-slate-800">
                Operational Summary
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Key fleet indicators
              </p>

            </div>

            <FaCheckCircle className="text-green-500 text-xl" />

          </div>

          <div className="space-y-5">

            <div
              className="flex items-center justify-between
              p-4 rounded-2xl bg-green-50"
            >

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <div>
                  <p className="font-semibold text-slate-700">
                    On-time deliveries
                  </p>

                  <p className="text-xs text-slate-500">
                    Successfully completed
                  </p>
                </div>

              </div>

              <span className="text-xl font-bold text-green-600">
                94%
              </span>

            </div>

            <div
              className="flex items-center justify-between
              p-4 rounded-2xl bg-blue-50"
            >

              <div className="flex items-center gap-3">

                <FaTruck className="text-blue-500" />

                <div>
                  <p className="font-semibold text-slate-700">
                    Active Vehicles
                  </p>

                  <p className="text-xs text-slate-500">
                    Currently operational
                  </p>
                </div>

              </div>

              <span className="text-xl font-bold text-blue-600">
                18
              </span>

            </div>

            <div
              className="flex items-center justify-between
              p-4 rounded-2xl bg-orange-50"
            >

              <div className="flex items-center gap-3">

                <FaClock className="text-orange-500" />

                <div>
                  <p className="font-semibold text-slate-700">
                    Average Idle Time
                  </p>

                  <p className="text-xs text-slate-500">
                    Per vehicle
                  </p>
                </div>

              </div>

              <span className="text-xl font-bold text-orange-600">
                14h
              </span>

            </div>

            <div
              className="flex items-center justify-between
              p-4 rounded-2xl bg-purple-50"
            >

              <div className="flex items-center gap-3">

                <FaTools className="text-purple-500" />

                <div>
                  <p className="font-semibold text-slate-700">
                    Maintenance Due
                  </p>

                  <p className="text-xs text-slate-500">
                    Vehicles requiring service
                  </p>
                </div>

              </div>

              <span className="text-xl font-bold text-purple-600">
                4
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}