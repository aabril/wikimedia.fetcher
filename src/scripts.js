const languages = {
    "en": {
        "en": "English",
        "es": "Spanish",
        "cat": "Catalan",
        "eo": "Esperanto",
        "zh": "Chinese",
        "ja": "Japanese",
        "ru": "Russian",
        "ar": "Arabic"
    },
    "es": {
        "en": "Inglés",
        "es": "Español",
        "cat": "Catalán",
        "eo": "Esperanto",
        "zh": "Chino",
        "ja": "Japonés",
        "ru": "Ruso",
        "ar": "Árabe"
    }
}

class appComponent {
    constructor() {
        let html = this.html()
        const template = document.createElement('template')
        html = html.trim()
        template.innerHTML = html
        this.node = template.content.firstChild
    }

    html = () => `
        <div>hello world!</div>
    `
}

const app = new appComponent()

const main = document.querySelector('#main')
main.appendChild(app.node)
