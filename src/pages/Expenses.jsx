import { useState } from "react";
import {
  FaMoneyBillWave,
  FaGasPump,
  FaTools,
  FaShieldAlt,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const initialExpenses = [
  {
    id: 1,
    expenseId: "EXP-001",
    vehicle: "Tata 407",
    category: "Fuel",
    description: "Diesel refill",
    amount: 6200,
    date: "2026-08-10",
    payment: "Paid",
  },
  {
    id: 2,
    expenseId: "EXP-002",
    vehicle: "Ashok Leyland",
    category: "Repairs",
    description: "Brake repair",
    amount: 3900,
    date: "2026-08-09",
    payment: "Paid",
  },
  {
    id: 3,
    expenseId: "EXP-003",
    vehicle: "Mahindra Bolero",
    category: "Insurance",
    description: "Vehicle insurance",
    amount: 2100,
    date: "2026-08-07",
    payment: "Paid",
  },
  {
    id: 4,
    expenseId: "EXP-004",
    vehicle: "Tata 407",
    category: "Fuel",
    description: "Diesel refill",
    amount: 4800,
    date: "2026-08-06",
    payment: "Paid",
  },
  {
    id: 5,
    expenseId: "EXP-005",
    vehicle: "Eicher Pro",
    category: "Repairs",
    description: "Tire replacement",
    amount: 2700,
    date: "2026-08-04",
    payment: "Pending",
  },
  {
    id: 6,
    expenseId: "EXP-006",
    vehicle: "Ashok Leyland",
    category: "Other",
    description: "Vehicle cleaning",
    amount: 800,
    date: "2026-08-02",
    payment: "Paid",
  },
];

export default function Expenses() {
  const [expenseList, setExpenseList] = useState(initialExpenses);

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [editingExpense, setEditingExpense] = useState(null);

  // -------------------- Statistics --------------------

  const totalExpenses = expenseList.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const fuelExpenses = expenseList
    .filter((expense) => expense.category === "Fuel")
    .reduce((total, expense) => total + expense.amount, 0);

  const repairExpenses = expenseList
    .filter((expense) => expense.category === "Repairs")
    .reduce((total, expense) => total + expense.amount, 0);

  const insuranceExpenses = expenseList
    .filter((expense) => expense.category === "Insurance")
    .reduce((total, expense) => total + expense.amount, 0);

  const stats = [
    {
      title: "Total Expenses",
      value: `₹${totalExpenses.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "bg-blue-500",
    },
    {
      title: "Fuel",
      value: `₹${fuelExpenses.toLocaleString()}`,
      icon: <FaGasPump />,
      color: "bg-orange-500",
    },
    {
      title: "Repairs",
      value: `₹${repairExpenses.toLocaleString()}`,
      icon: <FaTools />,
      color: "bg-red-500",
    },
    {
      title: "Insurance",
      value: `₹${insuranceExpenses.toLocaleString()}`,
      icon: <FaShieldAlt />,
      color: "bg-green-500",
    },
  ];

  // -------------------- Search + Filter --------------------

  const filteredExpenses = expenseList.filter((expense) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      expense.expenseId.toLowerCase().includes(searchText) ||
      expense.vehicle.toLowerCase().includes(searchText) ||
      expense.category.toLowerCase().includes(searchText) ||
      expense.description.toLowerCase().includes(searchText);

    const matchesFilter =
      activeFilter === "All" || expense.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  // -------------------- Delete --------------------

  const handleDelete = (expense) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${expense.expenseId}?`
    );

    if (!confirmed) return;

    setExpenseList((currentExpenses) =>
      currentExpenses.filter((item) => item.id !== expense.id)
    );
  };

  // -------------------- Edit --------------------

  const handleEditSave = (updatedExpense) => {
    setExpenseList((currentExpenses) =>
      currentExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );

    setEditingExpense(null);
  };

  // -------------------- UI --------------------

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Expenses
          </h1>

          <p className="text-slate-500 mt-2">
            Track and manage fleet-related expenses.
          </p>
        </div>

        <button
          className="flex items-center justify-center gap-3
          bg-blue-600 hover:bg-blue-700 text-white
          px-6 py-3 rounded-2xl shadow-lg
          transition-all hover:scale-105"
        >
          <FaPlus />
          Add Expense
        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-3xl p-6
            border border-slate-200 shadow-sm
            hover:shadow-xl hover:-translate-y-1
            transition-all duration-300"
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`${item.color}
                text-white p-4 rounded-2xl text-2xl`}
              >
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Search + Filters */}

      <div
        className="bg-white rounded-3xl
        border border-slate-200 shadow-sm
        p-5 mb-8"
      >

        <div className="flex flex-col xl:flex-row gap-4">

          {/* Search */}

          <div className="relative flex-1">

            <FaSearch
              className="absolute left-4 top-1/2
              -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search expense, vehicle, category or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3
              rounded-2xl border border-slate-200
              focus:ring-2 focus:ring-blue-500
              outline-none"
            />

          </div>

          {/* Filters */}

          <div className="flex flex-wrap gap-3">

            {["All", "Fuel", "Repairs", "Insurance", "Other"].map(
              (filter) => (

                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-3 rounded-xl
                  border transition-all
                  ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>

              )
            )}

          </div>

        </div>

      </div>

      {/* Result Count */}

      <div className="text-slate-500 mb-4">

        Showing{" "}
        <span className="font-semibold text-slate-700">
          {filteredExpenses.length}
        </span>{" "}
        expense(s)

      </div>

      {/* Expense List */}

      {filteredExpenses.length > 0 ? (

        <div
          className="bg-white rounded-3xl
          border border-slate-200
          shadow-sm overflow-hidden"
        >

          {filteredExpenses.map((expense, index) => (

            <div
              key={expense.id}
              className={`p-6 hover:bg-slate-50
              transition-all duration-300
              ${
                index !== filteredExpenses.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >

              <div
                className="flex flex-col xl:flex-row
                xl:items-center justify-between gap-6"
              >

                {/* Expense Information */}

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-2">

                    <h2 className="text-lg font-bold text-slate-800">
                      {expense.expenseId}
                    </h2>

                    <span
                      className={`px-3 py-1 rounded-full
                      text-sm font-semibold
                      ${
                        expense.category === "Fuel"
                          ? "bg-orange-100 text-orange-700"
                          : expense.category === "Repairs"
                          ? "bg-red-100 text-red-700"
                          : expense.category === "Insurance"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {expense.category}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full
                      text-sm font-semibold
                      ${
                        expense.payment === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {expense.payment}
                    </span>

                  </div>

                  <p className="text-slate-700 font-medium">
                    {expense.description}
                  </p>

                  <div
                    className="flex flex-wrap
                    gap-x-8 gap-y-2 mt-3
                    text-sm text-slate-500"
                  >

                    <span>
                      🚚 {expense.vehicle}
                    </span>

                    <span>
                      📅 {expense.date}
                    </span>

                    <span className="font-semibold text-slate-700">
                      ₹{expense.amount.toLocaleString()}
                    </span>

                  </div>

                </div>

                {/* Action Buttons */}

                <div className="flex gap-3">

                  {/* View */}

                  <button
                    onClick={() => setSelectedExpense(expense)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-blue-500 hover:text-white
                    transition-all duration-300"
                    title="View"
                  >
                    <FaEye />
                  </button>

                  {/* Edit */}

                  <button
                    onClick={() => setEditingExpense(expense)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-yellow-500 hover:text-white
                    transition-all duration-300"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  {/* Delete */}

                  <button
                    onClick={() => handleDelete(expense)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-red-500 hover:text-white
                    transition-all duration-300"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        /* Empty State */

        <div
          className="bg-white rounded-3xl
          border border-slate-200 shadow-sm
          py-20 flex flex-col
          items-center justify-center"
        >

          <div className="text-7xl mb-4">
            💰
          </div>

          <h2 className="text-3xl font-bold text-slate-700">
            No Expenses Found
          </h2>

          <p className="text-slate-500 mt-3">
            Try changing your search or filter.
          </p>

        </div>

      )}

      {/* View Modal */}

      {selectedExpense && (

        <div
          className="fixed inset-0 bg-black/40
          backdrop-blur-sm flex items-center
          justify-center z-50 p-4"
          onClick={() => setSelectedExpense(null)}
        >

          <div
            className="bg-white w-full max-w-lg
            rounded-3xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex justify-between items-center mb-6">

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Expense Details
                </h2>

                <p className="text-slate-500 mt-1">
                  {selectedExpense.expenseId}
                </p>
              </div>

              <button
                onClick={() => setSelectedExpense(null)}
                className="w-10 h-10 rounded-full
                bg-slate-100 hover:bg-red-500
                hover:text-white transition"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4">

              <div>
                <p className="text-sm text-slate-500">
                  Vehicle
                </p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.vehicle}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Category
                </p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.category}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Description
                </p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.description}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Amount
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{selectedExpense.amount.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Date
                </p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.date}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Payment Status
                </p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.payment}
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

      {/* Edit Modal */}

      {editingExpense && (

        <div
          className="fixed inset-0 bg-black/40
          backdrop-blur-sm flex items-center
          justify-center z-50 p-4"
          onClick={() => setEditingExpense(null)}
        >

          <div
            className="bg-white w-full max-w-2xl
            rounded-3xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex justify-between items-center mb-8">

              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Edit Expense
                </h2>

                <p className="text-slate-500 mt-1">
                  Update expense information.
                </p>
              </div>

              <button
                onClick={() => setEditingExpense(null)}
                className="w-10 h-10 rounded-full
                bg-slate-100 hover:bg-red-500
                hover:text-white transition"
              >
                ✕
              </button>

            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.target);

                const updatedExpense = {
                  ...editingExpense,
                  vehicle: formData.get("vehicle"),
                  category: formData.get("category"),
                  description: formData.get("description"),
                  amount: Number(formData.get("amount")),
                  date: formData.get("date"),
                  payment: formData.get("payment"),
                };

                handleEditSave(updatedExpense);
              }}
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Vehicle
                  </label>

                  <input
                    name="vehicle"
                    defaultValue={editingExpense.vehicle}
                    required
                    className="w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    focus:ring-2 focus:ring-blue-500
                    outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Category
                  </label>

                  <select
                    name="category"
                    defaultValue={editingExpense.category}
                    className="w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    focus:ring-2 focus:ring-blue-500
                    outline-none bg-white"
                  >
                    <option value="Fuel">Fuel</option>
                    <option value="Repairs">Repairs</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">

                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Description
                  </label>

                  <input
                    name="description"
                    defaultValue={editingExpense.description}
                    required
                    className="w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    focus:ring-2 focus:ring-blue-500
                    outline-none"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Amount
                  </label>

                  <input
                    type="number"
                    name="amount"
                    defaultValue={editingExpense.amount}
                    required
                    min="0"
                    className="w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    focus:ring-2 focus:ring-blue-500
                    outline-none"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    defaultValue={editingExpense.date}
                    required
                    className="w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    focus:ring-2 focus:ring-blue-500
                    outline-none"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Payment Status
                  </label>

                  <select
                    name="payment"
                    defaultValue={editingExpense.payment}
                    className="w-full px-4 py-3 rounded-xl
                    border border-slate-200
                    focus:ring-2 focus:ring-blue-500
                    outline-none bg-white"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                  </select>

                </div>

              </div>

              <div className="flex justify-end gap-4 mt-8">

                <button
                  type="button"
                  onClick={() => setEditingExpense(null)}
                  className="px-6 py-3 rounded-xl
                  border border-slate-300
                  text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl
                  bg-blue-600 hover:bg-blue-700
                  text-white font-medium shadow-lg
                  transition"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}