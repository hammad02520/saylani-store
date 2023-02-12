import React from "react";
import Ellipse from '../assets/Ellipse.png'
import FooterTap from "./footertab";
const Setting = () =>{
    return(
        <div className="setting-main-container">
             <div className="setting-profile-main">
             <div className="setting-profile">
                <h2>Setting</h2>
                 <img src={Ellipse} />
                 <div >
                <input className="signup-input shopingInput changeusername" placeholder="Update Full Name" />
                </div>
            </div>
            <div className="order-status">
                <div><h2 className="blueh2">Orders</h2></div>
                <div className="user-order-check">
                    <h2>Inzmam Malik</h2>
                   <div> <h5>Just Now - Pending</h5> <h5>03213954490</h5></div>
                    <h4>2 x Item</h4>
                    <div><h2>Total</h2><h2 className="greenh2">$185.00</h2></div>
                </div>
            </div>
            <div className='started-button-div st-div logout' ><button className='started-button placeorder-btn '>Place Order</button> </div>
            </div>
            <FooterTap />
        </div>
    )
}
export default Setting;