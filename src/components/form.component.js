import Component from './component.js'

class formComponent extends Component {
    constructor() {
        super()
        this.init()
    }

    html = () => `
        <div>form Component</div>
    `

    style = () => `
        background: green;
    `
 }

export default new formComponent()