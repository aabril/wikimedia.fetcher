class appComponent {
    constructor() {
        let html = this.html()
        const template = document.createElement('template')
        html = html.trim()
        template.innerHTML = html
        this.node = template.content.firstChild
        this.node.style = this.style()
    }

    html = () => `
        <div>hello world!</div>
    `

    style = () => `
        background: red;
    `
}

export default new appComponent()