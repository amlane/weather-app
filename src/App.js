import React from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather App</p>
        <Cards />
      </header>
    </div>
  );
}

export default App;
