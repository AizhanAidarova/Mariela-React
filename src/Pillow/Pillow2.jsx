import React from 'react';
import pillowFour from "../img/pilow4.svg";
import pillowFive from "../img/pilow5.svg";
import pillowSix from "../img/pilow6.svg";


export const Pillow2 = () => {
    return (
        <div>
            <div className="pilow">
                <div className="pilow1">
                    <img src={pillowFour} alt="pilow4" />
                    <p className="pilow-text">Plated Cushion</p>
                    <p className="dollar">$ 19.99 USD</p>
                </div>
                <div className="pilow2">
                    <img src={pillowFive} alt="pilow5" />
                    <p className="pilow-text">Silver Cushion</p>
                    <p className="dollar">$ 19.99 USD</p>
                </div>
                <div className="pilow3">
                    <img src={pillowSix} alt="pilow6" />
                    <p className="pilow-text">Deep Blue Cushion</p>
                    <p className="dollar">$ 19.99 USD</p>
                </div>
            </div>
        </div>
    );
};

