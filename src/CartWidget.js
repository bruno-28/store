import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -6,
    top: 8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "6px 4px",
    fontSize: 12,
  },
}))(Badge);

const CartWidget = () => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon fontSize="large" />
      </StyledBadge>
    </IconButton>
  );
};

export default CartWidget;
