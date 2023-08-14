import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import FooterTwo from '../components/_App/FooterTwo';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import ContactForm from '../components/Faq/ContactForm';

class Faq extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>Frequently Asked Questions</h2>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>FAQ</li>
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

                <section className="faq-area ptb-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="faq-content">
                                    <div className="section-title">
                                        <div className="content">
                                            <span>Ask Question</span>
                                            <h2>Frequently Asked Questions</h2>
                                            <p>Veniam quis nostrud exercitation ullamco laboris nist aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip.</p>
                                        </div>
                                    </div>
                                    <div className="faq-image">
                                        <img src="/images/faq.png" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Which material types can you work with?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Is Smart Lock required for instant apps?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Can I have multiple activities in a single feature?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Which material types can you work with?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Why Choose Our Services In Your Business?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                How To Get Start With Us?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        <div className="faq-contact">
                            <div className="section-title">
                                <div className="content">
                                    <span>Message Us</span>
                                    <h2>Do You Have Any Questions</h2>
                                </div>
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </section>
                
                <FooterTwo />
            </>
        );
    }
}

export default Faq;
