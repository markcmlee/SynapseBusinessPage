import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Spotlight from "./Spotlight";
import Footer from "./Footer";
import Info from "./Info";
import About from "./About";
import Tutorial from "./Tutorial";
import NotFound from "./NotFound";
import Docs from "./Docs";
import Demo from "./Demo";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Spotlight />
          <Info />
        </Route>
        <Route exact path="/home">
          <Spotlight />
          <Info />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/docs">
          <Docs />
        </Route>
        <Route exact path="/tutorial">
          <Tutorial />
        </Route>
        <Route exact path="/demo">
          <Demo />
        </Route>
        <Route exact path="/notfound">
          <NotFound />
        </Route>
        404
      </Switch>
      <Footer />
    </>
  );
};

export default App;
