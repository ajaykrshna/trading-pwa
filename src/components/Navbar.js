import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bottomnavbar">
            <Link to='/' className="links">
                <ion-icon name="home" id='bottomnavbariconshome'></ion-icon>
            </Link>
            <Link to='/discover' className="links">
                <ion-icon name="compass-outline" id='bottomnavbaricons'></ion-icon>
            </Link>
            <Link to='/test' className="links">
                <ion-icon name="bar-chart-outline" id='bottomnavbaricons'></ion-icon>
            </Link>
            <Link to='/account' className="links">
                <ion-icon name="person-outline" id='bottomnavbariconshome'></ion-icon>
            </Link>
        </div>
    )
}