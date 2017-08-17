import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();

    // set state here
    this.state = { dummyState: [] };
  }

  render() {
    return (
      <div>
        Insert code here
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
