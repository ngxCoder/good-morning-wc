import { LitElement, html, css } from 'lit';
import './components/Forecast.js';
import './components/Time.js';

class App extends LitElement {
  static get properties() {
    return {
      ip: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
    this.ip = undefined;
  }

  async firstUpdated() {
    const response = await fetch('https://api.ipify.org/?format=json');
    const { ip } = await response.json();
    this.ip = ip;
  }

  render() {
    return html`
      <main>
        <forecast-wc .ip=${this.ip}></forecast-wc>
        <time-wc .ip=${this.ip}></time-wc>
      </main>
    `;
  }
}

customElements.define('good-morning-wc', App);
