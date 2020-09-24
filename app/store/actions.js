export const NEW_EVENT = 'NEW_EVENT';
export const GET_EVENT = 'GET_EVENT';
export const GET_EVENTS = 'GET_EVENTS';
export const ADD_ATTENDEE_EVENT = 'ADD_ATTENDEE_EVENT';

export const applyToEventAction = store => (eventId, attendee) => {
    store.dispatch({
        type: ADD_ATTENDEE_EVENT,
        payload: {eventId, attendee}
    })
    store.dispatch({
        type: GET_EVENT,
        payload: {eventId}
    })
}

export const getEventAction = store => (eventId) => {
    store.dispatch({
        type: GET_EVENT,
        payload: {eventId}
    })
}
export const getEventsAction = store => (events) =>  {
    store.dispatch({
        type: GET_EVENTS,
        payload: {events}
    })
}
