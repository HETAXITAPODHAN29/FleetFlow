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
  FaTimes,
} from "react-icons/fa";

const initialExpenses = [
  {
    id: 1,
    category: "Fuel",
    amount: 6200,
    date: "2026-08-10",
    vehicle: "FV-214",
    description: "Monthly fuel expense",
  },
  {
    id: 2,
    category: "Repairs",
    amount: 3900,
    date: "2026-08-08",
    vehicle: "FV-318",
    description: "Brake and tire repair",
  },
  {
    id: 3,
    category: "Insurance",
    amount: 2100,
    date: "2026-08-05",
    vehicle: "FV-102",
    description: "Vehicle insurance",
  },
  {
    id: 4,
    category: "Fuel",
    amount: 4800,
    date: "2026-08-03",
    vehicle: "FV-102",
    description: "Fuel refill",
  },
];

export default function Expenses() {
  const [expenseList, setExpenseList] = useState(initialExpenses);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [editingExpense, setEditingExpense] = useState(null);
  const [deleteExpense, setDeleteExpense] = useState(null);

  // -------------------- Statistics --------------------

  const totalExpenses = expenseList.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const fuelExpenses = expenseList
    .filter((expense) => expense.category === "Fuel")
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const repairExpenses = expenseList
    .filter((expense) => expense.category === "Repairs")
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const insuranceExpenses = expenseList
    .filter((expense) => expense.category === "Insurance")
    .reduce((total, expense) => total + Number(expense.amount), 0);

  const stats = [
    {
      title: "Total Expenses",
      value: `$${totalExpenses.toLocaleString()}`,
      icon: <FaMoneyBillWave />,
      color: "bg-blue-500",
    },
    {
      title: "Fuel",
      value: `$${fuelExpenses.toLocaleString()}`,
      icon: <FaGasPump />,
      color: "bg-orange-500",
    },
    {
      title: "Repairs",
      value: `$${repairExpenses.toLocaleString()}`,
      icon: <FaTools />,
      color: "bg-yellow-500",
    },
    {
      title: "Insurance",
      value: `$${insuranceExpenses.toLocaleString()}`,
      icon: <FaShieldAlt />,
      color: "bg-green-500",
    },
  ];

  // -------------------- Search + Filter --------------------

  const filteredExpenses = expenseList.filter((expense) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      expense.category.toLowerCase().includes(searchText) ||
      expense.vehicle.toLowerCase().includes(searchText) ||
      expense.description.toLowerCase().includes(searchText);

    const matchesCategory =
      categoryFilter === "All" ||
      expense.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // -------------------- Delete --------------------

  const handleDelete = () => {
    if (!deleteExpense) return;

    setExpenseList((currentExpenses) =>
      currentExpenses.filter(
        (expense) => expense.id !== deleteExpense.id
      )
    );

    setDeleteExpense(null);
  };

  // -------------------- Create --------------------

  const handleCreate = (newExpense) => {
    setExpenseList((currentExpenses) => [
      ...currentExpenses,
      newExpense,
    ]);

    setShowCreateModal(false);
  };

  // -------------------- Edit --------------------

  const handleEditSave = (updatedExpense) => {
    setExpenseList((currentExpenses) =>
      currentExpenses.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    );

    setEditingExpense(null);
  };

  // -------------------- UI --------------------

  return (
    <div className="p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Expenses
          </h1>

          <p className="text-slate-500 mt-2">
            Track and manage fleet expenses.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700
          text-white px-6 py-3 rounded-2xl shadow-lg
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
            className="bg-white rounded-3xl p-6 border border-slate-200
            shadow-sm hover:shadow-xl hover:-translate-y-1
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
                className={`${item.color} text-white p-4 rounded-2xl text-2xl`}
              >
                {item.icon}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Search + Filter */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 mb-8">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="relative flex-1">

            <FaSearch
              className="absolute left-4 top-1/2
              -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search category, vehicle or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl
              border border-slate-200 focus:ring-2
              focus:ring-blue-500 outline-none"
            />

          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-5 py-3 rounded-2xl border border-slate-200
            focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="All">All Categories</option>
            <option value="Fuel">Fuel</option>
            <option value="Repairs">Repairs</option>
            <option value="Insurance">Insurance</option>
          </select>

        </div>

      </div>

      {/* Result Count */}

      <div className="text-slate-500 mb-4">
        Showing {filteredExpenses.length} expense(s)
      </div>

      {/* Expense List */}

      {filteredExpenses.length > 0 ? (

        <div className="bg-white rounded-3xl border border-slate-200
        shadow-sm overflow-hidden">

          {filteredExpenses.map((expense, index) => (

            <div
              key={expense.id}
              className={`p-6 hover:bg-slate-50 transition-all duration-300 ${
                index !== filteredExpenses.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >

              <div className="flex flex-col xl:flex-row
              xl:items-center justify-between gap-6">

                {/* Expense Information */}

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-2">

                    <h2 className="text-lg font-bold text-slate-800">
                      {expense.category}
                    </h2>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        expense.category === "Fuel"
                          ? "bg-orange-100 text-orange-700"
                          : expense.category === "Repairs"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {expense.category}
                    </span>

                  </div>

                  <p className="text-2xl font-bold text-slate-800">
                    ${Number(expense.amount).toLocaleString()}
                  </p>

                  <div className="flex flex-wrap gap-x-8 gap-y-2
                  mt-3 text-sm text-slate-500">

                    <span>
                      🚚 {expense.vehicle}
                    </span>

                    <span>
                      📅 {expense.date}
                    </span>

                    <span>
                      📝 {expense.description}
                    </span>

                  </div>

                </div>

                {/* Actions */}

                <div className="flex gap-3">

                  <button
                    onClick={() => setSelectedExpense(expense)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-blue-500 hover:text-white
                    transition-all duration-300"
                    title="View"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() => setEditingExpense(expense)}
                    className="p-3 rounded-xl bg-slate-100
                    hover:bg-yellow-500 hover:text-white
                    transition-all duration-300"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => setDeleteExpense(expense)}
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

        <div className="bg-white rounded-3xl border border-slate-200
        shadow-sm py-20 flex flex-col items-center justify-center">

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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm
          flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedExpense(null)}
        >

          <div
            className="bg-white w-full max-w-lg rounded-3xl
            shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex justify-between items-center mb-8">

              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Expense Details
                </h2>

                <p className="text-slate-500 mt-1">
                  Complete expense information.
                </p>
              </div>

              <button
                onClick={() => setSelectedExpense(null)}
                className="w-10 h-10 rounded-full bg-slate-100
                hover:bg-red-500 hover:text-white
                flex items-center justify-center"
              >
                <FaTimes />
              </button>

            </div>

            <div className="space-y-4">

              <div>
                <p className="text-sm text-slate-500">Category</p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.category}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Amount</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${Number(selectedExpense.amount).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Vehicle</p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.vehicle}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Date</p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.date}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Description</p>
                <p className="font-semibold text-slate-800">
                  {selectedExpense.description}
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

      {/* Create Modal */}

      {showCreateModal && (

        <ExpenseModal
          title="Add Expense"
          onClose={() => setShowCreateModal(false)}
          onSave={handleCreate}
        />

      )}

      {/* Edit Modal */}

      {editingExpense && (

        <ExpenseModal
          title="Edit Expense"
          expense={editingExpense}
          onClose={() => setEditingExpense(null)}
          onSave={handleEditSave}
        />

      )}

      {/* Delete Modal */}

      {deleteExpense && (

        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm
          flex items-center justify-center z-50 p-4"
        >

          <div className="bg-white w-full max-w-md rounded-3xl
          shadow-2xl p-8">

            <h2 className="text-2xl font-bold text-slate-800">
              Delete Expense?
            </h2>

            <p className="text-slate-500 mt-3">
              Are you sure you want to delete this expense?
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setDeleteExpense(null)}
                className="px-6 py-3 rounded-xl border
                border-slate-300 text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-6 py-3 rounded-xl bg-red-600
                hover:bg-red-700 text-white"
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}


// ======================================================
// Expense Modal
// ======================================================

function ExpenseModal({
  title,
  expense,
  onClose,
  onSave,
}) {

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedExpense = {
      id: expense?.id || Date.now(),
      category: formData.get("category"),
      amount: Number(formData.get("amount")),
      date: formData.get("date"),
      vehicle: formData.get("vehicle"),
      description: formData.get("description"),
    };

    onSave(updatedExpense);
  };

  return (

    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm
      flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >

      <div
        className="bg-white w-full max-w-2xl rounded-3xl
        shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-slate-800">
              {title}
            </h2>

            <p className="text-slate-500 mt-1">
              {expense
                ? "Update expense information."
                : "Add a new fleet expense."}
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100
            hover:bg-red-500 hover:text-white
            flex items-center justify-center transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Category */}

            <div>

              <label className="block text-sm font-medium
              text-slate-600 mb-2">
                Category
              </label>

              <select
                name="category"
                defaultValue={expense?.category || "Fuel"}
                required
                className="w-full px-4 py-3 rounded-xl
                border border-slate-200 focus:ring-2
                focus:ring-blue-500 outline-none bg-white"
              >
                <option value="Fuel">Fuel</option>
                <option value="Repairs">Repairs</option>
                <option value="Insurance">Insurance</option>
              </select>

            </div>

            {/* Amount */}

            <div>

              <label className="block text-sm font-medium
              text-slate-600 mb-2">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                defaultValue={expense?.amount || ""}
                placeholder="Enter amount"
                required
                min="0"
                className="w-full px-4 py-3 rounded-xl
                border border-slate-200 focus:ring-2
                focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Vehicle */}

            <div>

              <label className="block text-sm font-medium
              text-slate-600 mb-2">
                Vehicle
              </label>

              <input
                name="vehicle"
                defaultValue={expense?.vehicle || ""}
                placeholder="Enter vehicle"
                required
                className="w-full px-4 py-3 rounded-xl
                border border-slate-200 focus:ring-2
                focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Date */}

            <div>

              <label className="block text-sm font-medium
              text-slate-600 mb-2">
                Date
              </label>

              <input
                type="date"
                name="date"
                defaultValue={expense?.date || ""}
                required
                className="w-full px-4 py-3 rounded-xl
                border border-slate-200 focus:ring-2
                focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Description */}

            <div className="md:col-span-2">

              <label className="block text-sm font-medium
              text-slate-600 mb-2">
                Description
              </label>

              <textarea
                name="description"
                defaultValue={expense?.description || ""}
                placeholder="Enter expense description"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-xl
                border border-slate-200 focus:ring-2
                focus:ring-blue-500 outline-none resize-none"
              />

            </div>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border
              border-slate-300 text-slate-600
              hover:bg-slate-100 transition"
            >
              Cancel
            </button>

 
  );
}