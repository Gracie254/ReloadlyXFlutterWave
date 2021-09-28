import React, {useState} from "react";
import { useAuth } from "../Context/AuthContext";

const MyNavbar = () => {
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    function handleLogout() {

    }
    return (
        <div className="top-bar">
            <div className="app-logo">
            <h3>AnyPay</h3>
            </div>
            <div id="pages">
                <h3>Home</h3>
                <h3>Shop</h3>
                <h3>Buy Airtime</h3>
            </div>
            <div id="account">
                {error && <p>{error}</p>}
                {currentUser.email}
                <div onClick={handleLogout} style={{"color": "orangered", "margin-left":"10px"}}>Log Out</div>
                {/* <h3>Sign In</h3>
                <div className="btn-create-account">Create Account</div> */}
            </div>
            </div>
    )
}

export default MyNavbar