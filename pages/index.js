import React, { Component } from 'react';
import Navbar from '../components/_App/Navbar';
import Banner from '../components/home/Banner';
import Services from '../components/home/Services';
import About from '../components/home/About';
import WhyChoose from '../components/home/WhyChoose';
import Funfacts from '../components/home/Funfacts';
import Cta from '../components/home/Cta';
import Projects from '../components/home/Projects';
import Partner from '../components/home/Partner';
import Team from '../components/home/Team';
import Testimonials from '../components/home/Testimonials';
import Blog from '../components/home/Blog';
import Footer from '../components/_App/Footer';

export class index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <Services />

                <About />

                <WhyChoose />

                <Funfacts />

                <Cta />

                <Projects />

                <Partner />

                <Team />

                <Testimonials />

                <Blog />
                
                <Footer />
            </>
        );
    }
}

export default index;
