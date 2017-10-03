import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "../styles/_pages.scss";
import caitlynJenner from "../assets/images/caitlyn-jenner.jpg";
import zackaryDrucker from "../assets/images/zackary-drucker.jpg";
import andreaMetz from "../assets/images/andrea-metz.jpg";
import nickAdams from "../assets/images/nick-adams.jpg";
import andrewMorton from "../assets/images/andrew-morton.jpg";
import artemisAgency from "../assets/images/artemis-agency.jpg";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us | The Caitlyn Jenner Foundation</title>
        </Helmet>
        <header className="page-header">
          <div className="page-header__row">
            <div className="page-header__copy">
              <nav className="page-header__breadcrumbs">
                <p>
                  <Link to="/">Home</Link>{" "}
                  <span className="page-header__breadcrumb-caret">>></span>{" "}
                  <span className="page-header__breadcrumbs--current">
                    About Us
                  </span>
                </p>
              </nav>
              <h2 className="page-header__heading">Our Mission</h2>
              <div className="page-header__body">
                <p className="page-header__paragraph">
                  The Caitlyn Jenner Foundation was born on a tour bus full of
                  trans women on a cross-country road trip while filming E!’s{" "}
                  <i>I Am Cait</i>. In 2016, Caitlyn Jenner partnered with MAC
                  AIDS Fund on the sale of Finally Free lipstick, which provided
                  $1.3 million to transgender organizations nationwide. Caitlyn
                  was inspired to see her project benefit the grassroots work of
                  her beloved and under-resourced community, and took the leap
                  to start her own foundation.
                </p>
                <p className="page-header__paragraph">
                  The Caitlyn Jenner Foundation promotes equality and combats
                  discrimination by providing grants to organizations that
                  empower and improve the lives of transgender people, including
                  youth, anti-bullying, suicide prevention, healthcare, housing,
                  employment, and related programs.
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="page-body">
          <div className="page-body__row">
            <div className="page-body__content">
              <h2 className="page-body__heading">Our Leadership</h2>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={caitlynJenner} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    Caitlyn Jenner – Founder
                  </h3>
                  <p className="page-body__paragraph">
                    Caitlyn Jenner is an Olympic gold medalist, transgender
                    activist, and <i>New York Times</i> bestselling author. In
                    April of 2017 Jenner published her memoir titled{" "}
                    <i>The Secrets of My Life</i> and is now using her influence
                    to create positive change for the transgender community. In
                    her free time, she enjoys flying planes, racing cars in
                    Grand Prix events, working on her golf game, and spending
                    time with her children, many grandchildren, and Labrador
                    named Bertha.
                  </p>
                </div>
              </div>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={zackaryDrucker} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    Zackary Drucker – Director
                  </h3>
                  <p className="page-body__paragraph">
                    Zackary Drucker is an artist, activist, and producer whose
                    work focuses on transgender visibility and representation.
                    Drucker is an Emmy-nominated producer for the docu-series
                    <i>This Is Me</i>, as well as a producer on Golden
                    Globe-winning show <i>Transparent</i>.
                  </p>
                </div>
              </div>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={nickAdams} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    Nick Adams - Board Chair
                  </h3>
                  <p className="page-body__paragraph">
                    Nick Adams is the director of GLAAD's Transgender Media
                    Program, where he works to improve how the media portrays
                    transgender people. He regularly consults with films and TV
                    shows on how to write authentic transgender characters, and
                    serves as a resource to journalists who are writing stories
                    about the trans community.
                  </p>
                </div>
              </div>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={andreaMetz} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    Andrea Metz – Director
                  </h3>
                  <p className="page-body__paragraph">
                    Andrea Metz is an award winning executive producer, writer,
                    and director. After years of working as a scripted writer,
                    Metz joined Bunim-Murray Productions in 2007 where she has
                    produced hundreds of hours of television, including her
                    passion project, serving as executive producer/showrunner of
                    Caitlyn Jenner's GLAAD award winning docu-series{" "}
                    <i>I Am Cait</i>.
                  </p>
                </div>
              </div>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={andrewMorton} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    Andrew Morton - Foundation Counsel
                  </h3>
                  <p className="page-body__paragraph">
                    Andrew Morton is a Partner at Handler Thayer, LLP and Chair
                    of the firm’s Sports & Entertainment Law Group, serving a
                    client base of professional athletes, Olympians, artists,
                    entertainers and other public figures who wish to maximize
                    their social impact. Operating at the intersection of
                    celebrity and philanthropy, Andrew’s innovative legal
                    practice encompasses all aspects of high-profile
                    philanthropic engagement and branding – from the initial
                    formation of a tax-exempt organization, to ongoing
                    oversight, compliance and governance consistent with
                    nonprofit regulatory requirements and best practices.
                  </p>
                </div>
              </div>
              <div className="page-body__block">
                <figure className="page-body__thumbnail">
                  <img src={artemisAgency} className="page-body__image" />
                </figure>
                <div className="page-body__text">
                  <h3 className="page-body__subheading">
                    Artemis - Philanthropy Strategy
                  </h3>
                  <p className="page-body__paragraph">
                    The Artemis Agency is a full-service philanthropic advisory
                    firm for the Entertainment Industry and beyond. With more
                    than 60 years of experience serving the philanthropic
                    community, the Artemis leadership team has worked within and
                    on behalf of nonprofits, corporate foundations, and
                    individuals with high profile platforms.
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
