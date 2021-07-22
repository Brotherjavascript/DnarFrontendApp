import React, {useEffect, useState} from 'react';
import MarketPillUI from "./marketpill/MarketPillUI";
import {useSelector} from "react-redux";
import useMarketLeaders from "./MarketLeaders";
import MyLoader from "../../config/Loader";

const MarketLeadersUI = (props) => {

    const baseUrl = useSelector(state => state.dataAPI);
    const {data, _getCoins} = useMarketLeaders(baseUrl);
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);

        async function AllCoins (){
            _getCoins().then(res => {
                const coinsData = res.data;
                console.log(coinsData.slice(0, 100));
                setCoins(coinsData.slice(0, 100));
                setIsLoading(true);
            }).catch(err => {
                console.error(err.message);
            });
        }

        AllCoins().then();
    }, []);



    return (
        <>
            <div className="card marketCard">
                <div className="card-body">
                    <p className="marketTitle">Market leaders</p>
                    {
                        coins.map((coin,index) => (
                            <MarketPillUI key={index} data={data} coin={coin}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default MarketLeadersUI;
