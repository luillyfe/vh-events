export class Event extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        let numberOfAttendes = 0

        const src = this.attributes.src ? this.attributes.src.value : "/public/images/300x150.png"
        const title = this.attributes.title.value
        const deadline = this.attributes.deadline.value

        const body = this.attributes.body.value
        const coming = this.attributes.coming.value
        const attendees = this.attributes.attendees.value

        if (attendees) {
            numberOfAttendes = attendees.split(",").length;
        }

        this.shadowRoot.innerHTML = `
        ${getStyles()}
        <section class="card">
            <img src=${src} alt="image">
            <div class="body">
                <h5 class="cardHead">${title}</h5>
                <p>${body}</p>
                <p>${deadline}</p>
                <p><span>😱</span>Online</p>
                <p><strong>Deadline:</strong> ${deadline}</p>
                <div class="details">
                    <h3>Attendees: ${numberOfAttendes}</h3>
                    <button>See details</button>
                </div>
            </div>
            <div class="footer">
            ${(coming == "true") ? '<button>You are coming to this event</button>'
            : '<button class="apply">Apply</button>'}
            </div>
        </section>
        `

        const applyButton = this.shadowRoot.querySelector('button.apply')
        if (applyButton) {
            applyButton.addEventListener('click', ev => {
                ev.stopPropagation()
                const detail = {eventId: this.attributes.eventId.value, attendee: "Fermin Blanco"}
                this.dispatchEvent(new CustomEvent('apply-event', {
                    detail,
                    bubbles: true
                }))
            })
        }
    }

}

function getStyles() {
    return `
    <style>
         .card {
            flex: 0 1 20%;
            /*height: 600px;*/
            margin: 1em 4% 0;
            background-color: #6a142e;
            color: #c3a1ab;
        
            display: flex;
            flex-direction: column;
        }
        .body {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        .body > p {
            text-align: center;
            margin-bottom: 0;
        }
        .cardHead {
            font-size: 1.5em;
            text-align: center;
            margin-bottom: 0;
            margin-top: 1em;
        }
        .details {
            display: flex;
            font-size: 0.8em;
            padding: 1em;
            justify-content: space-evenly;
        }
        .details > h3, .details > button {
            flex: 0 1 50%;
        }
        .footer {
            display: flex;
            height: 2em;
        }
        .footer > button {
            flex: 0 1 100%;
        }
    </style>
    `
}
