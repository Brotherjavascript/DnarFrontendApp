import React from 'react';
import DashboardUI from "../pages/dashboard/DashboardUI";
import MarketUI from "../pages/market/MarketUI";


const routes = [
    { path: "/dashboard", name: "Dashboard", component: <DashboardUI/>},
    { path: "/marketLeaders", name: "Market Leaders", component: <MarketUI/>}
];
export default routes;
