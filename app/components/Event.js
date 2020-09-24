export class Event extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        let numberOfAttendes = 0

        /**
         * TODO: Better managing of null/undefined values
         * **/
        const src = this.attributes.src ? this.attributes.src.value : "/public/images/300x150.png"
        const title = this.attributes.title.value
        const deadline = this.attributes.deadline.value

        const body = this.attributes.body ? this.attributes.body.value : false
        const coming = this.attributes.coming.value
        const attendees = this.attributes.attendees ? this.attributes.attendees.value : false

        if (attendees) {
            numberOfAttendes = attendees.split(",").length;
        }

        /**
         * TODO: Fallback for images
         * **/
        if (body) {
            this.shadowRoot.innerHTML = `
                ${getStyles()}
                <vh-notification id="notification"></vh-notification>
                <section class="card">
                    <img src=${src} alt="image">
                    <vh-share-button></vh-share-button>
                    <div class="body">
                        <h5 class="cardHead">${title}</h5>
                        <p>${body}</p>
                        <p>${deadline}</p>
                        <p><span>😱</span>Online</p>
                        <p><strong>Deadline:</strong> ${deadline}</p>
                        <div class="details">
                            <h3>Attendees: ${numberOfAttendes}</h3>
                        </div>
                    </div>
                    <div class="footer">
                    ${(coming == "true") ?
                '<button>You are coming to this event</button>'
                : '<button class="apply">Apply</button>'}
                        <button class="back">Go Back</button>
                    </div>
                </section>
                `
        } else {
            this.shadowRoot.innerHTML = `
                ${getStyles()}
                <section class="card">
                <img src=${src} alt="image">
                    <div class="body">
                        <h5 class="cardHead">${title}</h5>
                        <p>${deadline}</p>
                        <p><span>😱</span>Online</p>
                        <p><strong>Deadline:</strong> ${deadline}</p>
                        <div class="details">
                            <button>See details</button>
                        </div>
                    </div>
                </section>
                `
        }

        const applyButton = this.shadowRoot.querySelector('button.apply')
        if (applyButton) {
            applyButton.addEventListener('click', ev => {
                ev.stopPropagation()

                if (this.attributes.type.value !== 'Premium-only Webinar') {
                    const detail = {eventId: this.attributes.eventId.value, attendee: "Fermin Blanco"}
                    this.dispatchEvent(new CustomEvent('apply-event', {
                        detail,
                        bubbles: true
                    }))
                } else {
                    this.shadowRoot.getElementById('notification').classList.add('target')
                }
            })
        }

        const detailsButton = this.shadowRoot.querySelector('.details > button')
        if (detailsButton) {
            detailsButton.addEventListener('click', ev => {
                ev.stopPropagation()
                const detail = {eventId: this.attributes.eventId.value}
                this.dispatchEvent(new CustomEvent('event-details', {
                    detail,
                    bubbles: true,
                    composed: true
                }))
            })
        }

        const gobackButton = this.shadowRoot.querySelector('.back')
        if (gobackButton) {
            gobackButton.addEventListener('click', ev => {
                ev.stopPropagation()
                this.dispatchEvent(new CustomEvent('home', {
                    bubbles: true,
                    composed: true
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
            margin: 1em 4% 0;
            background-color: #1355aa;
            color: #a0bbdd;
        
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
            margin-top: 0.5em;
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
        @media only screen and (min-width: 480px)  {
            .card {
                width: 17em;
            }
        }
        @media only screen and (min-width: 768px)  {
            .card {
                height: 28em;
            }
        }
    </style>
    `
}
