import React ,{useState}from "react"
import logoname from "../assets/saylaniname.jpg"
import { AiOutlineMail } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import {  useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const Login = () => {
    const navigate = useNavigate()
    const [errorMessage, seterrorMessage] = useState("")
    const [value, setValue] = useState({
      email: "",
      password: "",
    })
    const Loginhandeler = () => {
        if (!value.email || !value.password) {
            seterrorMessage("Fill all Fields correctly")
            return;
          }
      signInWithEmailAndPassword(auth, value.email, value.password)
        .then((res) => {
          let uid = auth.currentUser.uid
          console.log(res)
        if(auth.currentUser.uid.email == "admin@gmail.com"){
          navigate('/home') }else{
            navigate('/adminfirstscreen')
          }
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
              setValue((prev) => ({ ...prev, email: e.target.value }))
            } className="signup-input" placeholder="Email" />
            <AiOutlineMail />
            </div>
            <div className="signup-input-div">
            <input onChange={(e) =>
                setValue((prev) => ({ ...prev, password: e.target.value }))
              } type="password" className="signup-input" placeholder="Password" />
            <BsEyeSlash />
            </div>
            <div className="forget-password">
                <h3 className="alert">{errorMessage}</h3>
                <h3>Forgot Password?</h3></div>
            <div className='started-button-div st-div' ><button onClick={Loginhandeler}  className='started-button'>Login</button> 
            <h3 onClick={()=>{
                navigate("/signup")
            }}>Don't have an account?Register</h3>
          </div>
        </div>
    </div>)}

export default Login;