import React, { Component } from "react";
import "./_mailchimp-signup.scss";

class MailchimpSignup extends Component {
  render() {
    const displayNone = {
      display: "none"
    };

    const inputStyle = {
      position: "absolute",
      left: -5000
    };

    return (
      <div className="cjf-splash__main">
        {/* Begin MailChimp Signup Form */}
        <div id="mailchimp">
          <form
            action="//caitlynjennerfoundation.us15.list-manage.com/subscribe/post?u=8b3da6c1d6f52662ffd5f1296&amp;id=ae6c3ae906"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate cjf-splash__form"
            target="_blank"
            noValidate
          >
            <input
              type="email"
              placeholder="Your email address"
              name="EMAIL"
              className="required email cjf-splash__input"
              id="mce-EMAIL"
            />
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={displayNone}
              />
              <div
                className="response"
                id="mce-success-response"
                style={displayNone}
              />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={inputStyle} aria-hidden="true">
              <input
                type="text"
                name="b_8b3da6c1d6f52662ffd5f1296_ae6c3ae906"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Sign Up"
                name="submit"
                id="mc-embedded-subscribe"
                className="button cjf-splash__button"
              />
            </div>
          </form>
        </div>
        {/* End mc_embed_signup */}
      </div>
    );
  }
}

export default MailchimpSignup;
