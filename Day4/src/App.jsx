import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes.slice(0, 10));
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
        padding: "30px",
        textAlign:"left",
      }}
    >
      <h1>Quotes</h1>

      {quotes.map((quote, index) => (
        <div key={quote.id}>
          <h2>
            {index + 1}. {quote.quote}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;