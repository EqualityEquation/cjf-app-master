import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "../styles/_pages.scss";
import transChorus from "../assets/images/trans-chorus.jpg";
import transHealthProgram from "../assets/images/trans-health-program.jpg";
import transLatinCoalition from "../assets/images/trans-latin-coalition.jpg";

export default class Connect extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Connect | The Caitlyn Jenner Foundation</title>
        </Helmet>
        <header className="page-header page-header--connect">
          <div className="page-header__row">
            <div className="page-header__copy">
              <nav className="page-header__breadcrumbs">
                <p>
                  <Link to="/">Home</Link>{" "}
                  <span className="page-header__breadcrumb-caret">>></span>{" "}
                  <span className="page-header__breadcrumbs--current">
                    Connect
                  </span>
                </p>
              </nav>
              <h2 className="page-header__heading">Connect With Us</h2>
              <div className="page-header__body">
                <p className="page-header__paragraph">
                  Social networks:{" "}
                  <a
                    href="https://facebook.com/CaitlynJennerFoundation/"
                    target="_blank"
                  >
                    Facebook
                  </a>,{" "}
                  <a
                    href="https://www.instagram.com/caitlynjennerfdn/"
                    target="_blank"
                  >
                    Instagram
                  </a>,{" "}
                  <a href="https://twitter.com/caitjennerfdn" target="_blank">
                    Twitter
                  </a>
                </p>
                <p className="page-header__paragraph">
                  General inquiries:{" "}
                  <a href="mailto:info@caitlynjennerfoundation.org">
                    info@caitlynjennerfoundation.org
                  </a>
                </p>
                <p className="page-header__paragraph">
                  Address:<br />
                  Caitlyn Jenner Foundation<br />
                  c/o The Artemis Agency<br />
                  10940 Wilshire Blvd., Suite 600<br />
                  Los Angeles, CA 90024
                </p>
                <p className="page-header__paragraph">
                  For journalists and press inquiries, contact Alan Nierob at{" "}
                  <a href="mailto:anierob@rogersandcowan.com">
                    anierob@rogersandcowan.com
                  </a>
                </p>
                <p className="page-header__paragraph">
                  For partnerships, contact{" "}
                  <a href="mailto:info@caitlynjennerfoundation.org">
                    info@caitlynjennerfoundation.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
