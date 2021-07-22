import React from 'react';
import CoinsCardUI from "./coinsCard/CoinsCardUI";
import useCoins from "./Coins";
import MyLoader from "../../config/Loader";

const CoinsUI = (props) => {
    const {isLoading, coins} = useCoins(props.baseUrl);
    return (
        <>
            <div className="card coinsCard">
                <div className="card-body">
                    <p className="coinsCardTitle">All Coins</p>
                    <div className="row">
                        {
                            isLoading === false ?
                                <MyLoader/> :
                                coins.map((coin, index) => (
                                    <div className="col-lg-4 col-sm-12">
                                        <CoinsCardUI coinName={coin.name} symbol={coin.symbol}/>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
export default CoinsUI;
