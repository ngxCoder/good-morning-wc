import { LitElement, html } from 'lit';

class Time extends LitElement {

  static get properties() {
    return {
      ip: { type: String },
      time: { type: String },
    };
  }

  async firstUpdated() {
    const response = await fetch(`https://worldtimeapi.org/api/ip`);
    const obj = await response.json();
    const utcDate = obj.utc_datetime;
    this.time = new Date(utcDate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  render() {
    return html`
      <main>
        <h1>${this.time}</h1>
      </main>
      </p>
    `;
  }
}

customElements.define('time-wc', Time);
