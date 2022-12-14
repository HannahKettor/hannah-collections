import React from "react";

export default  function Cart () {
    return (
        <> 
        <h2 className="">Cart</h2>
        <div className="container">
       <div className="row">
         <div className="col-md-7">
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
                <td><img src=""/></td>
                <td>5</td>
                <td>$71.25</td>
                <td>$712.50</td>
                <td>Delete</td>
                </tr>
              </th>
            </table>
          </div>
          <div className="col-md-5">
            <h3 className="h3">Order Summary</h3>
            <span className="h5">Sub Total</span>&nbsp;&nbsp;<span>$712.50</span><br />
            <span className="h5">Shipping</span>&nbsp;&nbsp;<span>$10.00</span><hr />
            <span className="h5">Grand Total</span>&nbsp;&nbsp;<span>$714.50</span><br />
            <button className="button mt-4">Checkout</button>
          </div>
        </div>
    </div>
        </>
    )
}
    
