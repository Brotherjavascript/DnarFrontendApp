import React, {useEffect, useState} from 'react';
import {_fetchAllCoins} from "../../config/Config";


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

    const _getCoins = () => {
        console.log(baseUrl.url);
       return  _fetchAllCoins(baseUrl.url + 'coins/list');
    };

    return {_getCoins, data}
};
export default useMarketLeaders;
