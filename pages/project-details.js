import React, { Component } from 'react';
import Navbar from '../components/_App/Navbar';
import FooterTwo from '../components/_App/FooterTwo';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    margin: 30,
    navText: [
        "<i class='flaticon-arrow-pointing-to-left'></i>",
        "<i class='flaticon-arrow-pointing-to-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 2,
        },
    }
}

class ProjectDetails extends Component {

    state = {
        display: false
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <>
                <Navbar />
                
                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>Flutter Application Development</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Flutter Application Development</li>
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

                <section className="projects-details-area ptb-110">
                    <div className="container">
                        <div className="projects-details">
                            {this.state.display ? <OwlCarousel 
                                className="projects-image-slides owl-carousel owl-theme"
                                {...options}
                            >
                                <div className="single-image">
                                    <img src="/images/projects/1.jpg" alt="image" />
                                </div>

                                <div className="single-image">
                                    <img src="/images/projects/2.jpg" alt="image" />
                                </div>

                                <div className="single-image">
                                    <img src="/images/projects/3.jpg" alt="image" />
                                </div>
                            </OwlCarousel> : ''}

                            <div className="projects-details-desc">
                                <h3>Incredible Infrastructure</h3>

                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.</p>

                                <p>Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <div className="project-details-info">
                                    <div className="single-info-box">
                                        <h4>Client</h4>
                                        <span>James Anderson</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <span>Network, Marketing</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <span>February 28, 2020</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul className="social">
                                            <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                            <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                            <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                            <li><a href="#" target="_blank"><i className="flaticon-youtube"></i></a></li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <a href="#" className="btn btn-primary">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterTwo />
            </>
        );
    }
}

export default ProjectDetails;
