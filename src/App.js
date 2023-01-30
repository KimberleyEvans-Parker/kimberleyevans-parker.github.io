import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./pages/Navigation";
import SubNavbar from "./pages/SubNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Volunteer from "./pages/Volunteer";
import Projects from "./pages/Projects";
import Awards from "./pages/Awards";
import Hobbies from "./pages/hobbies/Hobbies";
import Lego from "./pages/hobbies/Lego";
import Photography from "./pages/hobbies/Photography";
import Words from "./pages/Words";
import LocateEntrance from "./pages/amazonian mystery/LocateEntrance";
import OpenEntrance from "./pages/amazonian mystery/OpenEntrance";
import SolvedMystery from "./pages/amazonian mystery/SolvedMystery";
import Error404 from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact />
        <Route path="/AmazonianMystery" />
        <Route path="/" component={Navigation} />
      </Switch>
      <Switch>
        <Route
          path="/hobbies"
          component={() => (
            <SubNavbar section={"hobbies"} headings={["Lego", "Photography"]} />
          )}
        />
        <Route
          path="/experience"
          component={() => (
            <SubNavbar
              section={"experience"}
              headings={["Work", "Volunteer", "Projects", "Awards"]}
            />
          )}
        />
      </Switch>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/experience/work" exact component={Work} />
        <Route path="/experience/volunteer" exact component={Volunteer} />
        <Route path="/experience/projects" exact component={Projects} />
        <Route path="/experience/awards" exact component={Awards} />
        <Route path="/hobbies" exact component={Hobbies} />
        <Route path="/hobbies/lego" exact component={Lego} />
        <Route path="/hobbies/photography" exact component={Photography} />
        <Route path="/words" exact component={Words} />
        <Route path="/AmazonianMystery" exact component={LocateEntrance} />
        <Route path="/AmazonianMystery/OpenEntrance" exact component={OpenEntrance} />
        <Route path="/AmazonianMystery/SolvedMystery" exact component={SolvedMystery} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
