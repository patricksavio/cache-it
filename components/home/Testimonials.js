import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});


const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    items: 1,
    navText: [
        "<i class='flaticon-arrow-pointing-to-left'></i>",
        "<i class='flaticon-arrow-pointing-to-right'></i>"
    ]
}

class Testimonials extends Component {

    state = {
        isOpen: false,
        display: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    componentDidMount(){ 
        this.setState({ display: true });
    }

    render() {
        return (
            <>
                <section className="testimonials-area">
                    <div className="container-fluid p-0">
                        <div className="testimonials-inner-area jarallax" data-jarallax='{"speed": 0.3}'>
                            <div className="testimonials-inner-content">

                                {this.state.display ? <OwlCarousel 
                                    className="testimonials-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="single-testimonials-item">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>

                                        <div className="client-info">
                                            <img src="/images/author1.jpg" alt="image" />

                                            <h3>John Doe</h3>
                                            <span>Marketing</span>
                                        </div>
                                    </div>

                                    <div className="single-testimonials-item">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>

                                        <div className="client-info">
                                            <img src="/images/author2.jpg" alt="image" />

                                            <h3>Steven Smith</h3>
                                            <span>Marketing</span>
                                        </div>
                                    </div>

                                    <div className="single-testimonials-item">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>

                                        <div className="client-info">
                                            <img src="/images/author3.jpg" alt="image" />

                                            <h3>Sarah Taylor</h3>
                                            <span>Designer</span>
                                        </div>
                                    </div>
                                </OwlCarousel> : ''}


                                <div className="circle-map"><img src="/images/circle-map3.png" alt="image" /></div>
                            </div>

                            <Link href="#">
                                <a 
                                    className="video-btn popup-youtube"
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                >
                                    <i className="flaticon-play-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>

                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='bk7McNUjWgw' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default Testimonials;
