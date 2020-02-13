function serializeUrlParams(obj){
    return Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&')
}

function getContentURL(subdomain, articleName) {
    const fetchBaseUrl = `https://${subdomain}.wikipedia.org/w/api.php`
    const fetchParams = {
        "action": 'parse',
        "section": 0,
        "prop": "text",
        "page": articleName,
        "origin": "*",
        "format": "json"
    }
    return `${fetchBaseUrl}?${serializeUrlParams(fetchParams)}`
}

function getContent(subdomain, articleName, cb) {
    const fetchUrl = getContentURL(subdomain, articleName)

    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            cb(null, data)
        })
        .catch(error => {
            cb(error, null)
        })
}

export default getContent