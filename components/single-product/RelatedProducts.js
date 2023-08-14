import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../../store/actions/cartActions';

class RelatedProducts extends Component {

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
            <div className="related-products">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Our Shop</span>
                            <h2>Related Products</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>

                    <div className="row">
                        {products.map((data, idx) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={idx}>
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <a href="#">
                                            <img src={data.image} alt="image" />
                                            <img src={data.imageHover} alt="image" />
                                        </a>

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
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.relatedProducts
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
)(RelatedProducts)
