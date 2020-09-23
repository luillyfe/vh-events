
app()

function app() {
    const app = document.getElementById('app')

    app.insertAdjacentHTML('beforeend',
        `<vh-events></vh-events>`)
}
