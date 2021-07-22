import React from 'react';

const ExchangeUI = () => {
    return(
        <>
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <div className="card exchangeCard">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-2">
                                    <p className="exchangeCardSmallText">Sell</p>
                                </div>
                                <div className="col-7">
                                    <p className="exchangeCardBigText">67000</p>
                                </div>
                                <div className="col-3">
                                    <select className="form-control exchangeCardSelect">
                                        <option>USD</option>
                                        <option>BTC</option>
                                    </select>
                                </div>

                                <div className="col-2">
                                    <p className="exchangeCardSmallText">Buy</p>
                                </div>
                                <div className="col-7">
                                    <p className="exchangeCardBigText">0.0069021</p>
                                </div>
                                <div className="col-3">
                                    <select className="form-control exchangeCardSelect">
                                        <option>BTC</option>
                                        <option>USD</option>
                                    </select>
                                </div>

                                <hr/>

                                <div className="col-lg-4 col-sm-12">
                                    <p className="exchangeCardSmallText">1 BTC = 8,234,222 USD</p>
                                </div>

                                <div className="col-lg-8 col-sm-12">
                                    <button type="button" className="btn btn-block btn-primary w-100">
                                        Exchange <i className="fas fa-arrow-right exchangeCardBtnIcon"/>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="card exchangeCard">
                     <p align="middle" className="exchangeCardSmallText">Alexa Rank</p>
                     <p align="middle" className="exchangeCardBigText">9440</p>
                    </div>
                </div>

            </div>
        </>
    )
};
export default ExchangeUI;
