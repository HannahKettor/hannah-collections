import React from "react";
import Navigation from "./Navigation";
import image from "/workspace/hannah-collections/src/images/Hannah 5.avif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function Cart () {
    return (
        <> 
        <Navigation />
        <h2 className="cart container p-2">Cart</h2>
        <div className="container">
       <div className="row">
         <div className="col-sm-7">
            <table className="table">
              <th>
                <tr>
                  <td>Product</td>
                <td>Image</td>
                <td>Quantity</td>
                <td>Unit Price</td>
                <td>Total</td>
                <td>Action</td>
                </tr>
                <tr>
                  <td>Leather Sneakers</td>
                <td><img className="pro_img" src={image} /></td>
                <td>1</td>
                <td>$47.50</td>
                <td>$47.50</td>
                <td className="text-center text-secondary"><FontAwesomeIcon icon={faTrashAlt} /></td>
                </tr>
              </th>
            </table>
          </div>
          <div className="col-sm-5">
            <h3 className="h3 cart">Order Summary</h3>
            <span className="h5">Sub Total</span>&nbsp;&nbsp;<span>$47.50</span><br />
            <span className="h5">Shipping</span>&nbsp;&nbsp;<span>$10.00</span><hr />
            <span className="h5">Grand Total</span>&nbsp;&nbsp;<span>$57.50</span><br />
            <button className="btn button_cart mt-4">Checkout</button>
          </div>
        </div>
    </div>
        </>
    )
}
    
