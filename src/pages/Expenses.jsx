import Navbar from '../components/Navbar';

const expenses = [
  { category: 'Fuel', amount: '$6,200', trend: '+7%' },
  { category: 'Repairs', amount: '$3,900', trend: '+3%' },
  { category: 'Insurance', amount: '$2,100', trend: 'Flat' }
];

export default function Expenses() {
  return (
    <div>
      <Navbar title="Expenses" />
      <table className="table">
        <thead>
          <tr><th>Category</th><th>Amount</th><th>Trend</th></tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.category}><td>{expense.category}</td><td>{expense.amount}</td><td>{expense.trend}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
