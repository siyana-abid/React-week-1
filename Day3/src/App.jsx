import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function switchTheme() {
    setDarkMode((previousMode) => !previousMode);
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
         padding: "20px",

      }}
    >
      <h1
       style={{
      color: darkMode ? "white" : "black",
    }}
      >
        welcome
      </h1>

      <button onClick={switchTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default App;