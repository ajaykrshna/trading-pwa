import React from "react";
import Stockcard from "./Stockcard";
import Navbar from "./Navbar";

function Stocks() {
  return (
    <div className="stocks">
      <h1 className="stocks--mainh1">Stocks</h1>
      <Stockcard />
      <Stockcard />
      <Stockcard />
      <Stockcard />
      <Stockcard />
      <Stockcard />
      <Stockcard />
      <Stockcard />
      <Navbar/>
    </div>
  );
}



export default Stocks;
