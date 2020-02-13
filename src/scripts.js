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

const app = new appComponent()

const main = document.querySelector('#main')
main.appendChild(app.node)
