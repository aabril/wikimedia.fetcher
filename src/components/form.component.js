import Component from './component.js'
import inputname from './inputname.component.js'
import langselector from './langselector.component.js'
import content from './content.component.js'

import fetcher from '../utils/fetcher.js'

class formComponent extends Component {
    constructor() {
        super()
        this.init()
        this.node.addEventListener("submit", this.formOnSubmit)
    }

    subcomponents = {
        inputname,
        langselector
    }

    html = () => `
        <form>
          <subnode sid="inputname"></subnode>
          <subnode sid="langselector"></subnode>
          <p>
            <button>Fetch</button>
          </p>
        </form>
    `

    style = () => `
        background: lightgreen;
    `
    formOnSubmit = (e) => {
        console.log(new Date())
        e.preventDefault();
        const inputname = e.target.inputname.value
        const subdomain = e.target.languages.value
        this.fillContentArticle(subdomain, inputname)
        return false;
    }

    fillContentArticle = (subdomain, value) => {
        console.log('fetch the API')
        const fetchCb = (err, data) => {
            if(err) return console.error('article contents failed to fetch', err)
            console.log('fill the DOM', data)
            // content.fillContent('<div>hola</div>')
            // const articleContent = this.htmlToTemplate(data.parse.text['*'])
            document.querySelector('#content').innerHTML = ""
            document.querySelector('#content').innerHTML = data.parse.text['*']

        }
        fetcher(subdomain, value, fetchCb)
    }
 }

export default new formComponent()