import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "Fleet Manager",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Registration successful! Please login.");

      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            FleetFlow
          </h1>

          <p className="text-slate-500 mt-2">
            Fleet Management System
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Create Account
          </h2>

          <p className="text-slate-500 mt-1">
            Register a new FleetFlow account
          </p>
        </div>

        {/* Registration Form */}
        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 rounded-xl border border-slate-200
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              outline-none"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200
              focus:ring-2 focus:ring-blue-500 outline-none bg-white"
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

          {/* Register */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-blue-600
            hover:bg-blue-700 text-white font-semibold
            shadow-lg transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-slate-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}