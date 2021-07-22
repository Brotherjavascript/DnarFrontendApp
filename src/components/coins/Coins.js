import {useEffect, useState} from 'react';
import {_GetReq} from "../../config/Config";

const useCoins = baseUrl => {
    const [isLoading, setIsLoading] = useState(false);

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        async function AllCoins (){
            _getCoins().then(res => {
                const coinsData = res.data;
                console.log(coinsData);
                setCoins(coinsData);
                setIsLoading(true);
            }).catch(err => {
                console.error(err.message);
            });
        }

        AllCoins().then();
    }, []);

    const _getCoins = () => {
        console.log(baseUrl.url);
        return  _GetReq(baseUrl.url + 'coins/list');
    };

    return {isLoading,coins}
}
export default useCoins;
