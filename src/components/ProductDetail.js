import React from "react";
import image from "/workspace/hannah-collections/src/images/Hannah 5.avif"

export default function ProductDetail() {
    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-md-4 mt-3 p-3">
               <img className="img-fluid" src={image} />
            </div>
          <div className="col-md-6 p-4 mt-4">
            <h5 className="h5">
                Hannah collection
            </h5> 
            <h1 className="">Leather Sneakers</h1>
            <p className="">Quality Sneakers made in 72nd Liberia,it protects your ankle from injuries. </p>
            <h3 className="h2">$71.25 <span className="h5">5%</span></h3>
            <h3 className="h4">$75.00</h3>

         
          <div className="row">
            <div className="col-lg-6">
            <button className="p-1">-</button>
            <input className="text-center p-1" type="text" value="0" />
            <button className="p-1">+</button>
            </div>
            <div className="col-lg-6">
                <button className="w-100 button_cart btn">Add to Cart</button>
                </div>
          </div>
          </div>
        </div>
    </div>
    </>
    )
}