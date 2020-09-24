app()

function app() {
    const app = document.getElementById('app')

    /**
     * TODO: Build a router module
     * **/

    app.innerHTML = `
        <vh-navbar></vh-navbar>
        <vh-events></vh-events>
    `
    app.addEventListener('home', ev => {
        app.innerHTML = `
        <vh-navbar></vh-navbar>
        <vh-events></vh-events>
    `
    })

    app.addEventListener('event-details', ev => {
        const {eventId} = ev.detail
        app.innerHTML = `
         <vh-navbar></vh-navbar>
         <vh-event-details eventId="${eventId}"></vh-event-details>
         `
    })
}
