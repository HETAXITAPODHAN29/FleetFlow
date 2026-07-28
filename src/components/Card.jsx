export default function Card({ title, value, subtitle }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Card Title */}
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>

      {/* Main Value */}
      <h2 className="text-3xl font-bold text-slate-800 mt-2">
        {value}
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-green-600 mt-2">
        {subtitle}
      </p>

    </div>
  );
}