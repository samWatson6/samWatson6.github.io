import React, { Component } from "react";

import UserItem from "../UserItem/UserItem";
// import AddItemPage from "../AddItemPage/index";
import "./styles.sass";
import Checkout from "../Checkout";

class MyItems extends Component {
  render() {
    return (
      <div className="myItemsWrapper">
        <div className="addTradeWrapper">
          <div className="tradeBtn addItemBtn">
            <Checkout />
          </div>
        </div>
        {[1, 2, 3, 4].map((e, i) => (
          <UserItem key={i} />
        ))}
      </div>
    );
  }
}

export default MyItems;
