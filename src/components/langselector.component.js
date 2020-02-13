import Component from './component.js'

class langselectorComponent extends Component {
    constructor() {
        super()
        this.init()
    }

    html = () => `
        <p>
            <label>Language 
                <select id="languageSelector" name="languages">
                    ${this.data.languages.map(e => `<option value="${e.subdomain}">${e.name_en}</option>`)}
                </select>   
            </label>
        </p>
    `

    data = {
        languages: [
            { "name_en": "English", "subdomain": "en" },
            { "name_en": "Spanish", "subdomain": "es" },
            { "name_en": "Catalan", "subdomain": "ca" },        
            { "name_en": "Esperanto", "subdomain": "eo" },
            { "name_en": "Chinese", "subdomain": "zh" },
            { "name_en": "Japanese", "subdomain": "ja" },
            { "name_en": "Russian", "subdomain": "ru" },
            { "name_en": "Naspaki", "subdomain": "cr" },
            { "name_en": "Tamil", "subdomain": "ta" }
        ]
    }

    style = () => ``
}

export default new langselectorComponent()