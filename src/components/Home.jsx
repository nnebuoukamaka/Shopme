import React, { useEffect, useState } from "react";
import photo1 from "../assets/homepageImages/photo1.png";
import photo2 from "../assets/homepageImages/photo2.png";
import photo3 from "../assets/homepageImages/photo3.png";
import photo4 from "../assets/homepageImages/photo4.png";
import photo5 from "../assets/homepageImages/photo5.png";
import photo6 from "../assets/homepageImages/photo6.png";
import photo7 from "../assets/homepageImages/photo7.png";
import photo8 from "../assets/homepageImages/photo8.png";
import concreteIcon from "../assets/homepageImages/concreteIcon.svg";
import easywinsIcon from "../assets/homepageImages/easywinsIcon.svg";
import emptystarIcon from "../assets/homepageImages/emptystarIcon.svg";
import fullstarIcon from "../assets/homepageImages/fullstarIcon.svg";
import hackgrowthIcon from "../assets/homepageImages/hackgrowthIcon.svg";
import userprofile from "../assets/homepageImages/userprofile.png";
import userphotos from "../assets/homepageImages/userphotos.svg";
import clockIcon from "../assets/homepageImages/clockIcon.svg";
import commentIcon from "../assets/homepageImages/commentIcon.svg";
import arrownextIcon from "../assets/homepageImages/arrownextIcon.svg";
import "../styles/Home.css";
import "../utilities/currency";
import { dollar } from "../utilities/currency";
import { useGetProductsQuery } from "../api/product";
import { useDispatch, useSelector } from "react-redux";
import { loadLessProducts, loadMoreProducts } from "../reduxStore/count";

