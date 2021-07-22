import React from 'react';
import MarketLeadersUI from "../../components/marketLeaders/MarketLeadersUI";
import CoinsUI from "../../components/coins/CoinsUI";
import EventsUI from "../../components/events/EventsUI";
import {useSelector} from "react-redux";

const MarketUI = (props) => {
    const baseUrl = useSelector(state => state.dataAPI);

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <MarketLeadersUI baseUrl={baseUrl} />
                            <CoinsUI baseUrl={baseUrl}/>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <EventsUI baseUrl={baseUrl}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default MarketUI;
