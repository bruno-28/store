import React from "react";
import { Icon, Label } from "semantic-ui-react";

const cart_size = 16;

const CartWidget = () => (
  <Label as="a" size="huge">
    <Icon name="shopping cart" />
    {cart_size}
  </Label>
);

export default CartWidget;
