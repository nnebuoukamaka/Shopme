import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeFromFavorites, clearFavorites } from "../reduxStore/favoritesSlice";
import { addToCart } from "../reduxStore/cartSlice";
import arrownextIcon from "../assets/mobileviewImages/arrownextIcon.svg";
import backtickIcon from "../assets/mobileviewImages/backtick.svg";
import { dollar } from "../utilities/currency";

function FavoritesList() {
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems)
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
        {favoriteItems.length === 0 ? (
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
                {favoriteItems?.map((favoriteItem) => {
                  return (
                    <div key={favoriteItem.id} className="product">
                      <Link to={`/productdetails/${favoriteItem.id}`}>
                        <img
                          src={favoriteItem.thumbnail}
                          alt={favoriteItem.title}
                          style={{ width: "100%" }}
                          className="product-img"
                        />
                        <h5>{favoriteItem.title}</h5>
                        <h6>{favoriteItem.category}</h6>
                        <span>
                          <span className="product-price">
                            {dollar.format(favoriteItem.price)}
                          </span>
                        </span>
                      </Link>
                      <button
                        onClick={() => {dispatch(addToCart(favoriteItem)),
                            dispatch(removeFromFavorites(favoriteItem))
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
              onClick={() => dispatch(clearFavorites())}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesList;
