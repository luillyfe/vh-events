import {Event} from "./components/Event.js";
import {request} from "./request/index.js";

app()

async function app() {
    const events = await request.get('events')

    for (let event of events) {
        Event('events', event)
    }
}
