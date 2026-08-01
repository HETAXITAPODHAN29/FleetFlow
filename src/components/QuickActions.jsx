import {
  FaPlus,
  FaTruck,
  FaUserPlus,
  FaChartLine,
} from "react-icons/fa";

const actions = [
  {
    title: "Add Vehicle",
    icon: <FaTruck />,
    color: "bg-blue-600",
  },
  {
    title: "Add Driver",
    icon: <FaUserPlus />,
    color: "bg-green-600",
  },
  {
    title: "Create Trip",
    icon: <FaPlus />,
    color: "bg-orange-600",
  },
  {
    title: "View Reports",
    icon: <FaChartLine />,
    color: "bg-purple-600",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => (

          <button
            key={action.title}
            className={`${action.color}
            text-white
            rounded-2xl
            p-5
            hover:scale-105
            transition-all
            shadow-lg`}
          >

            <div className="text-3xl mb-3 flex justify-center">
              {action.icon}
            </div>

            <p className="font-semibold">
              {action.title}
            </p>

          </button>

        ))}

      </div>

    </div>
  );
}