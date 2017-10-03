import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "../styles/_pages.scss";
import transChorus from "../assets/images/trans-chorus.jpg";
import transHealthProgram from "../assets/images/trans-health-program.jpg";
import transLatinCoalition from "../assets/images/trans-latin-coalition.jpg";

export default class Grantees extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Grantees | The Caitlyn Jenner Foundation</title>
        </Helmet>
        <header className="page-header">
          <div className="page-header__row">
            <div className="page-header__copy">
              <nav className="page-header__breadcrumbs">
                <p>
                  <Link to="/">Home</Link>{" "}
                  <span className="page-header__breadcrumb-caret">>></span>{" "}
                  <span className="page-header__breadcrumbs--current">
                    Grantees
                  </span>
                </p>
              </nav>
              <h2 className="page-header__heading">Grantees</h2>
              <div className="page-header__body">
                <p className="page-header__paragraph">
                  Out of the L, the B, the G, and the T, transgender rights and
                  equality has historically been the most underfunded. Caitlyn
                  started the Caitlyn Jenner Foundation to support organizations
                  doing on-the-ground and impactful work to empower the trans
                  community and further trans rights. If you want to nominate or
                  highlight an organization in this space that is not listed
                  below, please fill out and submit {" "}
                  <a
                    href="https://docs.google.com/a/caitlynjennerfoundation.org/forms/d/138YKKv44WqXRR7uRWuatoyglaLha3wiepTa6Tsl_cWo/edit?usp=drive_web"
                    target="_blank"
                  >
                    this form
                  </a>.
                </p>
                <p className="page-header__paragraph">
                  Applications are evaluated on a quarterly basis. Applicants
                  will be notified by email of their status. If there are any
                  questions, please contact us at{" "}
                  <a href="mailto:info@caitlynjennerfoundation.org">
                    info@caitlynjennerfoundation.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="page-body">
          <div className="page-body__row">
            <div className="page-body__content">
              <h2 className="page-body__heading">Our 2017 Grantees</h2>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={transChorus} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    <a href="http://transchorusla.org/" target="_blank">
                      Trans Chorus of Los Angeles
                    </a>
                  </h3>
                  <p className="page-body__paragraph">
                    The mission of the Trans Chorus of Los Angeles is to
                    fiercely empower the transgender, non-binary and intersex
                    community to discover, love, develop, and use their voices
                    to change the social ecology everywhere.
                  </p>
                </div>
              </div>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={transHealthProgram} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    <a
                      href="http://www.wellchild.org/transgender-health-program/"
                      target="_blank"
                    >
                      The Transgender Health Program at St. John’s Well Child &
                      Family Center
                    </a>
                  </h3>
                  <p className="page-body__paragraph">
                    St John’s mission is to eliminate health disparities and
                    foster community well-being by providing and promoting the
                    highest quality care in South Los Angeles. St John’s is a
                    community health center, serving patients of all ages
                    through a network of Federally Qualified Health Centers and
                    school-based clinics that span the breadth of Central and
                    South Los Angeles and Compton.The Transgender Health Program
                    welcomes all patients regardless of gender identity, sexual
                    orientation, and/or presentation, and provides comprehensive
                    transgender health services in a safe and welcoming
                    environment.
                  </p>
                </div>
              </div>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={transLatinCoalition} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    <a
                      href="https://www.translatinacoalition.org/"
                      target="_blank"
                    >
                      TransLatin@ Coalition
                    </a>
                  </h3>
                  <p className="page-body__paragraph">
                    The mission of the TransLatin@ Coalition is to advocate for
                    the specific needs of the TransLatin@ community that resides
                    in the U.S.A. and to plan strategies that improve our
                    quality of life. The vision of TransLatin@ Coalition is to
                    amplify education and resources to promote the empowerment
                    of trans leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
