const newTemplate = document.createElement('template');

newTemplate.innerHTML = `
<div>Hello World</div>
`;

class MyTemplate extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(newTemplate.content.cloneNode(true));
    }
}

window.customElements.define('my-template', MyTemplate);