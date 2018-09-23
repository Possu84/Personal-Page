import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Welcome from "./welcome";
import Bio from "./bio";
import Projects from "./projects";
import Contact from "./contact";

function Container({ location }) {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          className="fade-enter"
          timeout={{ enter: 300, exit: 300 }}
        >
          <Switch location={location}>
            <Route exact path="/" component={Welcome} />
            <Route path="/projects" component={Projects} />
            <Route path="/bio" component={Bio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default withRouter(Container);
