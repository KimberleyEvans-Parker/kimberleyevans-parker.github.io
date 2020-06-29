import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/" component={() => <Navigation />} />
      </Switch>
      <Switch>
        <Route path="/about" exact component={() => <About />} />
        <Route path="/projects" exact component={() => <Projects />} />
        <Route path="/contact" exact component={() => <Contact />} />
      </Switch>
    </Router>
  );
}

export default App;
