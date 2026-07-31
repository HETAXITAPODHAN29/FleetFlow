import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", vehicles: 80 },
  { month: "Feb", vehicles: 92 },
  { month: "Mar", vehicles: 105 },
  { month: "Apr", vehicles: 120 },
  { month: "May", vehicles: 118 },
  { month: "Jun", vehicles: 128 },
];

export default function FleetChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="vehicles"
          stroke="#2563eb"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}