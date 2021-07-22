import React from 'react';
import AnalysisUI from "../../components/analysis/AnalysisUI";
import InfoUI from "../../components/info/InfoUI";
import ExchangeUI from "../../components/exchange/ExchangeUI";

const DashboardUI = () => {
    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <AnalysisUI/>
                            <ExchangeUI/>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <InfoUI/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default DashboardUI;
