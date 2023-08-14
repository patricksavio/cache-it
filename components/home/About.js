import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
          <section className="about-area">
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
                      our Verticals for small, medium, and large businesses.
                    </p>

                    <Link href="/about">
                      <a className="btn btn-primary">View More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default About;
