import React from "react";
import Stockcard from "./Stockcard";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Stocks() {
  return (
    <div className="stocks">
      <h1 className="stocks--mainh1">Stocks</h1>
      <Link to='/spotify'><Stockcard /></Link>
      <Link to='/spotify'><Stockcard /></Link>
      <Link to='/spotify'><Stockcard /></Link>
      <Link to='/spotify'><Stockcard /></Link>
      <Link to='/spotify'><Stockcard /></Link>
      <Link to='/spotify'><Stockcard /></Link>
      <Link to='/spotify'><Stockcard /></Link>
      <Navbar/>
    </div>
  );
}



export default Stocks;
