import { useEffect, useState } from "react";

function GoldWidget() {
  const [goldPrice, setGoldPrice] = useState("");
  const [silverPrice, setSilverPrice] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    loadPrices();

    const timer = setInterval(() => {
      loadPrices();
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const loadPrices = () => {
    // Demo values
    setGoldPrice("₹9,850 / gram");
    setSilverPrice("₹115 / gram");
    setLastUpdated(new Date().toLocaleTimeString());
  };

  return (
    <div
      style={{
        background: "#FFD700",
        color: "black",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Gold & Silver Prices</h2>

      <h3>🥇 Gold: {goldPrice}</h3>

      <h3>🥈 Silver: {silverPrice}</h3>

      <p>Last Updated: {lastUpdated}</p>
    </div>
  );
}

export default GoldWidget;