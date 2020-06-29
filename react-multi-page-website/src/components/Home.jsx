import React from "react";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div class="home-containter">
      <h1 class="fade-down">Kimberley Evans-Parker</h1>
      <Link class="nav-link" to="/about">
        <p class="fade-up">Welcome</p>
      </Link>
    </div>
  );
}

export default withRouter(Home);
