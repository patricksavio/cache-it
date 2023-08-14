import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {
    _isMounted = false;

    state = {
        searchForm: false,
        collapsed: true,
    };

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { pathname } = this.props.router;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let layOutCls = 'evolta-nav navbar-style-two';
        let layOutContainer = 'container';
        if (pathname == '/'){
            layOutCls = 'evolta-nav';
            layOutContainer = 'container-fluid';
        }

        return (
            <div id="navbar" className="navbar-area">
                <div className={layOutCls}>
                    <div className={layOutContainer}>
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/black-logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Pages <i className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/about">
                                                    <a className="nav-link">About Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/team">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <a href="#" className="nav-link">Services</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/services">
                                                            <a className="nav-link">Services</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/single-services">
                                                            <a className="nav-link">Services Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <a href="#" className="nav-link">Shop</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/shop">
                                                            <a className="nav-link">Shop</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/single-product">
                                                            <a className="nav-link">Single Products</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/cart">
                                                            <a className="nav-link">Cart</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/checkout">
                                                            <a className="nav-link">Checkout</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <a href="#" className="nav-link">Blog</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/blog">
                                                            <a className="nav-link">Blog</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/blog-details">
                                                            <a className="nav-link">Blog Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/404">
                                                    <a className="nav-link">404 Error</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/coming-soon">
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/faq">
                                                    <a className="nav-link">FAQ</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Projects <i className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/projects">
                                                    <a className="nav-link">Projects</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/project-details">
                                                    <a className="nav-link">Projects Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Shop <i className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/shop">
                                                    <a className="nav-link">Shop</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/product-details">
                                                    <a className="nav-link">Single Products</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/cart">
                                                    <a className="nav-link">Cart</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/checkout">
                                                    <a className="nav-link">Checkout</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Blog <i className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog">
                                                    <a className="nav-link">Blog</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-options">
                                    <Link activeClassName="active" href="/cart">
                                        <a className="cart-btn">
                                            <i className="flaticon-shopping-basket"></i>
                                        </a>
                                    </Link>

                                    <div className="option-item">
                                        
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn fas fa-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />

                                                    <button className="search-button" type="submit"><i className="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <Link activeClassName="active" href="/contact">
                                        <a className="btn btn-primary">Free Quote</a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
