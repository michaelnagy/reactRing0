import React, { Component } from 'react';
import MainMenu from './Components/MainMenu/MainMenu';
import Headline from './Components/Headline/Headline';

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <Headline/>
      </div>
    );
  }
}

export default App;
