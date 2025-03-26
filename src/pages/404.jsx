import { Link, withRouter } from "react-router-dom";

export const Error404 = withRouter(() => {
  return (
    <div className="home-containter">
      <h1>404</h1>
      <p>Sorry, this page doesn't exist. </p>
      <Link className="nav-link" to="/">
        <p>Take me home</p>
      </Link>
    </div>
  )
})
