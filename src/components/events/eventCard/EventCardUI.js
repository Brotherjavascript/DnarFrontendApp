import React from 'react';

const EventCardUI = (props) => {
    return(
        <>
            <div className="card marketPill">
                <div className="card-body">
                    <p className="eventCardTitle">{props.event.title}</p>
                    <p className="eventCardBody">
                        {props.event.description.slice(0,200)} ...
                    </p>
                    <a href={props.event.website} target="_blank" className="btn eventCardLink" ><i className="fa fa-link"/></a>
                </div>
            </div>
        </>
    )
}
export default EventCardUI;
