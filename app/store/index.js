import {Store} from "./Store.js";

function combineReducers(reducers) {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action)
            return nextState
        }, {})
    }
}

export {
    Store,
    combineReducers
}
