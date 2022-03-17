import React from 'react';
import bluePillow from "../img/blue pilow.svg";
import line from "../img/line.svg";

export const Carrer = () => {
    return (
        <div>
            <div>
                <div className="part5">
                    <div className="part5-img"><img src={bluePillow} alt="" /></div>
                    <div className="part5-text">
                        <p className="p2">CARRER</p>
                        <p className="part4-text4">Collaboratively administrate turnkey channels whereas virtual e-tailers.</p>
                        <p className="part4-text4">Objectively seize scalable metrics whereas proactive e-services seamlessly empower fully researched growth strategies.</p>
                        <p className="part4-text4">And interoperable internal or “organic” sources.</p>
                        <button className="btn3">Learn more</button>
                    </div>
                </div>
                <img className="line" src={line} alt="line" />
            </div>
        </div>
    );
};

