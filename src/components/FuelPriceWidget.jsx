function FuelPriceWidget() {
  const petrolPrice = "₹108.50 / L";
  const dieselPrice = "₹96.72 / L";

  return (
    <div
      style={{
        background: "#4CAF50",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <h2>⛽ Fuel Prices</h2>

      <h3>Petrol: {petrolPrice}</h3>

      <h3>Diesel: {dieselPrice}</h3>
    </div>
  );
}

export default FuelPriceWidget;