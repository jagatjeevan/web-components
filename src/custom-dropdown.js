const template = document.createElement('template');

template.innerHTML = `
<style>
.drop-down-control {
    margin: 10px 0;
    border: 1px solid #dedede;
    padding: 10px;
    position: relative;
}
.caret {
    position: absolute;
    right: 10px;
    transform: rotate(-90deg);
    color: #909090;
}
</style>
<div class="dropdown-container">
    <div class="drop-down-control">
        <label>Html for drop down component</label>
        <span class="caret"> &lt; </span>
    </div>
</div>
`;

class DropDown extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.isDropdownOpen = false;

        this.$label = this.shadowRoot.querySelector('label');
        this.$dropDownControl = this.shadowRoot.querySelector('.drop-down-control');
        this.$dropDownControl.addEventListener('click', function() {
            this.dispatchEvent(
                new CustomEvent('onClick', {
                    detail: 'This is from HTML element',
                })
            );
        });
    }

    get selectedValue() {
        return this.getAttribute('label');
    }

    set selectedValue(value) {
        return this.setAttribute('label', value);
    }

    static get observedAttributes() {
        return ['label'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.$label.innerHTML = this.selectedValue;
    }
}

window.customElements.define('drop-down', DropDown);