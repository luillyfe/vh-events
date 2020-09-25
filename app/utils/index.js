export function escaping(data) {
    return Object.keys(data).reduce((newData, key) => {
        newData[key] = newData[key].replace(/(<([^>]+)>)/gi, "");
        return newData
    }, data)
}

export function format(attrs) {
    return Object.getOwnPropertyNames(attrs).reduce((obj, prop) => {
        obj[attrs[prop].name] = attrs[prop].value
        return obj
    }, {})
}
