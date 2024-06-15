import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import arrownextIcon from "../assets/mobileviewImages/arrownextIcon.svg";
import fullstar from "../assets/homepageImages/fullstarIcon.svg";
import emptystar from "../assets/homepageImages/emptystarIcon.svg";
import blueEllipse from "../assets/productdetailsImages/blueEllipse.svg";
import blackEllipse from "../assets/productdetailsImages/blackEllipse.svg";
import orangeEllipse from "../assets/productdetailsImages/orangeEllipse.svg";
import greenEllipse from "../assets/productdetailsImages/greenEllipse.svg";
import likeIcon from "../assets/productdetailsImages/likeIcon.svg";
import loveIcon from "../assets/productdetailsImages/loveIcon.svg";
import cartIcon from "../assets/productdetailsImages/cartIcon.svg";
import seenIcon from "../assets/productdetailsImages/seenicon.svg";
import vector1 from "../assets/productdetailsImages/Vector1.png";
import vector2 from "../assets/productdetailsImages/Vector2.png";
import vector3 from "../assets/productdetailsImages/Vector3.png";
import vector4 from "../assets/productdetailsImages/Vector4.png";
import vector5 from "../assets/productdetailsImages/Vector5.png";
import vector6 from "../assets/productdetailsImages/Vector6.png";
import { useGetSingleProductQuery } from "../api/endpoints";
import { dollar } from "../utilities/currency";
import SlideShow from "./SlideShow";
import Footer from "./Footer";
import ItemsList from "./ItemsList";
import "../styles/ProductDetails.css";
import {
  addToFavorites,
  removeFromFavorites,
} from "../reduxStore/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
  const [item, setItem] = useState({ images: [], reviews: [] });
  const [photos, setPhotos] = useState([]);
  const [option, setOption] = useState("description");
  const { id } = useParams();

  const { data: product, error, isLoading } = useGetSingleProductQuery(id);
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const dispatch = useDispatch();
  const likedItem = item.love;

  useEffect(() => {
    try {
      if (product) {
        const itemIndex = favoriteItems.findIndex(
          (favoriteItem) => favoriteItem.id === product.id
        );
        if (itemIndex >= 0) {
          setItem({ ...product, love: true });
          setPhotos(product.images);
        } else {
          // setItem({...product, love: false});
          setItem(product);
          setPhotos(product.images);
        }
        // const modifiedProduct = { ...product, love: false };
        // setItem(modifiedProduct);
        // setPhotos(modifiedProduct.images);
        // setItem(product);
        // setPhotos(product.images)
      }
    } catch (error) {
      console.log(error);
    }
  }, [product]);

  const backgroundColor = {
    background: "rgba(255, 255, 255, 1)",
  };

  const handleOption = (optionName) => {
    setOption(optionName);
  };

  const handleAddTofavorites = (item) => {
    setItem({ ...item, love: true });
    dispatch(addToFavorites(item));
  };

  const handleRemoveFromFavorites = (item) => {
    setItem({ ...item, love: false });
    dispatch(removeFromFavorites(item));
  };

  return (
    <div className="product-component">
      <div className="product-details-nav">
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
        <img src={arrownextIcon} alt="Next" />
        <h6 className="shop">Shop</h6>
      </div>
      <div className="product-details-section-1">
        {error ? (
          <>An error occurred loading this product</>
        ) : isLoading ? (
          <>Loading...</>
        ) : item ? (
          <div className="product-details">
            <div className="product-details-left">
              <SlideShow images={photos} />
            </div>
            <div className="product-details-right">
              <div>{item.title}</div>
              <span>
                <img src={fullstar} />
                <img src={fullstar} />
                <img src={fullstar} />
                <img src={fullstar} />
                <img src={emptystar} />
                <span>{item.reviews.length} reviews</span>
              </span>
              {dollar.format(item.price)}
              <span>Availability: {item.availabilityStatus}</span>

              <hr
                style={{
                  width: "445px",
                  border: "1px solid rgba(189, 189, 189, 1)",
                }}
              />
              <div>
                <img src={blueEllipse} />
                <img src={greenEllipse} />
                <img src={orangeEllipse} />
                <img src={blackEllipse} />
              </div>
              {likedItem === true ? (
                <div className="like-cart-seen">
                  <img
                    src={loveIcon}
                    alt="Like"
                    onClick={() => handleRemoveFromFavorites(item)}
                  />

                  <img src={cartIcon} alt="Cart" />
                  <img src={seenIcon} alt="Seen" />
                </div>
              ) : (
                <div className="like-cart-seen">
                  <img
                    style={{ cursor: "pointer" }}
                    src={likeIcon}
                    alt="Like"
                    onClick={() => handleAddTofavorites(item)}
                  />
                  <img src={cartIcon} alt="Cart" />
                  <img src={seenIcon} alt="Seen" />
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <section className="product-details-section-2">
        <div className="product-details-nav">
          <h6 className="shop" onClick={() => handleOption("description")}>
            Description
          </h6>
          <h6 className="shop" onClick={() => handleOption("information")}>
            Additional Information
          </h6>
          <h6 className="shop" onClick={() => handleOption("reviews")}>
            Reviews ({item.reviews.length})
          </h6>
        </div>
        <div className="description-holder">
          {option === "description" && (
            <div className="description-left">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          )}
          {option === "information" && (
            <div className="description-left">
              <p>Met minim.</p>
            </div>
          )}
          {option === "reviews" && (
            <div className="description-left">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
              </p>
              {/* <span>{
              item.reviews.map((review, index) => {
                return (
                  <span key={index}>{review.rating}</span>
                )
              })}
              
              </span> */}
            </div>
          )}
          <div className="description-right">
            <img src={item.thumbnail} />
          </div>
        </div>
      </section>
      <section className="product=details-section-3">
        <h3>BEST SELLER PRODUCTS</h3>
        <div>
          <ItemsList />
        </div>
      </section>
      <section className="product-details-section-4">
        <img src={vector1} alt="HOOLI" />
        <img src={vector2} alt="HOOLI" />
        <img src={vector3} alt="HOOLI" />
        <img src={vector4} alt="HOOLI" />
        <img src={vector5} alt="HOOLI" />
        <img src={vector6} alt="HOOLI" />
      </section>
      <Footer style={backgroundColor} />
    </div>
  );
}

export default ProductDetails;
