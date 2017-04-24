import React, { Component } from 'react';
import MainMenu from './Components/MainMenu/MainMenu';
import Headline from './Components/Headline/Headline';
import GithubRepo from './Components/GithubRepo/GithubRepo';
import Features from './Components/Features/Features';
import { Container, Icon } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <Headline/>
        <GithubRepo/>
        <Features/>
        <Container fluid={true} textAlign={'center'} style={{padding:'0.5em', backgroundColor: '#E8E8E8', fontSize:'0.9em', color:'rgba(0,0,0,.4)'}}>
          <p>made with <Icon name='heart' color='pink' size='large'/> by <a style={{color:'#77828e'}} href='https://github.com/michaelnagy' target='_blank'>Michael Nagy</a> </p>
        </Container>
      </div>
    );
  }
}

export default App;
