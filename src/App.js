import React from "react";
import Stocks from './components/Stocks'
import Stockpage from "./components/Stockpage";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Accounts from "./components/Accounts";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stocks />} />
          <Route path="/spotify" element={<Stockpage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/account" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
