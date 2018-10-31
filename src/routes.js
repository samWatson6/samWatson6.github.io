import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import Main from "./components/Main";
// import Profile from "./components/Profile/index";
// import Login from "./components/Login/index";
// import Trades from "./components/Trades/index";
import ItemPage from "./components/ItemPage";
import MyItems from "./components/MyItems";
import ErrorPage from "./components/ErrorPage";
import Checkout from "./components/Checkout";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="item/:id" component={ItemPage} />
    <Route path="myItems" component={MyItems} />
    <Route path="checkout" component={Checkout} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
