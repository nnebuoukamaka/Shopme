import React, {useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dollar } from "../utilities/currency";
import arrownextIcon from "../assets/mobileviewImages/arrownextIcon.svg";
import backtickIcon from "../assets/mobileviewImages/backtick.svg";
import deleteIcon from "../assets/cartImages/deleteIcon.svg";
import additionIcon from "../assets/cartImages/additionIcon.svg";
import subtractionIcon from "../assets/cartImages/subtractionIcon.svg";
import fullstarIcon from "../assets/homepageImages/fullstarIcon.svg";
import paystack from "../assets/cartImages/Paystack - png.png";
import mastercard from "../assets/cartImages/Mastercard - png.png";
import visa from "../assets/cartImages/Visa Inc. - png.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/Cart.css";
import {
  addToCart,
  removeFromCart,
  decreaseCartProductQuantity,
  clearCart,
  getTotal
} from "../reduxStore/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getTotal());
  }, [cart, dispatch])
  
  
  const total = (a, b) => {
    return a * b;
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    toast.success("Checkout Successful!");
    navigate("/");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const addQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const subtractQuantity = (cartItem) => {
    dispatch(decreaseCartProductQuantity(cartItem));
  };

  const removeProduct = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  
  return (
    <div className="products-cart">
      <div className="cart-nav">
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
        <img src={arrownextIcon} alt="Next" />
        <NavLink to="/" className="home-link">
          Shop
        </NavLink>
        <img src={arrownextIcon} alt="Next" />
        <h6 className="shop">Shopping Cart</h6>
      </div>
      <div>
        {cart.cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is currently empty!</p>
            <div className="start-shopping">
              <Link to="/">
                <img src={backtickIcon} alt="Back" />
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <section className="shopping-cart">
              <h2 className="shopping-cart-title">Shopping Cart</h2>
              <div className="shopping-cart-items">
                <div className="titles">
                  <h3 className="item-details">Item Details</h3>
                  <h3 className="product-qauntity">Quantity</h3>
                  <h3 className="price-heading">Price</h3>
                  <h3 className="total-price">Total</h3>
                </div>
                <div className="cart-items">
                  {cartItems?.map((cartItem) => (
                    <div key={cartItem.id} className="cart-item">
                      <div className="cart-product">
                        <img src={cartItem.thumbnail} alt={cartItem.title} />
                        <div className="title-stock-review">
                          <span className="cart-product-title">
                            {cartItem.title}
                          </span>
                          <span className="cart-product-stock">
                            {cartItem.availabilityStatus}
                          </span>
                          <span className="cart-product-stars">
                            <img src={fullstarIcon} />
                            <img src={fullstarIcon} />
                            <img src={fullstarIcon} />
                            <img src={fullstarIcon} />
                            <img src={fullstarIcon} />
                          </span>
                          <span className="cart-product-reviews">
                            {cartItem.reviews.length} Reviews
                          </span>
                        </div>
                      </div>
                      <div className="add-subtract-cart-quantity">
                        <span>
                          <img
                            style={{ cursor: "pointer" }}
                            src={subtractionIcon}
                            onClick={() => subtractQuantity(cartItem)}
                          />
                        </span>
                        <span className="cart-product-quantity">
                          {cartItem.cartQuantity}
                        </span>
                        <span>
                          <img
                            style={{ cursor: "pointer" }}
                            src={additionIcon}
                            onClick={() => addQuantity(cartItem)}
                          />
                        </span>
                      </div>
                      <div className="cart-product-price">
                        <span>{dollar.format(cartItem.price)}</span>
                      </div>
                      <div className="total-cart-product-price">
                        <div>
                          {dollar.format(
                            total(cartItem.price, cartItem.cartQuantity)
                          )}
                        </div>
                        <span>
                          {dollar.format(cartItem.price)} x{" "}
                          {cartItem.cartQuantity} items
                        </span>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => removeProduct(cartItem)}
                      >
                        <img src={deleteIcon} />
                        <span>Remove</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button style={{ cursor: "pointer" }} className="clear-cart" onClick={() => handleClearCart()}>
                  Clear Cart
                </button>
              </div>
            </section>
            <section className="order-payment-summary">
              <div>
                <span>Order Summary</span>
                <span>{} items</span>
              </div>
              <div>
                <span>Delivery Charges</span>
                <span>
                  Add your delivery address to checkout to see delivery charges.
                </span>
              </div>
              <div>
                <span>Subtotal</span>
                <span>{dollar.format(cart.cartTotalAmount)}</span>
              </div>
              <div>
                <span>Total</span>
                <span>{dollar.format(cart.cartTotalAmount)}</span>
              </div>
              <div>
                <span>Exluding Delivery Charges</span>
                <button onClick={() =>handleCheckout()}>Proceed to Checkout</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <img src={backtickIcon} alt="Back" />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
              <div>
                <img src={paystack} alt="Paystack" />
                <img src={mastercard} alt="Mastercard" />
                <img src={visa} alt="Visa" />
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
