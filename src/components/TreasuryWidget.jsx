function TreasuryWidget() {
  return (
    <div
      style={{
        background: "#00695C",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>💰 Treasury Dashboard</h2>

      <h3>Available Cash : ₹28.50 Cr</h3>

      <h3>Today's Payments : ₹3.80 Cr</h3>

      <h3>Today's Receipts : ₹5.20 Cr</h3>

      <p>Net Position : +₹1.40 Cr</p>
    </div>
  );
}

export default TreasuryWidget;