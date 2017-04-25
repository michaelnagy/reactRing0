import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import './MainMenu.css';

export default class MainMenu extends Component {

  render() {
    return (
      <div className="Header" >
        <Menu borderless stackable widths={5} fluid fixed={'top'} color={'orange'} style={{fontSize:'1.2em'}}>
        <Menu.Item
          name='home'
          active={true}
        />
        <Menu.Item
          as='a'
          href='https://github.com/AsiaGenius/ring-0/tree/master/diffs'
          target='_blank'
          name='diffs'
        />
        <Menu.Item
          name='forum'
          as='a'
          href='http://forum.ringsec.net/cm/'
          target='_blank'
        />
        <Menu.Item
          name='guides'
          as='a'
          href='https://github.com/AsiaGenius/ring-0/tree/master/diffs'
          target='_blank'
        />
        <Menu.Item
          name='chat'
          as='a'
          href='https://discordapp.com/invite/EKPPvxc'
          target='_blank'
        />
      </Menu>
      </div>
    );
  }
}
