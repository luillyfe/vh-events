import {HTMLContext, applyToEvent, getEvent} from "../store/HTMLContext.js";

export class EventDetails extends HTMLContext {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})

        this.store.subscribe((state) => {
            const {events} = state
            if (events.currentEvent) {
                this.shadowRoot.innerHTML = `
                    ${getStyles()}
                    ${getHtml(events.currentEvent).innerHTML}
                `
            }
        })

        this.shadowRoot.innerHTML = `
            ${getStyles()}
            <main class="events"></main>    
            `

        getEvent(this.attributes.eventId.value)

        this.shadowRoot.addEventListener('apply-event', ev => {
                const {eventId, attendee} = ev.detail
                applyToEvent(eventId, attendee)
            }
        )
    }
}

function getHtml(eventData) {
    const wrapper = document.createElement('main');
    wrapper.setAttribute('class', 'events');

    let {src, title, deadline, body, type, id, attendees, coming} = eventData
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
