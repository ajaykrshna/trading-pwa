import React from "react";
import Stockchart from "./Stockchart";
import { Link } from "react-router-dom";

function Stockpage() {
    return (
        <>
            <div className="navbar">
                <Link to='/'>
                    <ion-icon name="arrow-back-outline" id='arrow-back-outline'></ion-icon>
                </Link>
                <div className="navbar--iconwrap">
                    <ion-icon name="paper-plane-outline" id='paper-plane-outline'></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
            <div className="stockpage">
                <Stockchart />
                <div className="stockpage--data">
                    <h1>$130.00</h1>
                    <div className="stockpage--data--wrap">
                        <p className="stockpage--data--d">$5.96</p>
                        <p className="stockpage--data--d">(2.16%)</p>
                        <p className="stockpage--data--l">Last close</p>
                    </div>
                </div>
                <div className="stockpage--data">
                    <h1>$130.00</h1>
                    <div className="stockpage--data--wrap">
                        <p className="stockpage--data--d">$5.96</p>
                        <p className="stockpage--data--d">(2.16%)</p>
                        <p className="stockpage--data--l">Last close</p>
                    </div>
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
            {buysell}
        </>
    );
}

const buysell = (
    <div className="stockchart--buysell">
        <button className="stockchart--sell">Sell</button>
        <button className="stockchart--buy">Buy</button>
    </div>
)

export default Stockpage;