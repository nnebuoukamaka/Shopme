import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  removeFromLikedList,
  clearLikedList,
} from "../reduxStore/likedProductsSlice";
import { addToCart } from "../reduxStore/cartSlice";
import arrownextIcon from "../assets/mobileviewImages/arrownextIcon.svg";
import backtickIcon from "../assets/mobileviewImages/backtick.svg";
import { dollar } from "../utilities/currency";

function LikedProducts() {
  const likedItems = useSelector((state) => state.likedProducts.likedItems);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="product-details-nav">
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
        <img src={arrownextIcon} alt="Next" />
        <h6 className="shop">Liked</h6>
      </div>
      <div>
        {likedItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your Favourites List is currently empty!</p>
            <div className="start-shopping">
              <Link to="/">
                <img src={backtickIcon} alt="Back" />
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <section className="favourites-section">
              <h2 className="shopping-cart-title">Favourites List</h2>
              <div className="liked-items">
                {likedItems?.map((likedItem) => {
                  return (
                    <div key={likedItem.id} className="product">
                      <Link to={`/productdetails/${likedItem.id}`}>
                        <img
                          src={likedItem.thumbnail}
                          alt={likedItem.title}
                          style={{ width: "100%" }}
                          className="product-img"
                        />
                        <h5>{likedItem.title}</h5>
                        <h6>{likedItem.category}</h6>
                        <span>
                          <span className="product-price">
                            {dollar.format(likedItem.price)}
                          </span>
                        </span>
                      </Link>
                      <button
                        onClick={() => {dispatch(addToCart(likedItem)),
                            dispatch(removeFromLikedList(likedItem))
                        }}
                        className="add-to-cart-btn"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
            <button
              style={{ cursor: "pointer" }}
              className="clear-cart"
              onClick={() => dispatch(clearLikedList())}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LikedProducts;
