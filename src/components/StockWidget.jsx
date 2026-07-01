import { useEffect, useState } from "react";
import axios from "axios";

function StockWidget() {
  const [price, setPrice] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    loadStock();

    const timer = setInterval(() => {
      loadStock();
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const loadStock = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );

      setPrice(res.data.bitcoin.usd);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#4caf50",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Market Price</h2>

      <h3>Bitcoin: ${price}</h3>

      <p>Last Updated: {lastUpdated}</p>
    </div>
  );
}

export default StockWidget;