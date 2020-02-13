import Component from './component.js'
import inputname from './inputname.component.js'
import langselector from './langselector.component.js'

class formComponent extends Component {
    constructor() {
        super()
        this.init()
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
 }

export default new formComponent()