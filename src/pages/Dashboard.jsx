import Navbar from "../components/Navbar";
import Card from "../components/Card";

const cards = [
  {
    title: "Active Vehicles",
    value: "128",
    subtitle: "+8% compared to last week",
  },
  {
    title: "Available Vehicles",
    value: "96",
    subtitle: "Ready for dispatch",
  },
  {
    title: "Pending Trips",
    value: "15",
    subtitle: "Awaiting assignment",
  },
  {
    title: "Maintenance Alerts",
    value: "6",
    subtitle: "Require immediate attention",
  },
];

const trips = [
  {
    id: "TRP-101",
    driver: "Rahul Sharma",
    vehicle: "TRK-204",
    destination: "Ahmedabad",
    status: "Completed",
  },
  {
    id: "TRP-102",
    driver: "Prit Patel",
    vehicle: "TRK-108",
    destination: "Surat",
    status: "On Trip",
  },
  {
    id: "TRP-103",
    driver: "Amit Kumar",
    vehicle: "TRK-315",
    destination: "Vadodara",
    status: "Pending",
  },
  {
    id: "TRP-104",
    driver: "Mehul Desai",
    vehicle: "TRK-410",
    destination: "Rajkot",
    status: "Cancelled",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <Navbar title="Dashboard" />

      {/* Welcome Section */}

      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold">
          Welcome back, Fleet Manager 👋
        </h2>

        <p className="mt-2 text-blue-100">
          Here's a quick overview of today's fleet operations.
        </p>
      </section>

      {/* Summary Cards */}

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
          />
        ))}
      </section>

      {/* Charts Placeholder */}

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-semibold text-slate-700 mb-4">
            Fleet Utilization
          </h3>

          <div className="h-56 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            Chart Coming Soon
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-semibold text-slate-700 mb-4">
            Fuel Consumption
          </h3>

          <div className="h-56 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            Chart Coming Soon
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-semibold text-slate-700 mb-4">
            Vehicle Status
          </h3>

          <div className="h-56 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            Chart Coming Soon
          </div>
        </div>

      </section>

      {/* Recent Trips */}

      <section className="bg-white rounded-xl shadow-sm border p-6">

        <h3 className="text-xl font-bold mb-5">
          Recent Trips
        </h3>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Trip ID</th>
                <th className="text-left py-3">Driver</th>
                <th className="text-left py-3">Vehicle</th>
                <th className="text-left py-3">Destination</th>
                <th className="text-left py-3">Status</th>

              </tr>

            </thead>

            <tbody>

              {trips.map((trip) => (

                <tr key={trip.id} className="border-b hover:bg-slate-50">

                  <td className="py-4">{trip.id}</td>

                  <td>{trip.driver}</td>

                  <td>{trip.vehicle}</td>

                  <td>{trip.destination}</td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        trip.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : trip.status === "On Trip"
                          ? "bg-blue-100 text-blue-700"
                          : trip.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trip.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* Alerts */}

      <section className="bg-white rounded-xl shadow-sm border p-6">

        <h3 className="text-xl font-bold mb-5">
          Recent Alerts
        </h3>

        <div className="space-y-4">

          <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
            Vehicle TRK-204 requires urgent maintenance.
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
            Driver license expires in 7 days.
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            Fuel expense exceeded this week's budget.
          </div>

        </div>

      </section>

    </div>
  );
}