import { html } from 'lit';
import '../src/good-morning-wc.js';

export default {
  title: 'GoodMorningWc',
  component: 'good-morning-wc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <good-morning-wc
      style="--good-morning-wc-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </good-morning-wc>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
