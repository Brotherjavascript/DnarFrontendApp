import React from 'react';

const InfoFactsUI = () => {
    return (
        <>
            <br/>
            <br/>
            <div className="card infoFactsCard">
                <p className="eventCardTitle">Description</p>
                <hr className="infoFactsTextLine"/>
                <div className="row">
                    <div className="col-8">
                        <p className="infoFactsText">Hashing Algorithm</p>
                    </div>

                    <div className="col-4">
                        <p className="infoFactsText">SHA-256</p>
                    </div>

                    <div className="col-8">
                        <p className="infoFactsText">Country Origin</p>
                    </div>

                    <div className="col-4">
                        <p className="infoFactsText">Unknown</p>
                    </div>
                </div>

                <div className="card infoFactsSubCard">
                    <div className="row">
                        <div className="col-8">
                            <p className="infoFactsText">Total Supply</p>
                        </div>

                        <div className="col-4">
                            <p className="infoFactsText">2,000,000</p>
                        </div>

                        <div className="col-8">
                            <p className="infoFactsText">Max Supply</p>
                        </div>

                        <div className="col-4">
                            <p className="infoFactsText">2,000,000</p>
                        </div>

                        <div className="col-8">
                            <p className="infoFactsText">Circulating</p>
                        </div>

                        <div className="col-4">
                            <p className="infoFactsText">1,830,000</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};
export default InfoFactsUI;
