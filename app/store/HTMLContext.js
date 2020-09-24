import {combineReducers, Store} from "./index.js";
import {eventsReducer as events} from "./reducers.js";
import {applyToEventAction, getEventAction, getEventsAction, requestEventsAction} from "./actions.js";

const appReducer = combineReducers({events})
const store = new Store(appReducer)
store.subscribe(v => v)
store.dispatch({})

export class HTMLContext extends HTMLElement {
    constructor() {
        super();
        this.store = store
    }
}

export const applyToEvent = applyToEventAction(store)
export const getEvent = getEventAction(store)
export const getEvents = getEventsAction(store)
export const requestEvents = requestEventsAction(store)
