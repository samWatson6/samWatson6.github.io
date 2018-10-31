import React, { Component } from "react";
import { Link } from "react-router";
import logo from "../../../src/assets/images/Club_logo.jpg";

import "./styles.sass";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.previousWidth = 0;
    this.menuButton = (
      <button
        className="menuBtn"
        onClick={() => {
          document.querySelector(".menu").classList.toggle("open");
        }}
      >
        MENU
      </button>
    );

    this.loggedInMenu = (
      <div className="menu">
        <Link
          onlyActiveOnIndex={true}
          key={1}
          to="/"
          activeClassName="activeNavLink"
          className="navLink"
        >
          Home
        </Link>
        <Link
          onlyActiveOnIndex={true}
          key={3}
          to="/about"
          activeClassName="activeNavLink"
          className="navLink"
        >
          About
        </Link>
        <Link
          onlyActiveOnIndex={true}
          key={4}
          to="/myitems"
          activeClassName="activeNavLink"
          className="navLink"
        >
          My Cart
        </Link>
      </div>
    );

    this.loggedOutMenu = (
      <div className="menu loginMenu">
        <Link
          onlyActiveOnIndex={true}
          key={5}
          activeClassName="activeNavLink"
          className="navLink"
        >
          LogIn / Sign Up
        </Link>
      </div>
    );

    this.setNav();
    this.setMenuState(window.innerWidth);
    this.previousWidth = window.innerWidth;
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setMenuState(window.innerWidth);
    });
  }

  setMenuState(width) {
    if (this.previousWidth !== width) {
      if (width > 768) {
        const menu = document.querySelector("div.menu");
        if (menu) {
          menu.classList.remove("open");
        }
        this.setState({ menuActive: false });
      } else {
        this.setState({ menuActive: true });
      }
      this.previousWidth = width;
    }
  }

  setNav() {
    // check for auth here
    const True = true;
    if (True) {
      this.setState({ nav: this.loggedInMenu });
    } else {
      this.setState({ nav: this.loggedOutMenu });
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="logoWrapper">
            Rotary Club Holiday Sale
            <image src={logo} className="logo" />
          </h1>
          {this.state.menuActive ? this.menuButton : ""}
          {this.state.nav}
        </header>
        <image src={logo} className="logo" />
      </div>
    );
  }
}

export default Header;
