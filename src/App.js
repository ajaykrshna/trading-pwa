import React from "react";
import Stocks from './components/Stocks'
import Stockpage from "./components/Stockpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Stocks />
      <Navbar />
    </div>
  );
}

export default App;
