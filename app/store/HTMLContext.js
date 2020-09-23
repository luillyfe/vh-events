import {combineReducers, Store} from "./index.js";
import {eventsReducer as events} from "./reducers.js";

export class HTMLContext extends HTMLElement {
    constructor() {
        super();

        const appReducer = combineReducers({events})
        const store = new Store(appReducer)
        store.subscribe(v => v)
        store.dispatch({})

        this.store = store
    }
}
