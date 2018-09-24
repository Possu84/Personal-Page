import React from "react";

import ReactDOM from "react-dom";

import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

import Transition from "react-transition-group/Transition";

/////////////MODULES////////////

import Welcome from "./welcome";

import Bio from "./bio";

import Projects from "./projects";

import Contact from "./contact";

import Navi from "./navi";

import ThreeScene from "./three";

import Container from "./container";

import Header from "./header";

//////////APP//////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showitem1: false
    };
  }
  toggleItem1() {
    this.setState({
      showitem1: !this.state.showitem1
    });
  }

  componentDidMount() {
    console.log("compnent did mount");
    this.setState({
      showitem1: false
    });
  }

  render() {
    return (
      <div id="app_main">
        <BrowserRouter>
          <div>
            <Header />
            <Container />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

{
  /* <Route exact path="/" component={Welcome} />
<Route exact path="/projects" component={Projects} />
<Route exact path="/bio" component={Bio} />
<Route exact path="/contact" component={Contact} /> */
}
{
  /* <Navi /> */
}
{
  /* <Header />
<Container /> */
}
