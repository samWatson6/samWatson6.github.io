import React from "react";
import { render } from "react-dom";
// import { Router, browserHistory } from "react-router";
import AppContainer from "./components/AppContainer";
// import routes from "./routes";

import "./styles/global.sass";
import "./favicon.ico";

render(<AppContainer />, document.getElementById("app"));
