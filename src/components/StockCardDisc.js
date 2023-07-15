import React from "react";
import '../index.css'

function StockCardDisc(props) {
    return (
        <div className="stockcarddisc">
            <h2>{props.name}</h2>
            <h3>{props.symbol}</h3>
        </div>
    );
}

export default StockCardDisc;
