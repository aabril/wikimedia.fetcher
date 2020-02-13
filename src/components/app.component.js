class appComponent {
    constructor() {
        const html = this.html() //format template
        this.node = this.htmlToTemplate(html) //add template as DOM node
        this.node.style = this.style() // add style to DOM node
        // this.node.addEventListener('click', this.onclick) //just an example
    }

    htmlToTemplate = (html) => {
        const template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild        
    }

    // just an example
    // onclick = () => {
    //     console.log('ho! clicked')
    // }

    html = () => `
        <div>hello world!</div>
    `

    style = () => `
        background: red;
    `
 }

export default new appComponent()