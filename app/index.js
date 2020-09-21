import {getComponent} from "./components/Event.js";

app()

function app() {
    const src = 'https://via.placeholder.com/300x150'
    const title = 'Premiun Open House Experience'
    const deadline = 'September 24, 2020'
    const event1 = getComponent('events', {src, title, deadline})
}
