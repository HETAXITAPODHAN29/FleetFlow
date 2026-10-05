import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Fleet Manager");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            role,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save login information
      localStorage.setItem("fleetflowToken", data.token);
      localStorage.setItem(
        "fleetflowUser",
        JSON.stringify(data.user)
      );

      console.log("Login successful:", data.user);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            FleetFlow
          </h1>

          <p className="text-slate-500 mt-2">
            Fleet Management System
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Welcome Back
          </h2>

          <p className="text-slate-500 mt-1">
            Login to your FleetFlow account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl border
              border-slate-200 focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-xl border
              border-slate-200 focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 outline-none"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Login As
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border
              border-slate-200 focus:ring-2 focus:ring-blue-500
              outline-none bg-white"
            >
              <option value="Fleet Manager">
                Fleet Manager
              </option>

              <option value="Dispatcher">
                Dispatcher
              </option>

              <option value="Safety Officer">
                Safety Officer
              </option>

              <option value="Financial Analyst">
                Financial Analyst
              </option>
            </select>
          </div>

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-blue-600
            hover:bg-blue-700 text-white font-semibold
            shadow-lg transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}