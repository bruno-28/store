import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import CartWidget from "./CartWidget";

class TopBar extends Component {
  render() {
    return (
      <Menu stackable>
        <Menu.Item name="store" />
        <Menu.Item name="products" />
        <Menu.Item name="about" />
        <Menu.Item position="right">
          <CartWidget quantity={this.props.quantity} />
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item name="login" />
      </Menu>
    );
  }
}

export default TopBar;
