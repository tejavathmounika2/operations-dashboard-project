import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CryptoChart() {
  const data = [
    { name: "Mon", bitcoin: 95000 },
    { name: "Tue", bitcoin: 98000 },
    { name: "Wed", bitcoin: 100000 },
    { name: "Thu", bitcoin: 102000 },
    { name: "Fri", bitcoin: 105000 },
    { name: "Sat", bitcoin: 107000 },
    { name: "Sun", bitcoin: 108452 },
  ];

  return (
    <div
      style={{
        marginTop: "30px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Bitcoin Weekly Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="bitcoin"
            stroke="#f7931a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CryptoChart;