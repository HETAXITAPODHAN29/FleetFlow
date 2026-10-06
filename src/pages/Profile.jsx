import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEdit, FaArrowLeft } from "react-icons/fa";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch logged-in user's profile
  useEffect(() => {
    const storedUser = localStorage.getItem("fleetflowUser");

    if (!storedUser) {
      navigate("/");
      return;
    }

    try {
      const loggedInUser = JSON.parse(storedUser);

      // MongoDB normally provides _id.
      // id is kept as fallback for older localStorage data.
      const userId = loggedInUser._id || loggedInUser.id;

      if (!userId) {
        console.error("User ID not found in localStorage");
        setLoading(false);
        return;
      }

      fetch(`http://localhost:5000/api/users/profile/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch profile");
          }

          return response.json();
        })
        .then((data) => {
          console.log("Profile data:", data);

          setUser(data);

          setFormData({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
          });

          setLoading(false);
        })
        .catch((error) => {
          console.error("Profile error:", error);
          setLoading(false);
        });
    } catch (error) {
      console.error("Invalid stored user data:", error);
      localStorage.removeItem("fleetflowUser");
      navigate("/");
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save updated profile
  const handleSave = async () => {
    if (!user) return;

    setSaving(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/profile/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update profile");
      }

      // Backend returns the updated user directly
      setUser(data);

      // Keep localStorage updated
      localStorage.setItem(
        "fleetflowUser",
        JSON.stringify(data)
      );

      setFormData({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
      });

      setEditing(false);

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update profile error:", error);
      alert(error.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <p className="text-slate-600 text-lg">
          Loading profile...
        </p>
      </div>
    );
  }

  // If profile couldn't be loaded
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">
            Unable to load profile.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-3 bg-blue-600 text-white rounded-xl"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-6 transition"
        >
          <FaArrowLeft />
          Back to Dashboard
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">
          <div className="flex items-center gap-5">
            <FaUserCircle size={80} />

            <div>
              <h1 className="text-3xl font-bold">
                My Profile
              </h1>

              <p className="text-blue-100 mt-1">
                Manage your FleetFlow account
              </p>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl mt-6 p-8">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Personal Information
              </h2>

              <p className="text-slate-500 mt-1">
                View and update your account details.
              </p>
            </div>

            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
              >
                <FaEdit />
                Edit Profile
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Name
              </label>

              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="px-4 py-3 bg-slate-50 rounded-xl">
                  {user.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Email
              </label>

              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="px-4 py-3 bg-slate-50 rounded-xl">
                  {user.email}
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Phone
              </label>

              {editing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="px-4 py-3 bg-slate-50 rounded-xl">
                  {user.phone || "Not provided"}
                </div>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Role
              </label>

              <div className="px-4 py-3 bg-slate-50 rounded-xl">
                {user.role}
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Account Status
              </label>

              <div className="px-4 py-3 bg-slate-50 rounded-xl">
                <span className="text-green-600 font-medium">
                  {user.status}
                </span>
              </div>
            </div>
          </div>

          {/* Save / Cancel */}
          {editing && (
            <div className="flex justify-end gap-3 mt-8">

              <button
                onClick={() => {
                  setEditing(false);

                  setFormData({
                    name: user.name || "",
                    email: user.email || "",
                    phone: user.phone || "",
                  });
                }}
                className="px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                disabled={saving}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}