import React, { Component } from 'react';
import Charts from './Charts.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Content />
        <Charts />
      </div>
    );
  }
}

export default App;
