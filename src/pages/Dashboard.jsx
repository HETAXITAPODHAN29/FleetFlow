import Navbar from '../components/Navbar';
import Card from '../components/Card';

const cards = [
  { title: 'Active vehicles', value: '128', subtitle: '+8% vs last week' },
  { title: 'On-time rate', value: '94%', subtitle: 'Across all routes' },
  { title: 'Open maintenance', value: '12', subtitle: '3 critical alerts' },
  { title: 'Fuel spend', value: '$18.4K', subtitle: 'This month' }
];

export default function Dashboard() {
  return (
    <div>
      <Navbar title="Dashboard" />
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
