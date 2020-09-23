import {NEW_EVENT, GET_EVENTS} from "./actions.js";

function eventsReducer(state = getInitialState(), {type, payload}) {
    switch (type) {
        case NEW_EVENT: {
            const {event} = payload;
            return {...state, all: [...state.all, event]};
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
