import Component from './component.js'

class contentComponent extends Component {
    constructor() {
        super()
        this.init()
    }

    fillContent = (html) => {
        this.node = this.htmlToTemplate(html)
        this.node.style = this.style()
    }


    html = () => `
        <div id="content"></div>
    `

    style = () => `
    `
}

export default new contentComponent()