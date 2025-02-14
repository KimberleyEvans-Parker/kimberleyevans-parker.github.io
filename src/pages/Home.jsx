import React from "react";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <Link className="nav-link" to="/about">
      <div className="home-containter">
        <h1 className="fade down">Kimberley Evans-Parker</h1>
        <p className="fade up">Welcome</p>
      </div>
    </Link>
  );
}

export default withRouter(Home);
