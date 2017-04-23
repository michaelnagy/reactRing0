import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import './MainMenu.css';

export default class MainMenu extends Component {
  constructor() {
    super()
    this.state = {activeItem : 'home'};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="Header">
        <Menu borderless stackable widths={4} fluid fixed={'top'} color={'orange'}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='diffs'
          active={activeItem === 'diffs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='repository'
          active={activeItem === 'repository'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </div>
    );
  }
}
