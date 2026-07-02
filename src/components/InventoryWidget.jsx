function InventoryWidget() {
  return (
    <div
      style={{
        background: "#607D8B",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>📦 Inventory Status</h2>

      <h3>Iron Ore : 18,500 MT</h3>

      <h3>Pellets : 7,200 MT</h3>

      <h3>Limestone : 3,450 MT</h3>

      <p>Status : ✅ Sufficient Stock</p>
    </div>
  );
}

export default InventoryWidget;