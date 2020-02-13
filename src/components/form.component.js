import Component from './component.js'
import inputname from './inputname.component.js'
import langselector from './langselector.component.js'

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
        e.preventDefault();
        const inputname = e.target.inputname.value
        const subdomain = e.target.languages.value
        this.fillContentArticle(subdomain, inputname)
        return false;
    }

    fillContentArticle = (subdomain, value) => {
        console.log('fetch the API')
        console.log('fill the DOM')
    }
 }

export default new formComponent()