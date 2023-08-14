import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        return (
            <section className="services-area ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-plugin"></i>
                                </div>

                                <h3><a href="#">Product Engineering</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-computer-graphic"></i>
                                </div>

                                <h3><a href="#">UX/UI Design</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-analysis"></i>
                                </div>

                                <h3><a href="#">Big Data Analysis</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-code"></i>
                                </div>

                                <h3><a href="#">Desktop Applications</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-application"></i>
                                </div>

                                <h3><a href="#">Mobile Applications</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-cyber-security"></i>
                                </div>

                                <h3><a href="#">Cyber Security</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <a href="#" className="prev page-numbers"><i className="fas fa-angle-double-left"></i></a>
                                <a href="#" className="page-numbers">1</a>
                                <span className="page-numbers current" aria-current="page">2</span>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers"><i className="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape13"><img src="/images/shape/13.svg" alt="image" /></div>
                <div className="shape14"><img src="/images/shape/13.svg" alt="image" /></div>
            </section>
        );
    }
}

export default MainContent;
