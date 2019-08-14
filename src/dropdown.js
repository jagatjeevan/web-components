const template = document.createElement('template');

template.innerHTML = `
    <style>
    .container {
        padding: 10px;
    }
    button {
        display: block;
        overflow: hidden;
        position: relative;
        padding: 10px 20px;
        font-size: 16px;
        background: #369;
        color: #fff;
        border: 0;
    }
    </style>
    <div class="container">
        <button>Label</button>
    </div>
`;

class Button extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('my-button', Button);