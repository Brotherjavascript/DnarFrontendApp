import React from 'react';

const InfoCardUI = () => {
    return (
        <>
            <div className="card infoDescription">
                <div className="card-body">
                    <p className="eventCardTitle">Description</p>
                    <p className="eventCardBody">
                        The href attribute requires a valid value to be accessible. Provide a valid,
                        navigable address as the href value.
                    </p>
                </div>
            </div>

            <button type="button" className="btn btn-primary infoBtnGroup"><i className="fa fa-globe"/> Website</button>
            <button type="button" className="btn btn-outline-primary infoBtnGroup"><i
                className="fab fa-github infoBtnGroupIcon"/></button>
            <button type="button" className="btn btn-outline-danger infoBtnGroup"><i
                className="fab fa-reddit-alien infoBtnGroupIcon"/></button>
        </>
    )
}
export default InfoCardUI;
