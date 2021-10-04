import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaTrash} from 'react-icons/fa'
import image1 from '../StoreComponents/images/image 14.png'
const MyShoppingCart = () => {
    const removeItems = (event) => {
        var buttonClicked = event.target 
        buttonClicked.parentElement.parentElement.parentElement.remove()
    }
    const updateCartTotal = () => {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        for(var i=0; i < cartRows.length; i++){
            var cartRow = cartRows[i]
            var priceElement =cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('quantity')[0]
            console.log(priceElement, quantityElement)
        }
    }
    return (
        <>
      <h2>Cart</h2>
      <table>
          <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
          </tr>
          <tr>
              <td><img src={image1} alt="" /></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <div className="cart-items">
              <div className="cart-row">
            <img src={image1} alt="" /> 
            <div className="cart-price">
                30000
                </div>
            <div className="quantity">
                </div>
            <button onClick={removeItems}><FaTrash /></button>
            </div> 
              
            <div className="cart-row">

            
            </div> 
            
          </div>
          <div className="cartItems">
              <div className="cart-row">
            <img src={image1} alt="" /> 
            </div> 
            <div className="cart-row">
                <div className="cart-price">
                20000
                </div>
                <div className="quantity">
                    1
                </div>
                </div>
            <div className="cart-row">
            <button onClick={removeItems}><FaTrash /></button>
            </div>
          </div>
           {/* <tr>
              <td><img src={image1} alt="" /></td>
              <td></td>
              <td></td>
              <td></td>
              <button onClick={removeItems}><FaTrash /></button>
          </tr> */}
      </table>
        </>
    )
}

export default MyShoppingCart