import React from "react"
import logoname from "../assets/saylaniname.jpg"
import { AiOutlineMail } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
const Login = () =>{
    return(
    <div className="main-container-signup">
        <div className="container-signup-logo">
            <img src={logoname} />
            <h2>Online Discount Store</h2>
        </div>
        <div className="container-signup-input">
            <div className="signup-input-div">
            <input className="signup-input" placeholder="Email" />
            <AiOutlineMail />
            </div>
            <div className="signup-input-div">
            <input type="password" className="signup-input" placeholder="Password" />
            <BsEyeSlash />
            </div>
            <div className="forget-password"><h3>Forgot Password?</h3></div>
            <div className='started-button-div st-div' ><button className='started-button'>Login</button> 
            <h3 >Don't have an account?Register</h3>
          </div>
        </div>
    </div>)
}
export default Login;