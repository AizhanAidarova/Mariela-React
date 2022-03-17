import React from "react";
import logo from "../img/logo.svg"
import telezhka from "../img/telejka.svg"

export const Header = () => {
    return(
        <header className="navbar">
            <div>
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact me</a></li>
                    <img className="telejka" src={telezhka} alt="Telejka" />
                </ul>
            </nav>
        </header>


    )
}

