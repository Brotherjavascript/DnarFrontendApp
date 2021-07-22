import {useEffect, useState} from 'react';
import {_GetReq} from "../../config/Config";

const useEvents = baseUrl => {
    const [isLoading, setIsLoading] = useState(false);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function AllEvents (){
            _getEvents().then(res => {
                const eventData = res.data;
                console.log(eventData);
                setEvents(eventData.data);
                setIsLoading(true);
            }).catch(err => {
                console.error(err.message);
            });
        }

        AllEvents().then();
    }, []);

    const _getEvents = () => {
        console.log(baseUrl.url);
        return  _GetReq(baseUrl.url + 'events');
    };

    return {isLoading,events}
}
export default useEvents;
