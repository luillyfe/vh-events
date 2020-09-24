import {Events} from "./containers/Events.js";
import {Event} from "./components/Event.js";
import {Navbar} from "./components/Navbar.js";
import {NewEvent} from "./components/NewEvent.js";
import {EventDetails} from "./containers/EventDetails.js";

customElements.define('vh-navbar', Navbar)
customElements.define('vh-event', Event)
customElements.define('vh-new-event', NewEvent)
customElements.define('vh-events', Events)
customElements.define('vh-event-details', EventDetails)
