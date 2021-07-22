import {useEffect, useState} from 'react';
import {_GetReq} from "../../config/Config";


const useMarketLeaders = baseUrl => {
    const data = [
        {name: 'Nov', Rate: 150, pv: 2300, amt: 2400},
        {name: 'Dec', Rate: 200, pv: 2100, amt: 3400},
        {name: 'Jan', Rate: 100, pv: 2400, amt: 2400},
        {name: 'Feb', Rate: 450, pv: 1100, amt: 3400},
        {name: 'Mar', Rate: 200, pv: 2400, amt: 2400},
        {name: 'Apr', Rate: 100, pv: 1100, amt: 3400},
        {name: 'May', Rate: 400, pv: 2400, amt: 2400},
        {name: 'Jun', Rate: 100, pv: 1100, amt: 3400},
        {name: 'Jul', Rate: 150, pv: 1100, amt: 3400},
    ];

    const [isLoading, setIsLoading] = useState(false);

    const [market, setMarket] = useState([]);


    useEffect(() => {
        async function AllMarket (){
            _getMarket().then(res => {
                const marketData = res.data;
                console.log(marketData);
                setMarket(marketData);
                setIsLoading(true);
            }).catch(err => {
                console.error(err.message);
            });
        }

        AllMarket().then();
    }, []);

    const _getMarket = () => {
        console.log(baseUrl.url);
       return  _GetReq(baseUrl.url + 'indexes?per_page=100');
    };

    return {isLoading, data, market}
};
export default useMarketLeaders;
