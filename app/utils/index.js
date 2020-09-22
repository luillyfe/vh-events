export function escaping(data) {
    return Object.keys(data).reduce((newData, key) => {
        newData[key] = newData[key].replace(/(<([^>]+)>)/gi, "");
        return newData
    }, data)
}
