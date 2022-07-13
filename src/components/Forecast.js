import { LitElement, html } from 'lit';

class Forecast extends LitElement {
  static get properties() {
    return {
        ip: { type: String },
        weather: { type: String },
        icon: { type: String }
    };
  }

  async willUpdate(){
    const response = await this.getForecast()
    const forecast = response?.current?.condition
    this.weather = forecast?.text
    this.icon = forecast?.icon
  }

  async getForecast() {
    if(!this.ip) {
      return {}
    }
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7b1c9b73583e482c8b043712222406&q=${this.ip}&aqi=no`);
    const obj = await response.json();
    return obj
  }

  render() {
    return html`
    <div style="margin-bottom: 10px">${this.weather}</div> 
    <img src=${`https:${this.icon}`} alt="weather">
    `;
  }
}

customElements.define('forecast-wc', Forecast);
