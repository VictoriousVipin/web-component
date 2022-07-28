const template = document.createElement("template");
template.innerHTML = `
    <style>
        .primary {
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
            border-radius: 0.25em;
        }
        .secondary{
            color: #fff;
            background-color: #6c757d;
            border-color: #6c757d;
            border-radius: 0.25em;
        }
        .success {
            color: #fff;
            background-color: #28a745;
            border-color: #28a745;
            border-radius: 0.25em;
        }
        .error{
            color: #fff;
            background-color: #dc3545;
            border-color: #dc3545;
            border-radius: 0.25em;
        }
    </style>
    <button>Test Button
    </button>
`;

class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot
      .querySelector("button")
      .classList.add(this.getAttribute("type"));
  }
}

window.customElements.define("custom-button", CustomButton);
