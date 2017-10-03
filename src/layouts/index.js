import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

import "../css/typography.css";
import "../fonts/fonts.scss";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <div>
        <Helmet
          title="The Caitlyn Jenner Foundation"
          meta={[
            {
              name: "description",
              content:
                "The Caitlyn Jenner Foundation promotes equality and combats discrimination by providing grants to organizations that empower and improve the lives of transgender people, including youth, anti-bullying, suicide prevention, healthcare, housing, employment, and related programs."
            },
            {
              name: "keywords",
              content: "Caitlyn Jenner"
            },
            {
              name: "twitter:card",
              content: "summary_large_image"
            },
            {
              name: "twitter:site",
              content: "@CaitJennerFDN"
            },
            {
              name: "twitter:title",
              content: "The Caitlyn Jenner Foundation"
            },
            {
              name: "twitter:description",
              content:
                "The Caitlyn Jenner Foundation promotes equality and combats discrimination by providing grants to organizations that empower and improve the lives of transgender people, including youth, anti-bullying, suicide prevention, healthcare, housing, employment, and related programs."
            },
            {
              name: "twitter:image",
              content: "https://s3.amazonaws.com/cjf-assets/cait.png"
            },
            {
              name: "twitter:image:alt",
              content: "Caitlyn Jenner"
            },
            {
              property: "og:url",
              content: "http://www.caitlynjennerfoundation.org/"
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:title",
              content: "The Caitlyn Jenner Foundation"
            },
            {
              property: "og:description",
              content:
                "The Caitlyn Jenner Foundation promotes equality and combats discrimination by providing grants to organizations that empower and improve the lives of transgender people, including youth, anti-bullying, suicide prevention, healthcare, housing, employment, and related programs."
            },
            {
              property: "og:image",
              content: "https://s3.amazonaws.com/cjf-assets/cait.png"
            }
          ]}
        />
        <Nav />
        <div>
          {this.props.children()}
        </div>
        <Footer />
      </div>
    );
  }
}
