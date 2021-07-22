import React from 'react';
import InfoCardUI from "./InfoCardUI";
import InfoFactsUI from "./InfoFactsUI";

const InfoUI = () => {
    return (
        <>
            <div className="card infoCard">
                <div className="card-header">
                    <p className="infoTitle">Info Card <img src={process.env.PUBLIC_URL + 'images/bitcoin.png'} className="infoImg"/></p>
                </div>
                <div className="card-body">
                    <InfoCardUI/>
                    <InfoFactsUI/>
                </div>
            </div>
        </>
    )
};
export default InfoUI;
