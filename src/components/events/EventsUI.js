import React from 'react';
import EventCardUI from "./eventCard/EventCardUI";

const EventsUI = () => {
    return(
        <>
            <div className="card eventCard">
                <div className="card-body">
                    <p className="marketTitle">Events</p>
                    <EventCardUI/>
                    <EventCardUI/>
                    <EventCardUI/>
                    <EventCardUI/>
                    <EventCardUI/>
                </div>
            </div>
        </>
    )
};
export default EventsUI;
