import React from "react";
import Item from "./Item";

class ItemList extends React.Component {
  render() {
    const products = this.props.products.map((product) => (
      <Item
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
      />
    ));
    return <div id="products">{products}</div>;
  }
}

export default ItemList;
