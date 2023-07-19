import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bottomnavbar">
            <NavLink to='/stocks' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "navlinks" : "pending"
            }>
                <ion-icon name="home" id='bottomnavbaricons'></ion-icon>
            </NavLink>
            <NavLink to='/discover' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "navlinks" : "pending"
            }>
                <ion-icon name="compass" id='bottomnavbaricons'></ion-icon>
            </NavLink>
            <NavLink to='/test' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "navlinks" : "pending"
            }>
                <ion-icon name="bar-chart" id='bottomnavbaricons'></ion-icon>
            </NavLink>
            <NavLink to='/account' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "navlinks" : "pending"
            }>
                <ion-icon name="person" id='bottomnavbaricons'></ion-icon>
            </NavLink>
        </div>
    )
}