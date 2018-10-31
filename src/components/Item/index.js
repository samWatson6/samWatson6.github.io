import React from "react";
// import {Link} from 'react-router';
import { browserHistory } from "react-router";

import "./styles.sass";

const Item = props => (
  <div className="item">
    <div
      className="content"
      onClick={() => {
        browserHistory.push("/item/123");
      }}
    />
    <div className="item-title"> {props.title}</div>
  </div>
);

export default Item;