function Home() {
  const count = useSelector(state => state.counter);

  const { data, isLoading, error } = useGetProductsQuery(count);
  const [items, setItems] = useState([]); 

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (data) {
        setItems(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  return (
    <div className="home">
      <section className="home-section-1">
        <div className="photo">
          <img src={photo1} alt="Photo 1" className="responsive-img" />
          <h6 className="five-items">5 Items</h6>
          <h3 className="furniture">Furniture</h3>
          <h6 className="read-more">Read More</h6>
        </div>
        <div className="photo-2-3-4">
          <div className="photo">
            <img src={photo2} alt="Photo 2" />
            <h6 className="five-items">5 Items</h6>
            <h3 className="furniture">Furniture</h3>
            <h6 className="read-more">Read More</h6>
          </div>
          <div className="photo-3-4">
            <div className="photo">
              <img
                src={photo3}
                alt="Photo 3"
                style={{ marginRight: "15px", marginTop: "10px" }}
              />
              <h6 className="five-items">5 Items</h6>
              <h3 className="furniture">Furniture</h3>
              <h6 className="read-more">Read More</h6>
            </div>
            <div className="photo">
              <img
                src={photo4}
                alt="Photo 4"
                style={{ marginRight: "15px", marginTop: "10px" }}
              />
              <h6 className="five-items">5 Items</h6>
              <h3 className="furniture">Furniture</h3>
              <h6 className="read-more">Read More</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section-2">
        <div className="home-section-2-top">
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between</p>
        </div>
        <div className="home-section-2-products">
          {items ? (
            items.map((item) => {
              return (
                <div key={item.id} className="product">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "100%" }}
                  />
                  <h5>{item.title}</h5>
                  <h6>{item.category}</h6>
                  <span>
                    <span className="product-price">{dollar.format(item.price)}</span>
                  </span>
                </div>
              );
            })
          ) : error ? (
            <>An error occurred loading the products</>
          ) : isLoading ? (
            <>Loading...</>) : null }
        </div>
        <div className="load-btns">
          <button onClick={() => dispatch(loadLessProducts())} className="btn-2">LOAD LESS PRODUCTS</button>
          <button onClick={() => dispatch(loadMoreProducts())}>LOAD MORE PRODUCTS</button>
         </div>
      </section>
      {/* this is home section 3, but has similar properties with home section 2, hence the same className */}
      <section className="home-section-2">
        <div className="home-section-2-top">
          <h4>Featured Products</h4>
          <h3>THE BEST SERVICES</h3>
          <p>Problems trying to resolve the conflict between</p>
        </div>
        <div className="home-section-3-main">
          <div className="easy-wins">
            <img src={easywinsIcon} alt="Easy Wins" id="easy-wins-img" />
            <h3 id="easy-wins">Easy Wins</h3>
            <p>get your best looking smile now</p>
          </div>
          <div className="easy-wins">
            <img src={concreteIcon} alt="Concrete" />
            <h3>Concrete</h3>
            <p>
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="easy-wins">
            <img src={hackgrowthIcon} alt="Hack growth" />
            <h3>Hack Growth</h3>
            <p>Overcame any hurdle or any other problem.</p>
          </div>
        </div>
      </section>
      <section className="home-section-4">
        <h6>Practice Advice</h6>
        <h2>Featured Posts</h2>
        <div className="cards-holder">
          <div className="card">
            <img src={photo5} alt="Photo 5" />
            <span className="new">NEW</span>
            <div className="container">
              <div className="first-row">
                <span className="google">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="date-comment-div">
                <span className="date-comment">
                  <img src={clockIcon} alt="Time" />
                  <span>22 April 2021</span>
                </span>
                <span className="date-comment">
                  <img src={commentIcon} alt="Time" />
                  <span>10 comments</span>
                </span>
              </div>
              <span className="learn-more">
                <span>Learn More</span>{" "}
                <img src={arrownextIcon} alt="arrow icon" />
              </span>
            </div>
          </div>
          <div className="card">
            <img src={photo6} alt="Photo 6" />
            <span className="new">NEW</span>
            <div className="container">
              <div className="first-row">
                <span className="google">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="date-comment-div">
                <span className="date-comment">
                  <img src={clockIcon} alt="Time" />
                  <span>22 April 2021</span>
                </span>
                <span className="date-comment">
                  <img src={commentIcon} alt="Time" />
                  <span>10 comments</span>
                </span>
              </div>
              <span className="learn-more">
                <span>Learn More</span>{" "}
                <img src={arrownextIcon} alt="arrow icon" />
              </span>
            </div>
          </div>
          <div className="card">
            <img src={photo7} alt="Photo 7" />
            <span className="new">NEW</span>
            <div className="container">
              <div className="first-row">
                <span className="google">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h4>Loudest à la Madison #1 (L'integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="date-comment-div">
                <span className="date-comment">
                  <img src={clockIcon} alt="Time" />
                  <span>22 April 2021</span>
                </span>
                <span className="date-comment">
                  <img src={commentIcon} alt="Time" />
                  <span>10 comments</span>
                </span>
              </div>
              <span className="learn-more">
                <span>Learn More</span>{" "}
                <img src={arrownextIcon} alt="arrow icon" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section-5">
        <div className="home-section-5-left">
          <h3>What they say about us</h3>
          <img className="user-image" src={userprofile} alt="user profile" />
          <span className="star-rating">
            <img src={fullstarIcon} alt="Rating" />
            <img src={fullstarIcon} alt="Rating" />
            <img src={fullstarIcon} alt="Rating" />
            <img src={fullstarIcon} alt="Rating" />
            <img src={emptystarIcon} alt="Rating" />
          </span>
          <h6>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </h6>
          <h6 id="user-name">Regina Miles</h6>
          <h6 className="user-job">Designer</h6>
        </div>
        <div className="home-section-5-right">
          <img src={userphotos} />
        </div>
      </section>
      <section className="home-section-6">
        <img style={{ width: "100%" }} src={photo8} alt="Photo 8" />
        <div className="home-section-6-writeup">
          <h6>Designing Better Experience</h6>
          <h2>Problems trying to resolve the conflict between </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
          <span className="price">{dollar.format(16.48)}</span>
          <button>ADD YOUR CALL TO ACTION</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
