import React from 'react';

const useAnalysis = () => {
    const data = [
        {name: 'Nov', Rate: 150, pv: 2300, amt: 2400},
        {name: 'Dec', Rate: 200, pv: 2100, amt: 3400},
        {name: 'Jan', Rate: 100, pv: 2400, amt: 2400},
        {name: 'Feb', Rate: 150, pv: 1100, amt: 3400},
        {name: 'Mar', Rate: 200, pv: 2400, amt: 2400},
        {name: 'Apr', Rate: 100, pv: 1100, amt: 3400},
        {name: 'May', Rate: 400, pv: 2400, amt: 2400},
        {name: 'Jun', Rate: 100, pv: 1100, amt: 3400},
        {name: 'Jul', Rate: 150, pv: 1100, amt: 3400},
    ];

    return{data}
};
export default useAnalysis;
