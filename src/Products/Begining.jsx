import React from 'react';
import couch from "../img/couch.svg";
import line from "../img/line.svg"

export const Begining = () => {
    return (
        <div>
            <div>
                <div className="part4">
                    <div className="part4-text">
                        <p className="p2">BEGINING</p>
                        <p className="part4-text4">Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful</p>
                        <p className="part4-text4">Dramatically synthesize integrated schemas. with optimal networks.</p>
                    </div>
                    <div className="part4-img"><img src={couch} alt="" /></div>
                </div>
                <img className="line" src={line} alt="line" />
            </div>
        </div>
    );
};

