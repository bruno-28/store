import React from "react";
import TopBar from "./TopBar";
import ItemList from "./ItemList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Rusty Sword",
          description: "Simple sword description.",
          image: "/images/rusty_sword.png",
          price: 5,
        },
        {
          id: 2,
          name: "Broad Sword",
          description: "Simple sword description.",
          image: "/images/broad_sword.png",
          price: 25,
        },
        {
          id: 3,
          name: "Great Sword",
          description: "Simple sword description.",
          image: "/images/great_sword.png",
          price: 15,
        },
      ],
      cartQuantity: 0,
    };
  }

  render() {
    return (
      <div>
        <TopBar quantity={this.state.cartQuantity} />
        <ItemList products={this.state.products} />
      </div>
    );
  }
}

export default App;
