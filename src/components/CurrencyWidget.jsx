import { useEffect, useState } from "react";
import axios from "axios";

function CurrencyWidget() {
  const [rates, setRates] = useState({
    USD: "",
    EUR: "",
    GBP: "",
    JPY: "",
  });

  useEffect(() => {
    loadRates();
  }, []);

  const loadRates = async () => {
    try {
      const res = await axios.get(
        "https://api.frankfurter.dev/v1/latest?from=INR&to=USD,EUR,GBP,JPY"
      );

      setRates(res.data.rates);
    } catch (error) {
      console.log("Currency API Error:", error);
    }
  };

  return (
    <div
      style={{
        background: "#009688",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>💱 Currency Rates</h2>

      <p>USD : {rates.USD || "Loading..."}</p>
      <p>EUR : {rates.EUR || "Loading..."}</p>
      <p>GBP : {rates.GBP || "Loading..."}</p>
      <p>JPY : {rates.JPY || "Loading..."}</p>
    </div>
  );
}

export default CurrencyWidget;