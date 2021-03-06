import React from 'react';
import {LineChart, Line} from "recharts";

const MarketPillUI = (props) => {
    return(
        <>
            <div className="card marketPill">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12">
                                    <p className="marketPillTitle">{props.oneMarket.market} ({props.oneMarket.id})</p>
                                </div>

                                <div className="col-lg-3 col-sm-12">
                                    <LineChart width={100} height={20} data={props.data}>
                                        <Line type="monotone" dataKey="Rate" stroke="#fff" dot={false}/>
                                    </LineChart>
                                </div>

                                <div className="col-lg-2 col-sm-12">
                                    <p className="marketPillSub" align="right">+122,901.92</p>
                                </div>

                                <div className="col-lg-3 col-sm-12">
                                    <p className="marketPillPrice">$ {props.oneMarket.last === null ? 0.00 : props.oneMarket.last}</p>
                                </div>

                            </div>
                        </div>
                    </div>
        </>
    )
}
export default MarketPillUI;
