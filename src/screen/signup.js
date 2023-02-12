import React, { useState } from "react"
import logoname from "../assets/saylaniname.jpg"
import { CgProfile } from "react-icons/cg";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"
const Signup = () =>{
    const navigate = useNavigate()
    const [errorMessage, seterrorMessage] = useState("")
    const [value, setValue] = useState({
     email: "",
     password: "",
     contact:"",
     username:""
   })
       const SignUphandeler = () => {
        if (!value.username || !value.email || !value.password || !value.contact) {
          seterrorMessage("Fill all Fields correctly")
          return;
        }
        createUserWithEmailAndPassword(auth, value.email, value.password)
          .then((res) => {
            navigate('/hone')
          }).catch((error) => {
            console.log("Error===>", error)
            seterrorMessage(error.message)
          })
      }
 

    return(
        
    <div className="main-container-signup">
        <div className="container-signup-logo">
            <img src={logoname} />
            <h2>Online Discount Store</h2>
        </div>
        <div className="container-signup-input">
            <div className="signup-input-div">
            <input  onChange={(e) =>
              setValue((prev) => ({ ...prev, username: e.target.value }))
            } className="signup-input" placeholder="Full Name" />
            <CgProfile />
            </div>
            <div className="signup-input-div">
            <input  onChange={(e) =>
              setValue((prev) => ({ ...prev, contact: e.target.value }))
            } className="signup-input" placeholder="Contact" />
            <HiOutlinePhone />
            </div>
            <div  onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            } className="signup-input-div">
            <input className="signup-input" placeholder="Email" />
            <AiOutlineMail />
            </div>
            <div className="signup-input-div">
            <input  onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            } type="password" className="signup-input" placeholder="Password" />
            <BsEyeSlash />
            </div>
            <h3 className="alert">{errorMessage}</h3>
            <div className='started-button-div st-div' ><button onClick={SignUphandeler}   className='started-button'>Signup</button> 
            <h3 onClick={()=>{
                navigate("/login")
            }} >Alredy have an account?Login</h3></div>
        </div>
    </div>)
}
export default Signup;