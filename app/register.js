import {Events} from "./containers/Events.js";
import {Event} from "./components/Event.js";
import {ShareButton} from "./components/ShareButton.js";
import {Navbar} from "./components/Navbar.js";
import {EventDetails} from "./containers/EventDetails.js";

customElements.define('vh-navbar', Navbar)
customElements.define('vh-event', Event)
customElements.define('vh-events', Events)
customElements.define('vh-event-details', EventDetails)
customElements.define('vh-share-button', ShareButton)
