import React, { Component } from 'react';
import Frameworks from './Components/Frameworks';

export default class App extends Component {
  render = () => {
    return (
      <Frameworks items={['React', 'Angular', 'Vue', 'Svelte', 'Bootstrap', 'Tailwind', 'Knockout', '.NET', 'Ruby-on-Rails']} />
    );
  }
}
