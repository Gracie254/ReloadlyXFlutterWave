import React, {useState} from 'react'

const MyShoppingCart = () => {
    const [cartState, setCartState] = useState('')
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
      </table>
        </>
    )
}

export default MyShoppingCart