import React from 'react';
import MarketPillUI from "./marketpill/MarketPillUI";
import useMarketLeaders from "./MarketLeaders";
import MyLoader from "../../config/Loader";

const MarketLeadersUI = (props) => {
    const {isLoading, data, market} = useMarketLeaders(props.baseUrl);

    return (
        <>
            <div className="card marketCard">
                <div className="card-body">
                    <p className="marketTitle">Market leaders</p>
                    {
                        isLoading === false ?
                            <MyLoader/>:
                            market.map((oneMarket,index) => (
                            <MarketPillUI key={index} data={data} oneMarket={oneMarket}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default MarketLeadersUI;
