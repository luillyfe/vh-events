export function escaping(data) {
    return Object.keys(data).reduce((newData, key) => {
        newData[key] = newData[key].replace(/(<([^>]+)>)/gi, "");
        return newData
    }, data)
}

export function format(attr) {
    return Object.getOwnPropertyNames(attr).reduce((obj, prop) => {
        obj[attr[prop].name] = attr[prop].value
        return obj
    }, {})
}
