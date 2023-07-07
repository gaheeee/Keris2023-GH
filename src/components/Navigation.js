import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className="navbar-menu">
      
        <Link to="/">
          <img
            src={require("../assets/logo.png")}
            alt="Logo"
            className="nav-image"
          ></img>
        </Link>
      
      <Link className="hover-effect" to="/">
        <h2>Home</h2>
      </Link>
      <Link className="hover-effect" to="/data">
        <h2>About(data test)</h2>
      </Link>

    </menu>
  );
}
