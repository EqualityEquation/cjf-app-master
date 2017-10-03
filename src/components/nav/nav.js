import React, { Component } from "react";
import Link from "gatsby-link";
import "./_nav.scss";
import logo from "../../assets/images/cjf_logo.svg";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__row">
          <div className="nav__menu nav__menu--left">
            <p className="nav__menu-item nav__menu-item--left">
              <Link to="/">Home</Link>
            </p>
            <p className="nav__menu-item nav__menu-item--left">
              <Link to="/about-us">About Us</Link>
            </p>
            <p className="nav__menu-item nav__menu-item--left">
              <Link to="/grantees">Grantees</Link>
            </p>
          </div>
          <Link to="/">
            <div className="nav__menu nav__menu--center" />
          </Link>
          <div className="nav__menu nav__menu--right">
            {/* <p className="nav__menu-item nav__menu-item--right">
              <Link to="/tsoa">Transgender State of America</Link>
            </p> */}
            <p className="nav__menu-item nav__menu-item--right">
              <a
                href="https://donorbox.org/caitlyn-jenner-foundation"
                target="_blank"
                className="custom-dbox-popup"
              >
                Donate
              </a>
            </p>
            <p className="nav__menu-item nav__menu-item--right">
              <Link to="/connect">Connect</Link>
            </p>
          </div>
          <div className="nav__menu nav__menu--mobile">
            <img className="nav__menu--mobile-logo" src={logo} />
            <div className="nav__menu--mobile-items">
              <p className="nav__menu-item nav__menu-item--left">
                <Link to="/">Home</Link>
              </p>
              <p className="nav__menu-item nav__menu-item--left">
                <Link to="/about-us">About Us</Link>
              </p>
              <p className="nav__menu-item nav__menu-item--left">
                <Link to="/grantees">Grantees</Link>
              </p>
              {/* <p className="nav__menu-item nav__menu-item--right">
                <Link to="/tsoa">Transgender State of America</Link>
              </p> */}
              <p className="nav__menu-item nav__menu-item--right">
                <a
                  href="https://donorbox.org/caitlyn-jenner-foundation"
                  className="custom-dbox-popup"
                >
                  Donate
                </a>
              </p>
              <p className="nav__menu-item nav__menu-item--right">
                <Link to="/connect">Connect</Link>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
