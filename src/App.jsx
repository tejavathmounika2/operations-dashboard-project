import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { getCrypto } from "./services/api";
import CryptoChart from "./components/CryptoChart";
import EmployeeCards from "./components/EmployeeCards";
import SalesChart from "./components/SalesChart";
import AQIWidget from "./components/AQIWidget";
import StockWidget from "./components/StockWidget";
import GoldWidget from "./components/GoldWidget";

function App() {
  const [bitcoin, setBitcoin] = useState("");
  const [ethereum, setEthereum] = useState("");
  const [usdInr, setUsdInr] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [weather, setWeather] = useState("");
  const [gdp, setGdp] = useState("");
  const [news, setNews] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");

  // Crypto data from services/api.js
  const loadCrypto = async () => {
    const data = await getCrypto();

    setBitcoin(data.bitcoin);
    setEthereum(data.ethereum);
  };

  useEffect(() => {
    // Cache
    const savedRate = localStorage.getItem("usdInr");
    if (savedRate) {
      setUsdInr(savedRate);
    }

    loadCrypto();
    getCurrency();
    getWeather();
    getGDP();
    getNews();
    getTime();

    setLastUpdated(new Date().toLocaleString());

    // Refresh every 60 sec
    const timer = setInterval(() => {
      loadCrypto();
      getCurrency();
      getWeather();
      getGDP();
      getNews();

      setLastUpdated(new Date().toLocaleString());
    }, 60000);

    // Clock every second
    const clock = setInterval(() => {
      getTime();
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(clock);
    };
  }, []);

  const getCurrency = async () => {
    try {
      const res = await axios.get(
        "https://api.frankfurter.dev/v1/latest?from=USD&to=INR"
      );

      setUsdInr(res.data.rates.INR);

      // Cache
      localStorage.setItem("usdInr", res.data.rates.INR);
    } catch (error) {
      console.log(error);
    }
  };

  const getTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  const getWeather = async () => {
    try {
      const res = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current=temperature_2m"
      );

      setWeather(res.data.current.temperature_2m);
    } catch (error) {
      console.log(error);
    }
  };

  const getGDP = async () => {
    try {
      const res = await axios.get(
        "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.CD?format=json"
      );

      setGdp(Number(res.data[1][0].value).toLocaleString());
    } catch (error) {
      console.log(error);
    }
  };

  const getNews = async () => {
    try {
      const res = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=technology"
      );

      setNews(res.data.hits.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Operations Dashboard</h1>

      <p>
        <b>Last Updated:</b> {lastUpdated}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ background: "orange", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Bitcoin</h3>
          <h2>${bitcoin}</h2>
        </div>

        <div style={{ background: "violet", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Ethereum</h3>
          <h2>${ethereum}</h2>
        </div>

        <div style={{ background: "green", color: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>USD → INR</h3>
          <h2>{usdInr}</h2>
        </div>

        <div style={{ background: "skyblue", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Current Time</h3>
          <h2>{currentTime}</h2>
        </div>

        <div style={{ background: "tomato", color: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>Hyderabad Weather</h3>
          <h2>{weather} °C</h2>
        </div>

        <div style={{ background: "teal", color: "white", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h3>India GDP</h3>
          <h2>{gdp}</h2>
        </div>

        <div style={{ background: "purple", color: "white", padding: "20px", borderRadius: "10px", width: "350px" }}>
          <h3>Tech News</h3>

          {news.length === 0 ? (
            <p>Loading...</p>
          ) : (
            news.map((item) => (
              <p key={item.objectID}>• {item.title}</p>
            ))
          )}
        </div>
            </div>

      <CryptoChart />

      <EmployeeCards />

      <SalesChart />

      <AQIWidget />

      <StockWidget />

      <GoldWidget />

    </div>
  );
}

export default App;

