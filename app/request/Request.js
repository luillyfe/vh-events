export class Request {
    constructor() {
    }

    get(url) {
        if (url === 'events') {
        return fetch('../fakeAPI/data.json')
            .then(res => res.json())
        }
    }
}
