import React, { Component } from 'react';
import Navbar from '../components/_App/Navbar';
import FooterTwo from '../components/_App/FooterTwo';
import MainContent from '../components/single-product/MainContent';
import DetailsTab from '../components/single-product/DetailsTab';
import RelatedProducts from '../components/single-product/RelatedProducts';

class SingleProduct extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>White Book</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>White Book</li>
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

                <section className="product-details-area ptb-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="product-details-image">
                                    <img src="/images/shop/1.jpg" alt="image" />
                                </div>
                            </div>

                            <MainContent />

                            <DetailsTab />
                        </div>
                    </div>

                    <RelatedProducts />
                </section>
                
                <FooterTwo />
            </>
        );
    }
}

export default SingleProduct;
