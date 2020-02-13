import Component from './component.js'
import formComponent from './form.component.js'

class appComponent extends Component {
    constructor() {
        super()
        this.init()
    }

    subcomponents = { formComponent }

    // just an example
    // onclick = () => {
    //     console.log('ho! clicked')
    // }

    html = () => `
        <div>
            <div>hola</div>
            <subnode sid="formComponent"></subnode>
        </div>
    `

    style = () => `
        background: red;
    `
 }

export default new appComponent()