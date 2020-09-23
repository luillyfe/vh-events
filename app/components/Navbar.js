export class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
            ${getStyles()}
            <nav class="navbar expand">
                <button class="hamburger" type="button">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
                <div class="navbar collapse">
                    <ul><li><button id="newEvent">New event</button></li></ul>
                </div>
            </nav>
        `

        const button = this.shadowRoot.querySelector('#newEvent');
        const events = document.querySelector('vh-events')

        button.addEventListener('click', ev => {
            this.dispatchEvent(new CustomEvent('new-event', {
                bubbles: true
            }))
        })
    }

}

function getStyles() {
    return `
    <style>   
    .navbar.collapse ul {
        list-style-type: "→";
    }
    .hamburger {
        padding: 15px 15px;
        display: inline-block;
        cursor: pointer;
        font: inherit;
        color: inherit;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;
    }

    .hamburger-box {
        width: 40px;
        height: 24px;
        display: inline-block;
        position: relative;
    }
    
    .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: -2px;
    }
    
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
        width: 40px;
        height: 4px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
    }
    
    .hamburger-inner::before, .hamburger-inner::after {
        content: "";
        display: block;
    }
    
    .hamburger-inner::before {
        top: -10px;
    }
    
    .hamburger-inner::after {
        bottom: -10px;
    }
    </style>
    `
}
