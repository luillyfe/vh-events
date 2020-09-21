export function Event(parentId, attributes) {
    const main = document.getElementById(parentId);
    main.innerHTML = createEventComponent(attributes);
}

function createEventComponent({src, title, deadline}) {
    const domparser = new DOMParser()
    const html = `
        <section class="card">
            <img src=${src} alt="image">
                <div class="body">
                    <h5 class="cardHead">${title}</h5>
                    <p>${deadline}</p>
                    <p><span>😱</span>Online</p>
                    <p><strong>Deadline:</strong> ${deadline}</p>
                    <button class="bdetails">See details</button>
                </div>
        </section>`
    const doc = domparser.parseFromString(html, 'text/html')
    const styles = document.createElement('style')
    styles.innerHTML = createStyles()
    doc.body.appendChild(styles);
    return doc.body.innerHTML
}

function createStyles() {
    return `
        .card {
            flex: 0 1 20%;
            height: 600px;
            margin: 1em 4% 0;
            background-color: #6a142e;
            color: #c3a1ab;
        
            display: flex;
            flex-direction: column;
        }
        .body {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        .body > p {
            text-align: center;
            margin-bottom: 0;
        }
        .cardHead {
            font-size: 1.5em;
            text-align: center;
        }
        .bdetails {
            font-size: 0.8em;
            padding: 1em;
        
            align-self: flex-end;
        }
    `
}
