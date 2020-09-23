export class NewEvent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        const state = { title: "", deadline: "" }
        const {title, deadline} = state;

        this.shadowRoot.innerHTML = `
        ${getStyles()}
        <section class="card">
            <img src="https://via.placeholder.com/300x150" alt="image">
                <form class="body">
                    <h5 class="cardHead">
                    <Input type="text" name="title" value="${title}" /></h5>
                    <p><Input type="date" name="deadline" value="${deadline}" /></p>
                    <p><span>😱</span>Online</p>
                    <p class="last-paragraph"><strong>Deadline:</strong> ""</p>
                    <button class="createEvent">Create</button>
                </form>
        </section>
        `

        this.shadowRoot.querySelectorAll('Input').forEach(input => {
            input.addEventListener('change', (ev) => {
                state[ev.target.name] = ev.target.value;
            })
        })

        this.shadowRoot.querySelector('button.createEvent')
            .addEventListener('click', ev => {
            ev.preventDefault()
            console.log(state);
        })
    }

}

function getStyles() {
    return `
    <style>
         .card {
            flex: 0 1 20%;
            height: 500px;
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
        }
        .last-paragraph {
        flex: 1;
        }
        .createEvent {
            font-size: 0.8em;
            padding: 1em;
        }
    </style>
    `
}
