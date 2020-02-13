import Component from './component.js'
import formComponent from './form.component.js'

class appComponent extends Component {
    constructor() {
        super()
        const html = this.html() //format template
        this.node = this.htmlToTemplate(html) //add template as DOM node
        this.addSubnodes()
        this.node.style = this.style() // add style to DOM node
        // // this.node.addEventListener('click', this.onclick) //just an example
    }

    subcomponents = { formComponent }

    addSubnodes = () => {
        const subnodes = this.node.querySelectorAll('subnode')
        subnodes.forEach((subnodeTag) => {
            const subnodeName = subnodeTag.getAttribute('sid')
            const selector = `subnode[sid="${subnodeName}"]`
            const subnodeEl = this.subcomponents[subnodeName].node
            this.node.querySelector(selector).append(subnodeEl)
        })
    }

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