import { useEffect, useState } from "react";
import axios from "axios";

function QuoteWidget() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    loadQuote();
  }, []);

  const loadQuote = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/quotes/random");

      setQuote(res.data.quote);
      setAuthor(res.data.author);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#673ab7",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>💡 Quote of the Day</h2>

      <p>"{quote}"</p>

      <h4>- {author}</h4>
    </div>
  );
}

export default QuoteWidget;