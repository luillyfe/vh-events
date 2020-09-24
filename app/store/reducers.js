import {ADD_ATTENDEE_EVENT, GET_EVENTS, GET_EVENT} from "./actions.js";

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
        case GET_EVENT: {
            const {eventId} = payload;
            const event = state.all.filter(({id}) => id === Number(eventId))[0]
            return {...state, all: state.all, currentEvent: event};
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
