import React from 'react';
import logoTwo from "../img/logo2.svg"

export const FooterNav = () => {
    return (
        <div>
            <footer>
                <nav className="footernav">
                    <ul>
                        <img className="logo2" src={logoTwo} alt="Logo2" />
                        <li><a className="color" href="#">Home</a></li>
                        <li><a className="color" href="#">About me</a></li>
                        <li><a className="color" href="#">Products</a></li>
                        <li><a className="color" href="#">Contact me</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

