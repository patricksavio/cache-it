import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';

class MainContent extends Component {

    state = {
        qty: 1,
        max: 10,
        min: 1
    }

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(1, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

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

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <ToastContainer />
                <div className="product-details-desc">
                    <h3>White Book</h3>

                    <div className="price">
                        <span className="new-price">$8.00</span>
                        <span className="old-price">$12.00</span>
                    </div>

                    <div className="product-review">
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="#" className="rating-count">3 reviews</a>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                    <div className="product-add-to-cart">
                        <div className="input-counter">

                            <span 
                                className="minus-btn"
                                onClick={this.DecreaseItem}
                            >
                                <i className="fas fa-minus"></i>
                            </span>

                            <input 
                                type="text" 
                                value={this.state.qty}
                                min={this.state.min}
                                max={this.state.max} 
                                onChange={e => this.setState({ qty: e.target.value })}
                            />

                            <span 
                                className="plus-btn"
                                onClick={this.IncrementItem}
                            >
                                <i className="fas fa-plus"></i>
                            </span>

                        </div>

                        <button 
                            className="btn btn-primary"
                            onClick={this.handleAddToCartFromView}
                        >
                            <i className="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>

                    <div className="buy-checkbox-btn">
                        <div className="item">
                            <input className="inp-cbx" id="cbx" type="checkbox" />
                            <label className="cbx" htmlFor="cbx">
                                <span>
                                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                                <span>I agree with the terms and conditions</span>
                            </label>
                        </div>

                        <div className="item">
                            <a href="#" className="btn btn-light">Buy it now!</a>
                        </div>
                    </div>

                    <div className="custom-payment-options">
                        <span>Guaranteed safe checkout:</span>

                        <div className="payment-methods">
                            <a href="#"><img src="/images/payment/1.svg" alt="image" /></a>
                            <a href="#"><img src="/images/payment/2.svg" alt="image" /></a>
                            <a href="#"><img src="/images/payment/3.svg" alt="image" /></a>
                            <a href="#"><img src="/images/payment/4.svg" alt="image" /></a>
                            <a href="#"><img src="/images/payment/5.svg" alt="image" /></a>
                            <a href="#"><img src="/images/payment/6.svg" alt="image" /></a>
                            <a href="#"><img src="/images/payment/7.svg" alt="image" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))},
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MainContent)
