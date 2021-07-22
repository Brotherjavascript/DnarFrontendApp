import React from 'react';
import EventCardUI from "./eventCard/EventCardUI";
import useEvents from "./Events";
import MyLoader from "../../config/Loader";


const EventsUI = (props) => {
    const {isLoading,events} = useEvents(props.baseUrl);

    return(
        <>
            <div className="card eventCard">
                <div className="card-body">
                    <p className="marketTitle">Events</p>
                    {
                        isLoading === false ?
                            <MyLoader/>:
                            events.map((event,index) =>(
                                <EventCardUI key={index} event={event}/>
                            ))
                    }
                </div>
            </div>
        </>
    )
};
export default EventsUI;
