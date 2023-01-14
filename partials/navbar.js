const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<header class="mb-auto">
<div>
<h3 class="float-md-start mb-0">Luis Daniel García</h3>
<nav class="nav nav-masthead justify-content-center float-md-end">
    <a href="#" class="nav-link active" aria-current="page">Home</a>
    <a class="nav-link" href="/views/habilidades">Habilidades</a>
</nav>
</div>
</header>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);