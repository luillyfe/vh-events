app()

function app() {
    const event1 = getComponent('events')
}

function getComponent(parentId) {
    const event = document.createElement("section");
    event.setAttribute('class', 'card event')
    const main = document.getElementById(parentId);
    main.appendChild(event);
}
