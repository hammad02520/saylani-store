import React from "react";
import { AiFillHome ,AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const FooterTap = () =>{
  const navigate = useNavigate()
    return(
        <div className="footer">
         <div>
         <AiFillHome onClick={()=>{
          navigate("/home")
         }} className="footericon" />
           <h1>Home</h1>
         </div>
         <div>
         <AiOutlineShoppingCart onClick={()=>{
          navigate("/shoppingcart")
         }} className="footericon" />
           <h1>Cart</h1>
         </div>
         <div>
         <RiAccountPinCircleFill onClick={()=>{
          navigate("/setting")
         }} className="footericon" />
           <h1>Account</h1>
         </div>
           
           
        </div>
    )
}
export default FooterTap;