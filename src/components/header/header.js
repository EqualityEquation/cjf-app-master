import React, { Component } from "react";
import Link from "gatsby-link";
import "./_header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__row">
          <div className="header__copy">
            <h2 className="header__heading">Our Mission</h2>
            <h3 className="header__subhead">The Caitlyn Jenner Foundation promotes equality and combats discrimination by providing grants to organizations that empower and improve the lives of transgender people, including youth, anti-bullying, suicide prevention, healthcare, housing, employment, and related programs.</h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
