class Component {
    constructor(){
        this.init()
    }

    init = () => {
        const html = this.html() //format template
        this.node = this.htmlToTemplate(html) //add template as DOM node
        this.addSubnodes() // add dynamically subnodes
        this.node.style = this.style() // add style to DOM node
    }


    htmlToTemplate = (html) => {
        const template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild        
    }

    addSubnodes = () => {
        // todo: add exception if is not on this.subnodes
        const subnodes = this.node.querySelectorAll('subnode')
        subnodes.forEach((subnodeTag) => {
            const subnodeName = subnodeTag.getAttribute('sid')
            const selector = `subnode[sid="${subnodeName}"]`
            const subnodeEl = this.subcomponents[subnodeName].node
            this.node.querySelector(selector).append(subnodeEl)
        })
    }

    html = () => `<div></div>`
    style = () => ``

}

export default Component