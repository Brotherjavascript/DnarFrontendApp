import axios from "axios";

const Config = () => {

};

const _composeURL = (baseUrl,endPoint) => {
    return baseUrl.url+endPoint
};

const _fetchAllCoins = async url => await axios.get(url);

Config._fetchAllCoins = _fetchAllCoins;
Config._composeURL = _composeURL;

export default Config;
export {_fetchAllCoins, _composeURL};
