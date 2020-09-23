
app()

function app() {
    const app = document.getElementById('app')

    app.innerHTML= `
        <vh-navbar></vh-navbar>
        <vh-events></vh-events>
    `

    app.addEventListener('new-event', ev => {
        app.innerHTML= `
        <vh-navbar></vh-navbar>
        <vh-new-event></vh-new-event>
        `
    })
}
