import React from 'react';
import home from "../img/home.svg";
import car from "../img/car.svg";
import finger from "../img/finger.svg";

export const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="home">
                    <img className="imghome" src={home} alt="home" />
                    <p className="shipping">Safe shopping</p>
                    <p className="footer-text">Buy with confidence</p>
                </div>
                <div className="car">
                    <img className="imgcar" src={car} alt="car" />
                    <p className="shipping">Fast shipping</p>
                    <p className="footer-text">Get your product fast</p>
                </div>
                <div className="finger">
                    <img className="imgfinger" src={finger} alt="finger" />
                    <p className="shipping">Satisfaction guarantee</p>
                    <p className="footer-text">Or get your money back</p>
                </div>
            </div>
        </div>
    );
};

