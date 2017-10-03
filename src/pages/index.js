import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Header from "../components/header/header";
import NewsletterBand from "../components/newsletter-band/newsletter-band";
import CJFfeed from "../components/instafeed/instafeed";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Caitlyn Jenner Foundation</title>
        </Helmet>
        <Header />
        <CJFfeed />
      </div>
    );
  }
}
