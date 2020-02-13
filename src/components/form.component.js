import Component from './component.js'

class formComponent extends Component {
    constructor() {
        super()
        const html = this.html() //format template
        this.node = this.htmlToTemplate(html) //add template as DOM node
        this.node.style = this.style() // add style to DOM node
    }

    html = () => `
        <div>form Component</div>
    `

    style = () => `
        background: green;
    `
 }

export default new formComponent()