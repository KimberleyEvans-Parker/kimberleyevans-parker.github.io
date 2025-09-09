import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <Link className="nav-link" to="/about">
      <div className="home-containter">
        <h1 className="fade down">Kimberley Evans-Parker</h1>
        <p className="fade up">Welcome</p>
      </div>
    </Link>
  )
}
