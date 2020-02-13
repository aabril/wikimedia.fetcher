function getArticleContent(subdomain, articleName, cb) {
    console.log('subdomain', subdomain)
    console.log(articleName)

    const fetchUrl = 'https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&page=esperanto&origin=*&format=json'

    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            cb(null, data)
        })
        .catch(error => {
            cb(error, null)
        })
}

export default getArticleContent