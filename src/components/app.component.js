class appComponent {
    constructor() {
        let html = this.html()
        const template = document.createElement('template')
        html = html.trim()
        template.innerHTML = html
        this.node = template.content.firstChild
    }

    html = () => `
        <div>hello world!</div>
    `
}

export default new appComponent()