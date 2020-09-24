export class Notification extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})

        this.shadowRoot.innerHTML = `
        ${getStyles()}
        <div>
            <div class="popup">
                <a class="close" href="#">&times;</a>
                <div class="content">
                    This is a Premium-only Webinar.
                    <button>See more</button>
                </div>
            </div>
        </div>
        `

        this.shadowRoot.querySelector('.close').addEventListener('click', () => {
            this.classList = '';
        })
    }
}

function getStyles() {
    return `
    <style>
    :host {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      transition: opacity 500ms;
      visibility: hidden;
      opacity: 0;
    }
    :host(.target) {
      visibility: visible;
      opacity: 1;
    }
    .popup {
      margin: 70px auto;
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      width: 30%;
      position: relative;
      transition: all 5s ease-in-out;
    }
    
    .popup h2 {
      margin-top: 0;
      color: #1355aa;
      font-family: Tahoma, Arial, sans-serif;
    }
    .popup .close {
      position: absolute;
      top: 10px;
      right: 30px;
      transition: all 200ms;
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
      color: #1355aa;
    }
    .popup .close:hover {
      color: #a0bbdd;
    }
    .popup .content {
      max-height: 30%;
      overflow: auto;
      color: #1355aa;
    }
    </style>
    `
}
