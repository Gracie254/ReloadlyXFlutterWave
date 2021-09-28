import React from 'react'
import { FaAngleDown, FaPaypal, FaCcVisa } from 'react-icons/fa'
import { RiMasterCardFill } from 'react-icons/ri'

const CheckoutPage =() => {
    return (
        <>
        <h2>Checkout</h2>
        <div className="shipping">
            <div>
            <h3>Shipping Information</h3>
            <FaAngleDown />
            </div>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" value="firstName" />
                <label htmlFor="laststName">Last Name</label>
                <input type="text" id="lastName" value="lastName" />
                <textarea>Enter your shipping address</textarea>
                <label htmlFor="phone">First Name</label>
                <input type="text" id="phone" value="phone" />
            </form>
            <button>Save</button>
            <button>Next</button>
        </div>
        <div className="payment">
            <div className="payment">
            <h1>Payment method</h1>
            <FaAngleDown />
            </div>
            <div className="methods">
                <button><FaCcVisa/></button>
                <button><FaPaypal /></button>
                <button><RiMasterCardFill /></button>
            </div>
            <form>
                <label htmlFor="cardname">Card Name</label>
                <input type="text" id="cardname" value="cardname" />
                <label htmlFor="cardnum">Card Number</label>
                <input type="text" id="cardnum" value="cardnum" />
                <label htmlFor="expire">Exp. Date</label>
                <input type="text" id="expire" value="cardname" />
                <label htmlFor="cvv">CVV*</label>
                <input type="text" id="cvv" value="cvv" required/>
                <label htmlFor="discount">Discount</label>
                <input type="text" id="discount" value="discount" />
                <button type="submit">Apply</button>
            </form>
            <button>Save</button>
        </div>
        </>
    )
}

export default CheckoutPage