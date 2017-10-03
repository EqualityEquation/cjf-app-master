import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "../styles/_pages.scss";
import transChorus from "../assets/images/trans-chorus.jpg";
import transHealthProgram from "../assets/images/trans-health-program.jpg";
import transLatinCoalition from "../assets/images/trans-latin-coalition.jpg";

export default class TSOA extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Transgender State of America | The Caitlyn Jenner Foundation
          </title>
        </Helmet>
        <header className="page-header page-header--connect">
          <div className="page-header__row">
            <div className="page-header__copy">
              <nav className="page-header__breadcrumbs">
                <p>
                  <Link to="/">Home</Link>{" "}
                  <span className="page-header__breadcrumb-caret">>></span>{" "}
                  <span className="page-header__breadcrumbs--current">
                    Transgender State of America
                  </span>
                </p>
              </nav>
              <h2 className="page-header__heading">Coming Soon</h2>
              <div className="page-header__body" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}
