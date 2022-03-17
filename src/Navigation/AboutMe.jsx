import React from 'react';
import girl from "../img/girl.svg"

export const AboutMe = () => {
    return (
        <div className="part3-1">
            <img src={girl} alt="girl" />
            <div className="part3-text">
                <p className="p3">About me</p>
                <p className="learn-more">Learn more</p>
            </div>
        </div>
    )
};

