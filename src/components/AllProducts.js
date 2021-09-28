import React, {useState} from 'react'
import {topdeals, mygames, laptops} from '../StoreComponents/recommended'
import MyFooterNav from './footerNavbar'
const AllProductsPage = () => {
    const [newDeals] = useState(topdeals)
    const [shopGames] = useState(mygames)
    const [shopLaptops] = useState(laptops)
    return (
        <>
        <h2>All Products</h2>
        <div className="deals-container">
               {newDeals.map((mydeal)=>{
                   const { id, image, descr, price, deal} = mydeal
                   return (
                       <div className="singleDeal" key={id}>
                           <div id="top">{deal}</div>
                           <img src={image} alt={descr} />
                           <h5>{descr}</h5>
                           <h4>{price}</h4>

                           </div>
                   )
               })}
               </div>
               <div className="shop-games">
                    {shopGames.map((game)=>{
                        const {id, image, descr, price} = game
                        return (
                            <div className="singleGame" key={id}>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4>{price}</h4>
                            </div>
                        )
                    })}
                </div>
                <div className="shop-games">
                    {shopLaptops.map((laptop)=>{
                        const {id,image, descr, price} = laptop
                        return (
                            <div className="singleGame" key={id}>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4>{price}</h4>
                            </div>
                        )
                    })}
                </div>
                <div className="switchpages">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                <div className="second-image">
                    <p >The future of voice information sharing</p>
                    <button className="btn">Explore All</button>
               </div>
                    <MyFooterNav />
        </>
    )
}

export default AllProductsPage