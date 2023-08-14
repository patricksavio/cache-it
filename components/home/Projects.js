import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    margin: 30,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        },
        1400: {
            items: 4,
        }
    }
}

class Projects extends Component {

    state = {
        display: false
    };

    componentDidMount(){ 
        this.setState({ display: true });
    }

    render() {
        return (
            <section className="projects-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Recent projects</span>
                            <h2>Proud Projects That Make Us Stand Out</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>

                        <div className="image">
                            <img src="/images/section-title/3.png" alt="image" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {this.state.display ? <OwlCarousel 
                        className="projects-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <Link href="/project-details">
                                    <a>
                                        <img src="/images/projects/1.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="projects-content">
                                    <span>Design/Idea</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Flutter Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>

                                    <Link href="/project-details">
                                        <a className="read-more-btn">
                                            Read More <i className="flaticon-add-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <Link href="/project-details">
                                    <a>
                                        <img src="/images/projects/2.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="projects-content">
                                    <span>Design/Development</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Application Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                                    
                                    <Link href="/project-details">
                                        <a className="read-more-btn">
                                            Read More <i className="flaticon-add-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <Link href="/project-details">
                                    <a>
                                        <img src="/images/projects/3.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="projects-content">
                                    <span>Design</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                                    
                                    <Link href="/project-details">
                                        <a className="read-more-btn">
                                            Read More <i className="flaticon-add-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <Link href="/project-details">
                                    <a>
                                        <img src="/images/projects/4.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="projects-content">
                                    <span>Idea</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Big Data Analysis</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                                    
                                    <Link href="/project-details">
                                        <a className="read-more-btn">
                                            Read More <i className="flaticon-add-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <Link href="/project-details">
                                    <a>
                                        <img src="/images/projects/5.jpg" alt="image" />
                                    </a>
                                </Link>

                                <div className="projects-content">
                                    <span>Guard</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Cyber Security</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                                    
                                    <Link href="/project-details">
                                        <a className="read-more-btn">
                                            Read More <i className="flaticon-add-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>

                <div className="shape13"><img src="/images/shape/13.svg" alt="image" /></div>
                <div className="shape15"><img src="/images/shape/13.svg" alt="image" /></div>
            </section>
        );
    }
}

export default Projects;
