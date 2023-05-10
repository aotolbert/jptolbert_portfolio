class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
            <ul class="header-content hidden">
                <li><a href="./" id="header1">- Home</a></li>
                <li><a href="./about" id="header2">- About</a></li>
                <li><a href="./tutoring" id="header2">- Availability</a></li>
                <li><a href="./resources" id="header3">- Resources</a></li>
            </ul>
        </div>`;
    }
}
  
  customElements.define('header-component', Header);
  