import React from 'react';
import {LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip} from "recharts";
import 'bootstrap-daterangepicker/daterangepicker.css';
import ExchangeUI from "../exchange/ExchangeUI";
import useAnalysis from "./Analysis";

const AnalysisUI = () => {

    const{data} = useAnalysis();

    return(
        <>
            <div className="card analysisCard">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <p className="analysisTopText">$219, 800.65</p>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <p className="analysisSubText">+2.43 <i className="fas fa-chart-line"/></p>
                        </div>
                        <div className="col-lg-3 col-sm-4 analysisDatePickerContainer">
                            <input type="date" className="form-control analysisDatePicker"/>
                        </div>
                        <br/>

                        <LineChart width={800} height={320} data={data}>
                            <Line type="monotone" dataKey="Rate" stroke="#1266F1" dot={false} />
                            <Tooltip contentStyle={{color: '#1266F1'}} itemStyle={{color: '#212121'}}/>
                            <CartesianGrid stroke="#9E9E9E" strokeDasharray="2 5" vertical={false}/>
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AnalysisUI;
