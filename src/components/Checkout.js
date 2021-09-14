import React from 'react'
import {useStateValue} from "./StateProvider";
import "./Checkout.css"
import Checkoutproduct  from "./Checkoutprouct";

function Checkout() {
  const [{basket}] = useStateValue();


    return (
        <div className="checkout">

        {basket?.length === 0 ? (
            <div>
                <h2>Your basket is empty</h2>
            </div>
        ) : (
            <div>
                <h2>Your Shopping List</h2>
            </div>
        )}
            
        </div>
    )
}

export default Checkout;
