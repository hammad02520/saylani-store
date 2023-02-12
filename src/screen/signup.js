import React from "react"
import logoname from "../assets/saylaniname.jpg"
import { CgProfile } from "react-icons/cg";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
const Signup = () =>{
    return(
    <div className="main-container-signup">
        <div className="container-signup-logo">
            <img src={logoname} />
            <h2>Online Discount Store</h2>
        </div>
        <div className="container-signup-input">
            <div className="signup-input-div">
            <input className="signup-input" placeholder="Full Name" />
            <CgProfile />
            </div>
            <div className="signup-input-div">
            <input className="signup-input" placeholder="Contact" />
            <HiOutlinePhone />
            </div>
            <div className="signup-input-div">
            <input className="signup-input" placeholder="Email" />
            <AiOutlineMail />
            </div>
            <div className="signup-input-div">
            <input type="password" className="signup-input" placeholder="Password" />
            <BsEyeSlash />
            </div>
            <div className='started-button-div st-div' ><button className='started-button'>Signup</button> 
            <h3 >Alredy have an account?Login</h3></div>
        </div>
    </div>)
}
export default Signup;