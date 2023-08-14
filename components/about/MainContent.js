import React, { Component } from 'react';

export class MainContent extends Component {
    render() {
        return (
          <section className="about-area ptb-110">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="about-image">
                    <img src="/images/about-img1.jpg" alt="image" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="about-content">
                    <span>About Us</span>
                    <h2>We've Been Thriving in 25+ Years The Tech Area</h2>
                    <p>
                      Cache is a global IT solutions company with over 25+ years
                      of experience in providing quality delivery through all
                      our Verticals for small, medium, and large businesses.{" "}
                    </p>
                    <p>
                      Our strength lies in the knowledge of industry verticals,
                      which help us deliver value to our customers through
                      quality solutions and services.
                    </p>
                    <p>
                      We have the resources and expertise to help you design,
                      develop, deploy, and maintain platforms, support from
                      procurement to maintenance, setting up offshore
                      development centres and managing IT budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-inner-area">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="about-text">
                      <h3>Our History</h3>
                      <p>
                        Lorem ipsum dolor sit amet, con se ctetur adipiscing
                        elit. In sagittis eg esta ante, sed viverra nunc tinci
                        dunt nec elei fend et tiram.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="about-text">
                      <h3>Our Mission</h3>
                      <p>
                        Lorem ipsum dolor sit amet, con se ctetur adipiscing
                        elit. In sagittis eg esta ante, sed viverra nunc tinci
                        dunt nec elei fend et tiram.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div className="about-text">
                      <h3>Who we are</h3>
                      <p>
                        Lorem ipsum dolor sit amet, con se ctetur adipiscing
                        elit. In sagittis eg esta ante, sed viverra nunc tinci
                        dunt nec elei fend et tiram.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default MainContent;
