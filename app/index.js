import {Router} from "./router/Router.js"

app()

function app() {
    const router = new Router();

    router.default(`
        <vh-navbar></vh-navbar>
        <vh-events></vh-events>
    `)

    router.route('home', () => `
        <vh-navbar></vh-navbar>
        <vh-events></vh-events>
    `)

    // '/event/:id'
    router.route('event-details', ({eventId}) => `
         <vh-navbar></vh-navbar>
         <vh-event-details eventId="${eventId}"></vh-event-details>
     `)
}
