import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../../store/actions/cartActions';

class ProductContent extends Component {

    handleAddToCart = (id) => {
        this.props.addToCart(id); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {

        let { products } = this.props;

        return (
            <section className="shop-area ptb-110">
                <ToastContainer />
                <div className="container">
                    <div className="woocommerce-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 col-sm-6">
                                <div className="woocommerce-result-count">
                                    <p>Showing 1-6 of 14 results</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <div className="woocommerce-topbar-ordering">
                                    <select>
                                        <option value="1">Default sorting</option>
                                        <option value="2">Sort by popularity</option>
                                        <option value="0">Sort by average rating</option>
                                        <option value="3">Sort by latest</option>
                                        <option value="4">Sort by price: low to high</option>
                                        <option value="5">Sort by price: high to low</option>
                                        <option value="6">Sort by new</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {products.map((data, idx) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={idx}>
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <Link href="/product-details">
                                            <a>
                                                <img src={data.image} alt="image" />
                                                <img src={data.imageHover} alt="image" />
                                            </a>
                                        </Link>

                                        <Link href="#">
                                            <a 
                                                className="add-to-cart-btn"
                                                onClick={(e) => {
                                                    e.preventDefault(); this.handleAddToCart(data.id)
                                                }}
                                            >
                                                Add To Cart <i className="flaticon-shopping-basket"></i>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/product-details">
                                                <a>{data.title}</a>
                                            </Link>
                                        </h3>
                                        <div className="price">
                                            <span className="new">${data.price}</span>
                                            <span className="old">${data.oldPrice}</span>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <a href="#" className="prev page-numbers"><i className="fas fa-angle-double-left"></i></a>
                                <a href="#" className="page-numbers current" aria-current="page">1</a>
                                <span className="page-numbers">2</span>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers"><i className="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContent)
