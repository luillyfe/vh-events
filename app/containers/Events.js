import {request} from "../request/index.js";

export class Events extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})

        request.get('events').then(events => {
            this.shadowRoot.innerHTML = `
                ${getStyles()}
                ${getHtml(events).innerHTML}
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

    for (let {src, title, deadline} of events) {
        const event = `<vh-event
                            src="${src}"
                            title="${title}"
                            deadline="${deadline}"></vh-event>    
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