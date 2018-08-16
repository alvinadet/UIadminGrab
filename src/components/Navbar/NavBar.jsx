import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu vertical>
          <Menu.Item
            as={Link}
            to="/"
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}>
            Home
          </Menu.Item>

          <Menu.Item>
            Panel Toko
            <Menu.Menu>
              <Menu.Item
                name="List Toko"
                as={Link}
                to="/restaurant"
                active={activeItem === 'List Toko'}
                onClick={this.handleItemClick}>
                List Toko
              </Menu.Item>
              <Menu.Item
                name="Add"
                as={Link}
                to="/restaurant/add"
                active={activeItem === 'Add'}
                onClick={this.handleItemClick}>
                Add
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}>
            Messages
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
