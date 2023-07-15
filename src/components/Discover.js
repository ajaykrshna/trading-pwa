import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Stockcard from '../components/Stockcard'
import spotlogo from '../images/Spotifylogo.png'
/* import axios from "axios";
import Stocknames from '../Data/Stocknames' */
import Stockliup from '../Data/Stockliup'
import StockCardDisc from "./StockCardDisc";

const findata = Stockliup.Sheet1

/* const data = []
axios.get('./Stockslist.json')
    .then(res => { 
        data[0] = JSON.parse(JSON.stringify(res.data)).Sheet1 })
    .catch(err => console.log(err)) */

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

const searchResults = (search) => {
    const res = findata.filter(item => {
        return (
            item['Symbol'].toString()
                .toLowerCase()
                .indexOf(search.toLowerCase()) > -1) ||
            item['Company Name'].toString()
                .toLowerCase()
                .indexOf(search.toLowerCase()) > -1
    }).map(item => <StockCardDisc key={item["Sr. No."]} name={item["Company Name"]} symbol={item.Symbol} />)
    return (
        <div className="discover--search--results">
            <h2>Results</h2>
            <h1>{res.length ? res : <p style={{fontSize:'1.5rem', textAlign:"center"}}>No results</p>}</h1>
        </div>
    )
}


export default function Discover() {
    const [search, setSearch] = useState('')
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
                        name="search"
                        id="search"
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="discover--companies">
                    {search ? searchResults(search) : discoverStockpage}
                </div>
            </div>
            <Navbar />
        </>
    )
}

