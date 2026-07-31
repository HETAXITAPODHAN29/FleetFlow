import React from "react";

export default function StatCard({
  title,
  value,
  change,
  icon,
  color = "blue",
}) {
  const colors = {
    blue: "from-blue-500 to-blue-700",
    green: "from-emerald-500 to-green-700",
    orange: "from-orange-500 to-red-500",
    purple: "from-violet-500 to-purple-700",
  };

  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      p-6
      border
      border-slate-200
      group
      "
    >
      {/* Top */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-slate-800">
            {value}
          </h2>

        </div>

        <div
          className={`
          w-14
          h-14
          rounded-xl
          bg-gradient-to-br
          ${colors[color]}
          flex
          items-center
          justify-center
          text-white
          text-2xl
          shadow-lg
          group-hover:scale-110
          transition
          `}
        >
          {icon}
        </div>

      </div>

      {/* Bottom */}

      <div className="mt-6 flex items-center gap-2">

        <span className="text-green-600 font-semibold">

          {change}

        </span>

        <span className="text-slate-400 text-sm">

          compared to last week

        </span>

      </div>

    </div>
  );
}