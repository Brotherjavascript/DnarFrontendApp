import React from 'react';
import MarketLeadersUI from "../../components/marketLeaders/MarketLeadersUI";
import CoinsUI from "../../components/coins/CoinsUI";
import EventsUI from "../../components/events/EventsUI";
import {useSelector} from "react-redux";
import MyLoader from "../../config/Loader";

const MarketUI = (props) => {

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <MarketLeadersUI/>
                            <CoinsUI/>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <EventsUI/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default MarketUI;
