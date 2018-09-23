import React from "react";

import { Switch, Route } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

/////////COMPONENTS///////////////

import Projects from "./projects";

import Bio from "./Bio";

import Contact from "./Contact";

import Welcome from "./welcome";

///////////////////////////////////

function Container() {
  return (
    <div>
      <Switch location={location}>
        <Route exact path="/" component={Welcome} />
        <Route path="/projects" component={Projects} />
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default Container;
