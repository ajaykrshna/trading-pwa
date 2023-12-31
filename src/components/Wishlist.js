import { Link, useNavigate } from "react-router-dom"
import Stockcard from "./Stockcard"

export default function Wishlist() {
    const navigate = useNavigate()
    return (
        <div className="wishlist">
            <div className="wishlist--head">
                <div className="wishlist--head--wrap">
                    <div onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </div>
                    <h2>My Wishlist</h2>
                </div>
                <div className="wishlist--head--icons">
                    <ion-icon name="search-outline" id='search-outline-wishlist'></ion-icon>
                    <ion-icon name="add-outline" id="add-outline"></ion-icon>
                </div>
            </div>
            <div className="wishlist--stocks">
                <div className="wishlist--stocks--head">
                    <p>4 companies</p>
                </div>
                <div className="wishlist--stocks--list">
                    <Link to='/spotify' className="links"><Stockcard /></Link>
                    <Link to='/spotify' className="links"><Stockcard /></Link>
                    <Link to='/spotify' className="links"><Stockcard /></Link>
                    <Link to='/spotify' className="links"><Stockcard /></Link>
                </div>
            </div>
        </div>
    )
}