import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="services-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Our Services</span>
                            <h2>We Offer Professional IT Solutions For Business</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>

                        <div className="image">
                            <img src="/images/section-title/1.png" alt="image" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-plugin"></i>
                                </div>

                                <h3>
                                    <Link href="/single-services">
                                        <a>Product Engineering</a>
                                    </Link>
                                </h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>

                                <Link href="/single-services">
                                    <a className="read-more-btn">
                                        Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-computer-graphic"></i>
                                </div>

                                <h3>
                                    <Link href="/single-services">
                                        <a>UX/UI Design</a>
                                    </Link>
                                </h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                
                                <Link href="/single-services">
                                    <a className="read-more-btn">
                                        Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-analysis"></i>
                                </div>

                                <h3>
                                    <Link href="/single-services">
                                        <a>Big Data Analysis</a>
                                    </Link>
                                </h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                
                                <Link href="/single-services">
                                    <a className="read-more-btn">
                                        Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-code"></i>
                                </div>

                                <h3>
                                    <Link href="/single-services">
                                        <a>Desktop Applications</a>
                                    </Link>
                                </h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                
                                <Link href="/single-services">
                                    <a className="read-more-btn">
                                        Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-application"></i>
                                </div>

                                <h3>
                                    <Link href="/single-services">
                                        <a>Mobile Applications</a>
                                    </Link>
                                </h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                
                                <Link href="/single-services">
                                    <a className="read-more-btn">
                                        Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-cyber-security"></i>
                                </div>

                                <h3>
                                    <Link href="/single-services">
                                        <a>Cyber Security</a>
                                    </Link>
                                </h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                
                                <Link href="/single-services">
                                    <a className="read-more-btn">
                                        Read More <i className="flaticon-add-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape13">
                    <img src="/images/shape/13.svg" alt="image" />
                </div>
                <div className="shape14">
                    <img src="/images/shape/13.svg" alt="image" />
                </div>
            </section>
        );
    }
}

export default Services;
