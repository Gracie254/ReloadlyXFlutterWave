import React, {useState} from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsPersonFill} from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
const MyNavbar = () => {
    const [error] = useState('')
    const { currentUser } = useAuth()
  
    const [clickBar, setClickBar] = useState(false)
 
   
    return (
        <div className="top-bar">
            <div id="bar" onClick={()=>setClickBar(!clickBar)}>{clickBar ? <FaTimes size="2.4rem" color="orangered" />:<FaBars size="2.4rem" color="orangered"/>}</div>
            
            <div className="app-logo">
            <h3>AnyPay</h3>
            </div>
            <div id="pages">
                <Link to="./dash" className="mylink"><h3>Home</h3></Link>
                <Link to="./prod" className="mylink"><h3>Shop</h3></Link>
                <Link to="./airtime" className="mylink"><h3>Buy Airtime</h3></Link>
            </div>
            
            <div id="account">
                {error && <p>{error}</p>}
                 <BsPersonFill />:<strong>{currentUser.email} </strong>
                <Link to="./checkout"><div style={{color: "orangered", margineft:"10px"}}><FiShoppingBag />  Bag</div></Link>
                {/* <h3>Sign In</h3>
                <div className="btn-create-account">Create Account</div> */}
            </div>
            </div>
    )
}

export default MyNavbar