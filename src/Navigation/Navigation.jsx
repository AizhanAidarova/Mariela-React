import React from 'react';
import {AboutMe} from "./AboutMe";
import {MyProducts} from "./MyProducts";
import {Contact} from "./Contact";

export const Navigation = () => {
    return (
        <div className="part3">
            <AboutMe/>
            <MyProducts/>
            <Contact/>
        </div>
    );
};

