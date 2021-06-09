class VerticalInformation extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
        <h5 class='mt3'>
            <i class="${this.attributes.icon.value}"></i> ${this.attributes.title.value}
        </h5>
        <p class='text-center mt2'>
            ${this.attributes.content.value}
        </p>
    `
  }
}

window.customElements.define('vertical-information', VerticalInformation)
