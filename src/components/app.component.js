import Component from './component.js'
import formComponent from './form.component.js'
import contentComponent from './content.component.js'

class appComponent extends Component {
    constructor() {
        super()
        this.init()
    }

    subcomponents = { formComponent, contentComponent }

    html = () => `
        <div>
            <subnode sid="formComponent"></subnode>
            <subnode sid="contentComponent"></subnode>
        </div>
    `

    style = () => `
    `
 }

export default new appComponent()