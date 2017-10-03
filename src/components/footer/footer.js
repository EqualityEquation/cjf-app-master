import React, { Component } from "react";
import Link from "gatsby-link";
import NewsletterBand from "../newsletter-band/newsletter-band";
import logo from "../../assets/images/cjf_logo.svg";
import fb from "../../assets/images/fb.svg";
import tw from "../../assets/images/tw.svg";
import ig from "../../assets/images/ig.svg";
import em from "../../assets/images/em.svg";
import "./_footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <NewsletterBand />
        <div className="footer__row">
          <div className="footer__mission">
            <p className="footer__mission-hed">Our Mission</p>
            <p className="footer__mission-subhed">
              The Caitlyn Jenner Foundation promotes equality and combats
              discrimination by providing grants to organizations that empower
              and improve the lives of transgender people, including youth,
              anti-bullying, suicide prevention, healthcare, housing,
              employment, and related programs.
            </p>
          </div>
          <div className="footer__links">
            <p className="footer__links-hed">Useful Links</p>
            <ul className="footer__links-list">
              {/* <li className="footer__links-list-item">Shop</li> */}
              <li className="footer__links-list-item">
                <a
                  href="https://donorbox.org/caitlyn-jenner-foundation"
                  target="_blank"
                  className="custom-dbox-popup"
                >
                  Donate
                </a>
              </li>
              {/* <li className="footer__links-list-item">News</li> */}
              {/* <li className="footer__links-list-item">Events</li> */}
              <li className="footer__links-list-item">
                <Link to="/tsoa">TSOA</Link>
              </li>
              <li className="footer__links-list-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="footer__links-list-item">
                <Link to="/connect">Connect</Link>
              </li>
            </ul>
          </div>
          <div className="footer__meta">
            <figure className="footer__logo">
              <img src={logo} alt="The Caitlyn Jenner Foundation" />
            </figure>
            <div className="footer__social">
              <a
                href="https://facebook.com/CaitlynJennerFoundation/"
                className="footer__social-buttons footer__social-buttons--facebook"
              >
                <figure className="footer__button-svg">
                  <img src={fb} alt="Facebook" />
                </figure>
              </a>
              <a
                href="https://twitter.com/CaitJennerFDN"
                className="footer__social-buttons footer__social-buttons--twitter"
              >
                <figure className="footer__button-svg">
                  <img src={tw} alt="Twitter" />
                </figure>
              </a>
              <a
                href="http://instagram.com/CaitlynJennerFDN"
                className="footer__social-buttons footer__social-buttons--instagram"
              >
                <figure className="footer__button-svg">
                  <img src={ig} alt="Instagram" />
                </figure>
              </a>
              <a
                href="mailto:info@caitlynjennerfoundation.org"
                className="footer__social-buttons footer__social-buttons--email"
              >
                <figure className="footer__button-svg">
                  <img src={em} alt="Email" />
                </figure>
              </a>
            </div>
            <p className="footer__credit">
              &copy; 2017 Caitlyn Jenner Foundation Inc. &trade;
            </p>
            <p className="footer__credit">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
