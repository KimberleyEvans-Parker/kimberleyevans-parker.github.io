import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Navigation2 from "./pages/Navigation 2";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Volunteer from "./pages/Volunteer";
import Projects from "./pages/Projects";
import Awards from "./pages/Awards";
import Error404 from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact />
        <Route path="/" component={Navigation} />
      </Switch>
      <Switch>
        {/* <Route path="/" exact /> */}
        <Route path="/experience" component={Navigation2} />
      </Switch>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/experience/work" exact component={Work} />
        <Route path="/experience/volunteer" exact component={Volunteer} />
        <Route path="/experience/projects" exact component={Projects} />
        <Route path="/experience/awards" exact component={Awards} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
