import React, { Component, PropTypes } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Header from "../Header";
import Footer from "../Footer";
import "./styles.sass";
import "../../styles/animation.sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: [],
      selectedItem: ""
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div key={this.props.location.pathname}>
            {this.props.children}
            <Footer />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
  "location.pathname": PropTypes.string
};

export default App;
