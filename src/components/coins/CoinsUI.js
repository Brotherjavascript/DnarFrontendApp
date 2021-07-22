import React from 'react';
import CoinsCardUI from "./coinsCard/CoinsCardUI";

const CoinsUI = () => {
    return(
        <>
            <div className="card coinsCard">
                <div className="card-body">
                    <p className="coinsCardTitle">All Coins</p>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <CoinsCardUI coinName="BitCoin"  imageName="images/bitcoin.png"/>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <CoinsCardUI coinName="BitCoin Cash"  imageName="images/bitcoin2.png"/>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <CoinsCardUI  coinName="Ethereum" imageName="images/etherum.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default CoinsUI;
