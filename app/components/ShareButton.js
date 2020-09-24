export class ShareButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
            ${getStyles()}
            <button class="share">
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </button>
        `

        const button = this.shadowRoot.querySelector('#newEvent');
    }
}

function getStyles() {
    return `
    <style>
        .share {
            float: left;
        }
        .share > a {
            text-decoration: none;
        }
    </style>
    `
}
