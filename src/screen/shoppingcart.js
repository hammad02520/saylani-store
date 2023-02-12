import React from "react";
import { MdDelete } from "react-icons/md";
import Meet2 from '../assets/meet.png'
import FooterTap from "./footertab";
const ShoppingCart = () =>{
    return(
        <div className="shopping-cart-container">
            <div className="shoping-cart-child">
                <div className="shoping-cart-header">
                    <div>
                        <h3>Shopping</h3>
                        <h4>Cart</h4>
                    </div>
                    <div><MdDelete className="delete-icon" /></div>
                </div>
                <div className="product-count">
                    <img src={Meet2} />
                    <h5>ITEM NAME</h5>
                    <div className="count-product"><button>-</button><h4>4</h4><button>+</button></div>
                    <div className="total-amount"><h2>$25.00</h2></div>
                </div>
                <div className="total-amount"><h2>Total</h2><h3>$185.00</h3></div>
                <div>
                <div >
                <input className="signup-input shopingInput" placeholder="Full Name" />
                </div>
                <div>
                <input className="signup-input shopingInput" placeholder="Email" />
                </div>
                <div>
                <input className="signup-input shopingInput" placeholder="Phone Number" />
                </div>
                <div>
                <input className="signup-input shopingInput" placeholder="Shipping Adress" />
                </div>
                </div>
                <div className='started-button-div st-div placeorder' ><button className='started-button placeorder-btn'>Place Order</button> </div>
            </div>
            <FooterTap />
        </div>
    )
}
export default ShoppingCart;