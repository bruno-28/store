import React from "react";
import { Icon, Label } from "semantic-ui-react";

const cart_size = 0;

const CartWidget = () => (
  <Label as="a" size="big">
    <Icon name="shopping cart" />
    {cart_size}
  </Label>
);

export default CartWidget;
