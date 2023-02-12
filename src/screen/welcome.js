import React from 'react'
import logo from '../assets/logo.jpg'
import logoname from "../assets/saylaniname.jpg"
import { useNavigate } from 'react-router'
const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div className='welcome-main-container'> 
      <div ><img src={logo} /></div>
     <div className='logo-name'><img src={logoname} />
        <h2>Online Discount Store</h2>
      </div>
     <div className='started-button-div ' ><button onClick={()=>{
      navigate("/Signup")
     }} className='started-button'>Get Started</button></div>
     </div>
  )
}

export default Welcome;