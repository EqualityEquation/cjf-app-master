import React, { Component } from "react"
import Link from "gatsby-link"
import MailchimpSignup from "../mailchimp-signup/mailchimp-signup"
import "./_newsletter-band.scss"

class NewsletterBand extends Component {
  render() {
    return (
      <div className="newsletter-band">
        <div className="newsletter-band__row">
          <p className="newsletter-band__copy">
            Join our movement.
          </p>
          <MailchimpSignup />
        </div>
      </div>
    );
  }
}

export default NewsletterBand;
