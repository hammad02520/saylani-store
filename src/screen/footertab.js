import React from "react";
import { AiFillHome ,AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
const FooterTap = () =>{
    return(
        <div className="footer">
         <div>
         <AiFillHome className="footericon" />
           <h1>Home</h1>
         </div>
         <div>
         <AiOutlineShoppingCart className="footericon" />
           <h1>Cart</h1>
         </div>
         <div>
         <RiAccountPinCircleFill className="footericon" />
           <h1>Account</h1>
         </div>
           
           
        </div>
    )
}
export default FooterTap;