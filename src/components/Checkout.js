import React , {useState} from 'react'
import { FaAngleDown, FaPaypal, FaCcVisa, FaAngleUp, FaCcMastercard } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import MyFooterNav from './footerNavbar'

const CheckoutPage =() => {
    const [checkDetails, setCheckDetails] = useState(false)
    const [makePayment, setMakePayment] = useState(false)
    const [yourCard, setYourCard] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [expire, setExpire] = useState('')
    const [cvv, setCvv] = useState('')
    const [discount, setDiscount] = useState('')
   
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [phone, setPhone] = useState('')
    const myClick = () => {
        setCheckDetails(!checkDetails)
    }
    const myClick2 = () => {
        setMakePayment(!makePayment)
    }
    const handleMySubmit = (event) => {
        event.preventDefault()
    }
    const secondSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
        <h2>Checkout</h2>
        <div className="gateway">
        <div className="shipping">
            <div>
            <h3>Shipping Information</h3>
            <div onClick={myClick} >{checkDetails ?<FaAngleUp /> : <FaAngleDown />}</div>
            </div>
            {checkDetails && <form onSubmit={handleMySubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName"  placeholder="John" style={{"content": "10rem"}} value={first} onChange={(e)=>setFirst(e.target.value)}/>
                <label htmlFor="laststName">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" value={last} onChange={(e)=>setLast(e.target.value)}/>
                <textarea>Enter your shipping address</textarea><br />
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone"  placeholder="xxx-xxxx-xxx" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <button className="btn"><FiSave />Save</button>
                <button className="btn">Next</button>
            </form> }
            
        </div>
        <div className="payment">
            <div className="payment1">
            <h1>Payment method</h1>
            <div onClick={myClick2}>{makePayment ? <FaAngleUp />:<FaAngleDown />}</div>
            </div>
            <div className="methods">
                <FaCcVisa size="1.2rem" color="blue" />
                <FaPaypal  size="1.2rem" color="blue"/>
                <FaCcMastercard size="1.2rem" color="blue"/>
            </div>
            {makePayment && <form onSubmit={secondSubmit}>
                <label htmlFor="cardname">Card Name</label>
                <input type="text" id="cardname" value={yourCard} onChange={(e)=> setYourCard(e.target.value)} />
                <label htmlFor="cardnum">Card Number</label>
                <input type="text" id="cardnum" value={cardNum} onChange={(e)=> setCardNum(e.target.value)} />
                <label htmlFor="expire">Exp. Date</label>
                <input type="text" id="expire" value={expire} onChange={(e)=> setExpire(e.target.value)} />
                <label htmlFor="cvv">CVV*</label>
                <input type="text" id="cvv" value={cvv} onChange={(e)=> setCvv(e.target.value)} required/>
                <label htmlFor="discount">Discount</label>
                <input type="text" id="discount" value={discount} onChange={(e)=> setDiscount(e.target.value)} />
                <button type="submit" className="btn">Apply</button>
                <button className="btn">Save</button>
            </form>}
            
            
        </div>
        </div>
        <div className="checkoutcart">
            <h3>Order Review</h3>
                <hr />
                
                <p>Total</p>
                <button className="store-btn">Purchase</button>
        </div>
        <footer><MyFooterNav /></footer>
        </>
    )
}

export default CheckoutPage