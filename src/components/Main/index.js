import React, { Component } from "react";
import "./styles.sass";
import Item from "../Item";
import data from "../../../data.json";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.items
    };
  }

  render() {
    return (
      <main className="main">
        {data.items.map(item => (
          <Item key={item.key} title={item.Title} />
        ))}
      </main>
    );
  }
}

export default Homepage;
