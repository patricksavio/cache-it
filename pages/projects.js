import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import FooterTwo from '../components/_App/FooterTwo';

class Projects extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>Projects</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Projects</li>
                            </ul>
                        </div>
                    </div>

                    <div className="dot-shape1">
                        <img src="/images/shape/dot1.png" alt="image" />
                    </div>
                    <div className="dot-shape2">
                        <img src="/images/shape/dot2.png" alt="image" />
                    </div>
                    <div className="dot-shape3">
                        <img src="/images/shape/dot3.png" alt="image" />
                    </div>
                    <div className="dot-shape4">
                        <img src="/images/shape/dot4.png" alt="image" />
                    </div>
                    <div className="dot-shape5">
                        <img src="/images/shape/dot5.png" alt="image" />
                    </div>
                    <div className="dot-shape6">
                        <img src="/images/shape/dot6.png" alt="image" />
                    </div>
                    <div className="dot-shape7">
                        <img src="/images/shape/dot1.png" alt="image" />
                    </div>
                    <div className="shape16">
                        <img src="/images/shape/13.svg" alt="image" />
                    </div>
                    <div className="shape17">
                        <img src="/images/shape/14.svg" alt="image" />
                    </div>
                    <div className="shape18">
                        <img src="/images/shape/15.png" alt="image" />
                    </div>
                    <div className="shape19">
                        <img src="/images/shape/16.png" alt="image" />
                    </div>
                    <div className="shape20">
                        <img src="/images/shape/14.svg" alt="image" />
                    </div>
                </div>

                <section className="projects-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <Link href="/project-details">
                                        <a>
                                            <img src="/images/projects/1.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="projects-content">
                                        <span>Design/Idea</span>
                                        <h3><a href="#">Application Development</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <Link href="/project-details">
                                            <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <Link href="/project-details">
                                        <a>
                                            <img src="/images/projects/2.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="projects-content">
                                        <span>Design/Development</span>
                                        <h3><a href="#">Application Design</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <Link href="/project-details">
                                            <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <Link href="/project-details">
                                        <a>
                                            <img src="/images/projects/3.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="projects-content">
                                        <span>Design</span>
                                        <h3><a href="#">Web Application Development</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <Link href="/project-details">
                                            <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <Link href="/project-details">
                                        <a>
                                            <img src="/images/projects/4.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="projects-content">
                                        <span>Idea</span>
                                        <h3><a href="#">Big Data Analysis</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <Link href="/project-details">
                                            <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <Link href="/project-details">
                                        <a>
                                            <img src="/images/projects/5.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="projects-content">
                                        <span>Guard</span>
                                        <h3><a href="#">Cyber Security</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <Link href="/project-details">
                                            <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <Link href="/project-details">
                                        <a>
                                            <img src="/images/projects/6.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="projects-content">
                                        <span>Development</span>
                                        <h3><a href="#">Network Marketing</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <Link href="/project-details">
                                            <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
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

                        <div className="shape13">
                            <img src="../images/shape/13.svg" alt="image" />
                        </div>
                        <div className="shape15">
                            <img src="../images/shape/13.svg" alt="image" />
                        </div>
                    </div>
                </section>
                
                <FooterTwo />
            </>
        );
    }
}

export default Projects;
