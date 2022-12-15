import React, { useState } from "react";
import image from "/workspace/hannah-collections/src/images/Hannah 5.avif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navigation from "./Navigation";
import App from "../App";


export default function ProductDetail() {
    const [quantity, setQuantity] = useState(0);

    function increaseQuantity() {
      setQuantity(quantity + 1)
    }

    function decreaseQuantity() {
      if (quantity == 0) {
         pass
      } else 
      {setQuantity(quantity - 1)}
    }

    const actual_price = 50.00;
    const discount = 0.05;
    const discounted_price = actual_price - (discount * actual_price);

    return (
    <>
    <Navigation />
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-md-4 mt-3 p-3">
               <img className="prod_img" src={image} />
            </div>
          <div className="col-md-6 p-4 mt-4">
            <h5 className="h5">
                Hannah collection
            </h5> 
            <h1 className="">Leather Sneakers</h1>
            <p className="">Quality Sneakers made in 72nd Liberia,it protects your ankle from injuries. </p>
            <h3 className="h2">${discounted_price}0&nbsp;&nbsp;
            <span className="h5">{discount * 100}%</span></h3>
            <h5 className="h5 text-secondary"><del>${actual_price}.00</del></h5>

         
          <div className="row">
            <div className="col-lg-6">
            <button className="p-1" onClick={decreaseQuantity}>-</button>
            <input className="text-center p-1" type="number" value= {quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
            <button className="p-1" onClick={increaseQuantity}>+</button>
            </div>
            <div className="col-lg-6">
                <button className="w-100 button_cart btn">
                  <FontAwesomeIcon icon={faShoppingCart} />&nbsp;
                  Add to Cart</button>
                </div>
          </div>
          </div>
        </div>
    </div>
    </>
    )
}