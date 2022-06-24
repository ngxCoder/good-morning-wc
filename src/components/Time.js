import { LitElement, html } from 'lit';

export class Time extends LitElement {
  static get properties() {
    return {
      ip: { type: String },
      time: { type: String },
    };
  }

  constructor() {
    super();
    this.time = 'app';

  }

  render() {
    return html`
      <main>
        <h1>${this.ip}</h1>
      </main>
      </p>
    `;
  }
}

customElements.define('time-wc', Time);
