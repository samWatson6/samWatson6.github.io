import React, { Component, PropTypes } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Router, browserHistory } from "react-router";
import routes from "../routes";

// import Header from "./Header/index";
// import Footer from "./Footer/index";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: []
    };
  }
  render() {
    return (
      <div className="wrapper">
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        />
        <Router history={browserHistory} routes={routes} />
      </div>
    );
  }
}

export default AppContainer;
