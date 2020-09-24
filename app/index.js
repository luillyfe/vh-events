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

    app.addEventListener('new-event', ev => {
        ev.stopPropagation()
        ev.preventDefault()
        app.innerHTML = `
        <vh-navbar></vh-navbar>
        <vh-new-event></vh-new-event>
        `
    })

    app.addEventListener('event-details', ev => {
        ev.stopPropagation()
        ev.preventDefault()
        const {eventId} = ev.detail
        app.innerHTML = `
         <vh-navbar></vh-navbar>
         <vh-event-details eventId="${eventId}"></vh-event-details>
         `
    })
}
