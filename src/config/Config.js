import axios from "axios";

const Config = () => {

};

const _composeURL = (baseUrl,endPoint) => {
    return baseUrl.url+endPoint
};

const _GetReq = async url => await axios.get(url);

Config._GetReq = _GetReq;
Config._composeURL = _composeURL;

export default Config;
export {_GetReq, _composeURL};
