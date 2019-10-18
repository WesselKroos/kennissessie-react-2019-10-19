import React from 'react';
import ReactDOM from 'react-dom';
import Frameworks from './Frameworks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Frameworks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
