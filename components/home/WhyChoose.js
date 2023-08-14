import React, { Component } from 'react';
import Link from 'next/link';

class WhyChoose extends Component {
    render() {
        return (
            <section className="why-choose-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Why choose us</span>
                            <h2>We Different From Others Should Choose Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>

                        <div className="image">
                            <img src="/images/section-title/2.png" alt="image" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-choose-box">
                                <img src="/images/why-choose-us/1.jpg" alt="image" />

                                <div className="title">
                                    <h3>Industry Expertise</h3>
                                </div>

                                <div className="content">
                                    <div className="inner-content">
                                        <h3>
                                            <Link href="/single-services">
                                                <a>Industry Expertise</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.  Quis ipsum suspendisse ultrices gravida.</p>

                                        <Link href="/single-services">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-add-1"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-choose-box">
                                <img src="/images/why-choose-us/2.jpg" alt="image" />

                                <div className="title">
                                    <h3>Expertise & Leadership</h3>
                                </div>

                                <div className="content">
                                    <div className="inner-content">
                                        <h3>
                                            <Link href="/single-services">
                                                <a>Expertise & Leadership</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.  Quis ipsum suspendisse ultrices gravida.</p>
                                        
                                        <Link href="/single-services">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-add-1"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-choose-box">
                                <img src="/images/why-choose-us/3.jpg" alt="image" />

                                <div className="title">
                                    <h3>Dedicated IT Solution</h3>
                                </div>

                                <div className="content">
                                    <div className="inner-content">
                                        <h3>
                                            <Link href="/single-services">
                                                <a>Dedicated IT Solution</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.  Quis ipsum suspendisse ultrices gravida.</p>
                                        
                                        <Link href="/single-services">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-add-1"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape14">
                    <img src="/images/shape/13.svg" alt="image" />
                </div>
                <div className="shape15">
                    <img src="/images/shape/13.svg" alt="image" />
                </div>
            </section>
        );
    }
}

export default WhyChoose;
