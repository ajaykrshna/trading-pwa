import React from "react";
import spotify from '../images/Spotifylogo.png'
import Stockchart from "./Stockchart";

function Stockpage() {
    return (
        <div className="stockpage">
            <div className="navbar">
                navbar
            </div>
            <div className="stockpage--head">
                <div className="stockpage--head--wrap--logo">
                    <img src={spotify} />
                    <h2>Spotify</h2>
                </div>
                <div className="stockpage--head--wrap--price">
                    <p className="stockpage--head--la">Last close</p>
                    <p className="stockpage--head--price">$150.00</p>
                </div>
            </div>
            <div className="graph">
                <Stockchart/>
            </div>
            <div className="stockpage--data">
                <h1>$130.00</h1>
                <div className="stockpage--data--wrap">
                    <p className="stockpage--data--d">$5.96</p>
                    <p className="stockpage--data--d">(2.16%)</p>
                    <p className="stockpage--data--l">Last close</p>
                </div>
            </div>
        </div>
    );
}

export default Stockpage;
