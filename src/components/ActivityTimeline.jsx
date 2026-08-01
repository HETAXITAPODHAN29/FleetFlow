import {
  FaTruck,
  FaUserCheck,
  FaGasPump,
  FaTools,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaTruck />,
    title: "Vehicle GJ01AB1234 Assigned",
    time: "5 minutes ago",
    color: "bg-blue-500",
  },
  {
    icon: <FaUserCheck />,
    title: "Driver Rahul logged in",
    time: "20 minutes ago",
    color: "bg-green-500",
  },
  {
    icon: <FaGasPump />,
    title: "Fuel expense updated",
    time: "1 hour ago",
    color: "bg-orange-500",
  },
  {
    icon: <FaTools />,
    title: "Maintenance scheduled",
    time: "3 hours ago",
    color: "bg-red-500",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 h-full">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Recent Activities
      </h2>

      <div className="space-y-6">

        {activities.map((item, index) => (

          <div key={index} className="flex items-start gap-4">

            <div
              className={`${item.color} text-white p-3 rounded-full shadow`}
            >
              {item.icon}
            </div>

            <div>

              <h3 className="font-semibold text-slate-700">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}