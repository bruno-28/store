import React from "react";
import { Icon, Label } from "semantic-ui-react";

const CartWidget = ({ quantity }) => (
  <Label as="a" size="big">
    <Icon name="shopping cart" /> {quantity}
  </Label>
);

export default CartWidget;
