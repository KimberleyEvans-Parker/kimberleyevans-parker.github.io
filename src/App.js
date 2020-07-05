import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

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
