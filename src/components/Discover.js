import React from "react";
import Navbar from '../components/Navbar'
import Stockcard from '../components/Stockcard'
import spotlogo from '../images/Spotifylogo.png'

export default function Discover() {
    return (
        <>
            <div className="discover">
                <div className="discover--head">
                    <div className="discover--head--wrap">
                        <ion-icon name="planet" id='planet--icon'></ion-icon>
                        <h3>Discover</h3>
                    </div>
                    <ion-icon name="options-outline" id='options-icon'></ion-icon>
                </div>
                <div className="discover--search">
                    <ion-icon name="search-outline" id='search-icon'></ion-icon>
                    <input
                        type="text"
                        placeholder="Search stock"
                    />
                </div>
                <div className="discover--companies">
                    {discoverStockpage}
                </div>
            </div>
            <Navbar />
        </>
    )
}

const discoverStockCard = (
    <div className="discover--card">
        <img src={spotlogo} />
        <h3>SPOT</h3>
        <p>+ 12.37%</p>
    </div>
)
const discoverStockpage = (
    <>
        <h2>Top Stocks</h2>
        <div className="discover--companies--wrap">
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
            {discoverStockCard}
        </div>
    </>
)



const searchResults = (
    <div className="discover--search--results">
        <Stockcard />
    </div>
)

