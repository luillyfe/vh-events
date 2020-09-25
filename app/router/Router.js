export class Router {
    constructor() {
        this.container = document.getElementById('app')
    }

    default(innerHTML) {
        this.container.innerHTML = innerHTML
    }

    route(path, getInnerHTML) {
        this.container.addEventListener(path, ev => {
            ev.stopPropagation()
            this.container.innerHTML = getInnerHTML(ev.detail)
        })
    }
}
