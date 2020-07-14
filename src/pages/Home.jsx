import React from "react";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="home-containter">
      <h1 className="fade down">Kimberley Evans-Parker</h1>
      <Link className="nav-link" to="/about">
        <p className="fade up">Welcome</p>
      </Link>
    </div>
  );
}

export default withRouter(Home);
