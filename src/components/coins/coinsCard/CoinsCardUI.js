import React from 'react';

const CoinsCardUI = (props) => {
    return(
        <>
            <div className="card coinPill">
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <p className="coinPillText">{props.coinName}</p>
                        </div>
                        <div className="col-4">
                            <span className="badge badge-primary">{props.symbol}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CoinsCardUI;
