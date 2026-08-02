import { useTheme } from "../context/ThemeContext";
import {
  FaBell,
  FaMoon,
  FaSun,
  FaSearch,
} from "react-icons/fa";

export default function Navbar({title,}) // it is a functional component that takes a title prop and displays a navigation bar with the title, current date, search input, dark mode toggle, notification icon, and user profile information.//
{
  const { darkMode, toggleTheme } = useTheme();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white rounded-3xl shadow-md p-6 flex justify-between items-center">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-slate-500 mt-1">
          {today}     {/* Displays the current date */}
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-3 rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />

        </div>

        {/* Dark Mode */}

     <button
  onClick={toggleTheme}
  className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

        {/* Notification */}

        <button
          className="relative w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
        >
          <FaBell />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            FM
          </div>

          <div>

            <p className="font-semibold text-slate-800">
              Fleet Manager
            </p>

            <p className="text-sm text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}