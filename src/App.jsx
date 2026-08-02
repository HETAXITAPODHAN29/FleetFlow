import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Drivers from "./pages/Drivers";
import Dispatcher from "./pages/Dispatcher";
import Maintenance from "./pages/Maintenance";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";

export default function App() {
  const location = useLocation();

  const hideSidebar =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <>
      {hideSidebar ? (
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <div className="flex min-h-screen bg-slate-100">

          {/* Sidebar */}

          <Sidebar />

          {/* Main Content */}

        <main className="flex-1 p-8 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/dispatcher" element={<Dispatcher />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>

        </div>
      )}
    </>
  );
}