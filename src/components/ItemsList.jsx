import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart} from '../reduxStore/cartSlice'
import { Link } from 'react-router-dom'
import { dollar } from "../utilities/currency"
import '../styles/Home.css'

function ItemsList() {
  const dispatch = useDispatch();
  const newItems = useSelector((state) => state.items.data);
  const items = newItems.map(newItem => ({
    ...newItem, love:false
  }));
  
  return (
    <div className='home-section-2-products'>
        {items && (
            items.map((item) => {
              return (
                <div key={item.id} className="product"
                
                >
                  <Link to={`/productdetails/${item.id}`} >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{ width: "100%" }}
                      className="product-img"
                    />
                    <h5>{item.title}</h5>
                    <h6>{item.category}</h6>
                    <span>
                      <span className="product-price">
                        {dollar.format(item.price)}
                      </span>
                    </span>
                  </Link>
                  <button onClick = {() => dispatch(addToCart(item))} 
                  className="add-to-cart-btn">ADD TO CART</button>
                </div>
              );
            })
          )}
    </div>
   )
}

export default ItemsList