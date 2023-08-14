import React, { Component } from 'react';
import Navbar from '../components/_App/Navbar';
import FooterTwo from '../components/_App/FooterTwo';
import ContactForm from '../components/Contact/ContactForm';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>Contact</h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li>Contact</li>
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

                <section className="contact-area ptb-110">
                    <div className="container">
                        <div className="section-title">
                            <div className="content">
                                <span>Send Message</span>
                                <h2>Drop us message for any query</h2>
                                <p>If you have an idea, we would love to hear about it.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-info">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <span>Address</span>
                                            CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <span>Email</span>
                                            <a href="#">opstar@email.com</a>
                                            <a href="#">fax@email.com</a>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-volume"></i>
                                            </div>
                                            <span>Phone</span>
                                            <a href="#">+44 587 154756</a>
                                            <a href="#">+55 5555 14574</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map"><img src="../images/bg-map.png" alt="image" /></div>
                </section>
                
                <FooterTwo />
            </>
        );
    }
}

export default Contact;
