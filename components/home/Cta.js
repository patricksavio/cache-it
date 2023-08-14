import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {
    render() {
        return (
            <section className="cta-area">
                <div className="container">
                    <div className="cta-content">
                        <span>We Take Care of Your Technology</span>
                        <h2>Focus on Your Business</h2>

                        <Link href="/contact">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
