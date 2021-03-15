import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import CartWidget from "./CartWidget";

class TopBar extends Component {
  state = {
    activeItem: "store",
  };

  handleItemClick = (e) => this.setState({ activeItem: e.target });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          name="store"
          active={activeItem === "store"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="products"
          active={activeItem === "products"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        />
        <Menu.Item position="right">
          <CartWidget />
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default TopBar;
