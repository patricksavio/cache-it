import React, { Component } from 'react';
import Loader from '../shared/Loader';
import Link from 'next/link';

export class FooterTwo extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="#">
                                            <a>
                                                <img src="/images/white-logo.png" alt="image" />
                                            </a>
                                        </Link>
                                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    </div>

                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Services</h3>

                                    <ul className="footer-services-list">
                                        <li><a href="#">Product Engineering</a></li>
                                        <li><a href="#">UX/UI Design</a></li>
                                        <li><a href="#">Big Data Analysis</a></li>
                                        <li><a href="#">Desktop Applications</a></li>
                                        <li><a href="#">Mobile Applications</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Quick Links</h3>

                                    <ul className="quick-links-list">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Applications</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contacts</h3>

                                    <ul className="footer-contact-list">
                                        <li><span>Address:</span> 2750 Quadra Street Victoria, Canada</li>
                                        <li><span>Email:</span> <a href="#">Opstar@gmail.com</a></li>
                                        <li><span>Phone:</span> <a href="#">+44 587 154756</a></li>
                                        <li><span>Fax:</span> <a href="#">+44 785 4578964</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <p>Copyright @{currentYear} Opstar. All Rights Reserved.</p>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="circle-map"><img src="/images/circle-map.png" alt="image" /></div>
                </footer>

                <Loader />
            </>
        );
    }
}

export default FooterTwo;
