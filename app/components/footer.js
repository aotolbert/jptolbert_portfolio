class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <div class="borderedFooterLink"><a href="./">Home</a></div>
            <div class="borderedFooterLink"><a href="./about">About</a></div>
            <div class="borderedFooterLink"><a href="./tutoring">Availability</a></div>
            <div class="borderedFooterLink"><a href="./resources">Resources</a></div>
        </div>`;
    }
}
  
  customElements.define('footer-component', Footer);
  