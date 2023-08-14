import React, { Component } from 'react';
import Loader from '../shared/Loader';
import Link from 'next/link';

export class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
          <>
            <footer className="footer-area">
              <div className="container">
                <div className="subscribe-area">
                  <h3>Subscribe To Our Newsletter</h3>

                  <form className="newsletter-form" data-toggle="validator">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          name="name"
                          id="name"
                        />
                      </div>

                      <div className="col-lg-5 col-md-6 col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          name="EMAIL"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="col-lg-3 col-md-12 col-sm-12">
                        <button type="submit">
                          Subscribe Now <i className="flaticon-paper-plane"></i>
                        </button>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div
                          id="validator-newsletter"
                          className="form-result"
                        ></div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <div className="logo">
                        <Link href="#">
                          <a>
                            <img src="/images/white-logo.png" alt="image" />
                          </a>
                        </Link>
                        <p>
                          Who would consult, assist, guide, and develop digital
                          solutions through the right set of digital tools,
                          technologies, and expert consultation.
                        </p>
                      </div>

                      <ul className="social">
                        <li>
                          <a href="#" target="_blank">
                            <i className="flaticon-facebook-letter-logo"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="flaticon-twitter-black-shape"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="flaticon-instagram-logo"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="flaticon-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h3>Services</h3>

                      <ul className="footer-services-list">
                        <li>
                          <a href="#">Product Engineering</a>
                        </li>
                        <li>
                          <a href="#">UX/UI Design</a>
                        </li>
                        <li>
                          <a href="#">Big Data Analysis</a>
                        </li>
                        <li>
                          <a href="#">Desktop Applications</a>
                        </li>
                        <li>
                          <a href="#">Mobile Applications</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h3>Quick Links</h3>

                      <ul className="quick-links-list">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                        <li>
                          <a href="#">Applications</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h3>Contacts</h3>

                      <ul className="footer-contact-list">
                        <li>
                          <span>Address:</span> 2750 Quadra Street Victoria,
                          Canada
                        </li>
                        <li>
                          <span>Email:</span>{" "}
                          <a href="#">sales@cache-tech.com</a>
                        </li>
                        <li>
                          <span>Phone:</span> <a href="#">+ 1 609 874 9014 </a>
                        </li>
                        <li>
                          <span>Phone:</span> <a href="#">+ 91 8026 542 363</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="copyright-area">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <p>
                        Copyright @{currentYear} Cache Technologies. All Rights
                        Reserved.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <ul>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="circle-map">
                <img src="/images/circle-map.png" alt="image" />
              </div>
            </footer>

            <Loader />
          </>
        );
    }
}

export default Footer;
