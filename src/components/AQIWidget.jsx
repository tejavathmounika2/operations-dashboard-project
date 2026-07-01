import { useEffect, useState } from "react";
import axios from "axios";

function AQIWidget() {
  const [temperature, setTemperature] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    loadAQI();

    const timer = setInterval(() => {
      loadAQI();
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const loadAQI = async () => {
    try {
      const res = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current=temperature_2m"
      );

      setTemperature(res.data.current.temperature_2m);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#1976d2",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Air Quality / Temperature</h2>

      <h3>{temperature} °C</h3>

      <p>Last Updated: {lastUpdated}</p>
    </div>
  );
}

export default AQIWidget;