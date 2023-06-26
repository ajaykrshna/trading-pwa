import React from "react";
import dp from '../images/dp.png'
import '../index.css'

function Stockcard() {
    return (
        <div className="stockcard">
            <h2>Spotify</h2>
            <div className="stockcard--wrap">
                <img src={dp} alt="graph" ></img>
                <div className="stockcard--price">
                    <p className="stockcard--price--main">$150.00</p>
                    <p className="stockcard--price--profit">+2.94%</p>
                </div>
            </div>
        </div>
    );
}

export default Stockcard;
