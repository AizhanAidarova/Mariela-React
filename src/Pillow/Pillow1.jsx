import React from 'react';
import pillowOne from "../img/pilow1.svg";
import pillowTwo from "../img/pilow2.svg";
import pillowThree from "../img/pilow3.svg";


export const Pillow1 = () => {
    return (
        <div>
            <div className="pilow">
                <div className="pilow1">
                    <img src={pillowOne} alt="pilow1" />
                    <p className="pilow-text">Plated Cushion</p>
                    <p className="dollar">$ 19.99 USD</p>
                </div>
                <div className="pilow2">
                    <img src={pillowTwo} alt="pilow2" />
                    <p className="pilow-text">Silver Cushion</p>
                    <p className="dollar">$ 19.99 USD</p>
                </div>
                <div className="pilow3">
                    <img src={pillowThree} alt="pilow3" />
                    <p className="pilow-text">Deep Blue Cushion</p>
                    <p className="dollar">$ 19.99 USD</p>
                </div>
            </div>
        </div>
    );
};

