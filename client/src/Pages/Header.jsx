import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Message from "./Message";
import Notification from "./Norification";

const Header = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Hotel Rating Dish
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/">
                  <a className="nav-link" href="#">
                    <button className="btn btn-outline-success my-2 my-sm-0">
                      <i class="fas fa-home">
                        <span className="sr-only">(current)</span>
                      </i>
                    </button>
                  </a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/notification">
                  <a className="nav-link" href="#">
                    <button className="btn btn-outline-success my-2 my-sm-0">
                      <i class="fas fa-bell"></i>
                    </button>
                  </a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/message">
                  <a className="nav-link" href="#">
                    <button className="btn btn-outline-success my-2 my-sm-0">
                      <i class="fas fa-envelope"></i>
                    </button>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/notification" component={Notification} />
        </Switch>
      </Router>
    </div>
  );
};
export default Header;
