export default function Navbar({ title }) {
  return (
    <header className="flex items-center 
                        justify-between 
                        bg-white rounded-xl 
                        shadow-sm px-6 py-4 mb-6 border 
                        border-slate-200">
      
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {title}
        </h1>
        <p className="text-sm text-slate-500">
          Welcome back, Fleet Manager 👋
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Notification */}
        <button className="text-xl hover:scale-110 transition">
          🔔
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://ui-avatars.com/api/?name=Fleet+Manager&background=2563EB&color=fff"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          <div className="hidden md:block">
            <p className="font-semibold text-slate-700">
              Fleet Manager
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}