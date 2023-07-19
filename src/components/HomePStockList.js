import React from "react";
import Stockcard from "./Stockcard";
import Navbar from "./Navbar";
import { Chart } from "./Stockcard";
import { Link, useNavigate } from "react-router-dom";

function HomePStockList() {
  const navigate = useNavigate()
  return (
    <>
      <div className="homepage">
        <div className="homepage--head">
          <div className="homepage--head--head">
            <h2>Trade!</h2>
            <div className="homepage--head--head--wrap">
              <div onClick={() => navigate('/wishlist')}>
                <ion-icon name="heart-outline" id='heart-outline'></ion-icon>
              </div>
              <div onClick={() => navigate('/notifications')}>
                <ion-icon name="notifications-outline" id='notifications-outline'></ion-icon>
              </div>
            </div>
          </div>
          <div className="homepage--head--bal">
            <h3>5,55,555 INR</h3>
            <p>Balance available</p>
          </div>
        </div>
        <div className="homepage--wishlist">
          <div className="homepage--wishlist--head">
            <h3>My Wishlist</h3>
            <div onClick={() => navigate('/wishlist')}>
              <ion-icon name="arrow-forward-outline" id="arrow-forward-outline"></ion-icon>
            </div>
          </div>
          <div className="homepage--wishlist--stocks">
            <WishlistStockCard
              symbol='TWTR'
              percentage='- 1.98'
              logo='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553' />
            <WishlistStockCard
              symbol='AAPL'
              percentage='+ 2.45'
              logo='https://ww1.freelogovectors.net/wp-content/uploads/2023/03/apple_logo-freelogovectors.net_-1.png' />
          </div>
        </div>
        <div className="stocks">
          <div className="stocks--main--wrap">
            <h1 className="stocks--mainh1">My Stocks</h1>
            <div onClick={() => navigate('/mystocks')}>
              <ion-icon name="arrow-forward-outline" id="arrow-forward-outline"></ion-icon>
            </div>
          </div>
          <Link to='/spotify' className="links"><Stockcard /></Link>
          <Link to='/spotify' className="links"><Stockcard /></Link>
          <Link to='/spotify' className="links"><Stockcard /></Link>
          <Link to='/spotify' className="links"><Stockcard /></Link>
          <Link to='/spotify' className="links"><Stockcard /></Link>
          <Link to='/spotify' className="links"><Stockcard /></Link>
          <Link to='/spotify' className="links"><Stockcard /></Link>
          <Link to='/spotify' className="links"><Stockcard /></Link>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default HomePStockList;

const WishlistStockCard = (props) => {
  return (
    <div className="homepage--wishlist--card">
      <div className="homepage--wishlist--card--head">
        <img alt="company logo" src={props.logo} />
        <div className="homepage--wishlist--card--head--wrap">
          <h4>{props.symbol}</h4>
          <p style={props.percentage.charAt() === '+' ?
            { color: '#12d18e' } :
            { color: "#eb5168" }}>{props.percentage}%</p>
        </div>
      </div>
      <div className="homepage--wishlist--card--graph">
        {Chart}
      </div>
    </div>
  )
}
