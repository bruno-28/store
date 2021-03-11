import React from "react";
import { Image, Button } from "semantic-ui-react";

class Item extends React.Component {
  render() {
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{this.props.name}</div>
          <div className="meta">{this.props.description}</div>
          <Image src={this.props.image} size="small" />
          <div className="meta">${this.props.price}</div>
          <Button>Add to cart</Button>
        </div>
      </div>
    );
  }
}

export default Item;
