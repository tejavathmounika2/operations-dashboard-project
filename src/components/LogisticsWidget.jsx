function LogisticsWidget() {
  return (
    <div
      style={{
        background: "#FF7043",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>🚚 Logistics Dashboard</h2>

      <h3>Trucks In : 128</h3>

      <h3>Trucks Out : 121</h3>

      <h3>Pending Dispatch : 18</h3>

      <p>Status : 🟢 Normal Operations</p>
    </div>
  );
}

export default LogisticsWidget;