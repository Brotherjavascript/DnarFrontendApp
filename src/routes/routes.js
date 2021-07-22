import React from 'react';
import DashboardUI from "../pages/dashboard/DashboardUI";
import MarketUI from "../pages/market/MarketUI";


const routes = [
    { path: "/marketLeaders", name: "Market Leaders", component: <MarketUI/>},
    { path: "/dashboard", name: "Dashboard", component: <DashboardUI/>}
];
export default routes;
