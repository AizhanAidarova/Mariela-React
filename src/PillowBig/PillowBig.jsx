import React from 'react';
import pillow from "../img/pilow.svg"

export const PillowBig = () => {
    return (
        <div>
            <div className="main-part">
                <div className="part1"><img className="part1-img" src={pillow} alt="" /></div>
                <div className="part1-2" />
                <div className="part1-text">
                    <p className="p1">NEW</p>
                    <p className="part1-text1">Spring Cushion Collection 2019</p>
                    <button className="btn">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

