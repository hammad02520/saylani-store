import React,{useState} from "react";
import { AiFillHome ,AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const FooterTap = () =>{
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
    return(
        <div className="footer">
         <div>
         <AiFillHome style={{ color: active ? "white"  : "green"   }}  onClick={()=>{
          
          navigate("/home")
         }} className="footericon" />
           <h1>Home</h1>
         </div>
         <div>
         <AiOutlineShoppingCart style={{ color: active ? "white"  : "green"   }}  onClick={()=>{
          navigate("/shoppingcart")
         }} className="footericon" />
           <h1>Cart</h1>
         </div>
         <div>
         <RiAccountPinCircleFill style={{ color: active ? "white"  : "green"   }}  onClick={()=>{
          navigate("/setting")
         }} className="footericon" />
           <h1>Account</h1>
         </div>
           
           
        </div>
    )
}
export default FooterTap;