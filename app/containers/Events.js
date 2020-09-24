import {HTMLContext} from "../store/HTMLContext.js";
import {request} from "../request/index.js";
import {ADD_ATTENDEE_EVENT, GET_EVENTS} from "../store/actions.js";

export class Events extends HTMLContext {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})

        request.get('events').then(events => {
            this.store.dispatch({
                type: GET_EVENTS,
                payload: {events}
            })
        })

        this.store.subscribe(({events}) => {
            this.shadowRoot.innerHTML = `
                    ${getStyles()}
                    ${getHtml(events.all).innerHTML}
                `
        })

        this.shadowRoot.innerHTML = `
            ${getStyles()}
            <main class="events"></main>    
            `

        this.shadowRoot.addEventListener('apply-event', ev => {
                const {eventId, attendee} = ev.detail
                this.store.dispatch({
                    type: ADD_ATTENDEE_EVENT,
                    payload: {eventId, attendee}
                })
            }
        )
    }
}

function getHtml(events) {
    const wrapper = document.createElement('main');
    wrapper.setAttribute('class', 'events');

    for (let {src, title, deadline, body, type, id, attendees, coming} of events) {
        const event = `<vh-event
                            src="${src}"
                            title="${title}"
                            deadline="${deadline}"
                            body="${body}"
                            type="${type}"
                            coming="${!!coming}"
                            attendees="${attendees.join()}"
                            eventId="${id}"></vh-event>    
        `

        wrapper.insertAdjacentHTML('beforeend', event);
    }

    return wrapper
}

function getStyles() {
    return `
    <style>
         .events {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
    </style>
    `
}
