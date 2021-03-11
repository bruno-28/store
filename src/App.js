import React from "react";
import TopBar from "./TopBar";
import ItemList from "./ItemList";

class App extends React.Component {
  state = {
    products: [
      {
        name: "Rusty Sword",
        description: "Simple sword description.",
        image: "/images/rusty_sword.png",
        price: "5",
      },
      {
        name: "Broad Sword",
        description: "Simple sword description.",
        image: "/images/broad_sword.png",
        price: "25",
      },
    ],
  };

  render() {
    return (
      <div>
        <TopBar />
        <ItemList products={this.state.products} />
      </div>
    );
  }
}

export default App;
