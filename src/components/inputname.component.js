import Component from './component.js'

class inputnameComponent extends Component {
    constructor() {
        super()
        this.init()
    }

    html = () => `
      <p>
        <label>
          Name
          <input type="text" id="inputname" name="inputname" required>
        </label> 
      </p>
    `
    style = () => `
    `
}

export default new inputnameComponent()