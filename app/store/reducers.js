import {ADD_ATTENDEE_EVENT, GET_EVENTS} from "./actions.js";

function eventsReducer(state = getInitialState(), {type, payload}) {
    switch (type) {
        /*case NEW_EVENT: {
            const {event} = payload;
            return {...state, all: [...state.all, event]};
        }*/
        case ADD_ATTENDEE_EVENT: {
            const {eventId, attendee} = payload;
            const events = state.all.map(event => {
                if (event.id === Number(eventId)) {
                    const attendees = [...event.attendees, attendee]
                    return {...event, attendees, coming: true}
                } else {
                    return event
                }
            })
            return {...state, all: events};
        }
        case GET_EVENTS: {
            const {events} = payload;
            return {...state, all: events};
        }
        default:
            return state;
    }
}

function getInitialState() {
    return {all: []}
}

export {
    eventsReducer
}
