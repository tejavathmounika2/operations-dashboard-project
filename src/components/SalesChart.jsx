import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function SalesChart() {
  const data = [
    { month: "Jan", sales: 42000 },
    { month: "Feb", sales: 51000 },
    { month: "Mar", sales: 47000 },
    { month: "Apr", sales: 65000 },
    { month: "May", sales: 72000 },
    { month: "Jun", sales: 83000 },
  ];

  return (
    <div
      style={{
        background: "white",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Monthly Sales Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#2196f3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;