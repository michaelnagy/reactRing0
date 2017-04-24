import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import './MainMenu.css';

export default class MainMenu extends Component {

  render() {
    return (
      <div className="Header">
        <Menu borderless stackable widths={4} fluid fixed={'top'} color={'orange'}>
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
          href='https://github.com/AsiaGenius/ring-0/tree/master/diffs'
          target='_blank'
        />
        <Menu.Item
          name='guides'
          as='a'
          href='https://github.com/AsiaGenius/ring-0/tree/master/diffs'
          target='_blank'
        />
      </Menu>
      </div>
    );
  }
}
