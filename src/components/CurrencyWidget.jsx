import { useEffect, useState } from "react";
import axios from "axios";

function CurrencyWidget() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    loadRates();
  }, []);

  const loadRates = async () => {
    try {
      const res = await axios.get(
        "https://api.frankfurter.app/latest?from=INR&to=USD,EUR,GBP,JPY"
      );

      setRates(res.data.rates);
    } catch (error) {
      console.log(error);
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

      <p>USD : {rates.USD}</p>
      <p>EUR : {rates.EUR}</p>
      <p>GBP : {rates.GBP}</p>
      <p>JPY : {rates.JPY}</p>
    </div>
  );
}

export default CurrencyWidget;