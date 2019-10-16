import React, { Component } from 'react';
import ExampleComponent from './Components/ExampleComponent';

export default class App extends Component {
  render = () => { 
    return (
      <ExampleComponent frameworks={['React', 'Angular', 'Vue', 'Svelte', 'Bootstrap', 'Tailwind', 'Knockout', '.NET', 'Ruby-on-Rails']} />
    );
  }
}
