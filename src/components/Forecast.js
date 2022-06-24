import { LitElement, html } from 'lit';

class Forecast extends LitElement {
  static get properties() {
    return {
        ip: { type: String },
        weather: { type: String },
    };
  }

  constructor() {
    super();
    this.weather = 'soleado';
  }

  firstUpdated() {

  }

  render() {
    return html` <div>${this.weather}</div> `;
  }
}

customElements.define('forecast-wc', Forecast);
