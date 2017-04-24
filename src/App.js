import React, { Component } from 'react';
import MainMenu from './Components/MainMenu/MainMenu';
import Headline from './Components/Headline/Headline';
import GithubRepo from './Components/GithubRepo/GithubRepo';

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <Headline/>
        <GithubRepo/>
      </div>
    );
  }
}

export default App;
