import {HTMLContext, getEvents, requestEvents} from "../store/HTMLContext.js";

export class Events extends HTMLContext {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})

        if (!this.store.getState().events.all.length) {
            requestEvents()
        } else {
            getEvents()
        }

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
    }
}

function getHtml(events) {
    const wrapper = document.createElement('main');
    wrapper.setAttribute('class', 'events');

    for (let {src, title, deadline, id, coming} of events) {
        const event = `<vh-event
                            src="${src}"
                            title="${title}"
                            deadline="${deadline}"
                            coming="${!!coming}"
                            eventId="${id}"></vh-event>    
        `

        wrapper.insertAdjacentHTML('beforeend', event);
    }

    return wrapper
}

function getStyles() {
    return `
    <style>
        @media only screen and (min-width: 480px)  {
            :host {
                display: flex;
                flex-flow: column wrap;
                align-items: center;
            }
        }
        @media only screen and (min-width: 768px)  {
            :host {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
            }
        }
    </style>
    `
}
