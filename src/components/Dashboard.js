import React, {useState} from 'react'
import BestItems from '../StoreComponents/recommended'
import { categories, phones, topdeals, mygames, laptops, recharge } from '../StoreComponents/recommended'
import MyFooterNav from './footerNavbar'
import { FiShoppingBag } from 'react-icons/fi'
import vrguy from '../StoreComponents/images/image5.png'
import { Link } from 'react-router-dom'

const MyDashBoard = () => {
    const [searchItem, setSearchItem] = useState('')
    const [bestProducts] = useState(BestItems)
    const [chooseItem] = useState(categories)
    const [newDeals] = useState(topdeals)
    const [shopGames] = useState(mygames)
    const [shopLaptops] = useState(laptops)
    const [shopPhones] = useState(phones)
    const [rechargePhone] = useState(recharge)
    const [cart, setCart] = useState([])
    // const addToCart = (topdeals) => {
    //     console.log('we are in addTocart')
    //     setCart([...cart, topdeals])
    // }
    return (
        <>
           <div className="welcome-section">
               <div className="intro">Buy The Best Products At Affordable Prices</div>
               <label htmlFor="search"></label>
               <input type="search" id="search" value={searchItem} onChange={(e)=> setSearchItem(e.target.value)} placeholder="Search Product"/>
               <p>Recommended for you</p>
              
               <div className="product">
                   {bestProducts.map((item)=>{
                       const { id, image, descr, price} = item
                       return (
                           <div className="product-item"key={id}>
                               <p style={{"display":"grid", "grid-template-columns":"1fr", alignItems:"flex-end"}}> <FiShoppingBag size="1.3em"/></p>
                               <img src={image} alt={descr} width="100%" height="50%" id="recimg"/>
                               <div className="descr">
                               <p>{descr}</p>
                               <h4><span >&#8358;</span>{price}</h4>
                                
                               
                               </div>
                           </div>
                       )
                   })}
               </div>
            </div>
           <div className="recharge">
             <h2>Recharge your phone</h2>
             <div id="options">
                  {rechargePhone.map((airtime)=>{
                      const { id, image, descr} = airtime
                      return (
                          <div id="airtime" key={id}>
                              <Link to="./airtime"><img src={image} alt="" /></Link>
                              <h3>{descr}</h3>
                              </div>
                      )
                  })}
           </div>
           </div>
           <div className="categories">
               <h2>Categories</h2>
               <div className="store-category">
               {chooseItem.map((elem)=>{
                   const { id, image, descr} = elem
                   return (
                       <div className="storeClass" key={id}> 
                        <img src={image} alt={descr} />
                        <h4>{descr}</h4>
                       </div>
                   )
               })}
               </div>
           </div>
               <div className="top-deals">

               <h1>Top Deals Of The Day</h1>
               
               <div className="deals-container">
               {newDeals.map((mydeal)=>{
                   const { id, image, descr, price, deal} = mydeal
                   return (
                       <div className="singleDeal" key={id}>
                           <div id="top"><div id="top-price">{deal}</div><span><FiShoppingBag /></span></div>
                           <img src={image} alt={descr} />
                           <h5>{descr}</h5>
                           <h4><span >&#8358;</span>{price} </h4>

                           </div>
                   )
               })}
               </div>
               </div>
               <div className="explore">
                   <div style={{"font-size":"2.3rem", "width":"17rem"}}>Gaming at your fingertips</div>
                   <button className="explore-btn">Explore more</button>
               </div>
               <div className="gaming-section">
                <div style={{"display":"grid", "grid-template-columns":"1fr 1fr"}}><h2>Gaming</h2><Link to="./prod" style={{"color": "green"}}><h2>See All</h2></Link></div>
                <div className="shop-games">
                    {shopGames.map((game)=>{
                        const {id,image, descr, price} = game
                        return (
                            <div className="singleGame" key={id}>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4><span >&#8358;</span>{price}</h4>
                            </div>
                        )
                    })}
                </div>
               </div>
              
               <div className="image-section">
                   <div className="sect">
                       <h2 style={{"font-size":"2.0rem", "width":"17rem"}}>Explore the world of virtual reality</h2>
                     <button className="explore-btn"><Link to="/mystore" className="mylink">Explore All</Link></button>
                   </div>
                   <img src={vrguy} alt=""/>
               </div>
                <div className="gaming-section">
                <h2>Laptops</h2>
                <div className="shop-games">
                    {shopLaptops.map((laptop)=>{
                        const {id, image, descr, price} = laptop
                        return (
                            <div className="singleGame" key={id}>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4><span >&#8358;</span>{price}</h4>
                            </div>
                        )
                    })}
                </div>
               </div>
               <div className="explore">
                    <p >The future of voice information sharing</p>
                    <button className="btn">Explore All</button>
               </div>
               <div className="gaming-section">
                <h2>Phones</h2>
                <div className="shop-games">
                    {shopPhones.map((phone)=>{
                        const {id,image, descr, price, dec} = phone
                        return (
                            <div className="singleGame" key={id}>
                                <div>{dec}</div>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4><span >&#8358;</span>{price}</h4>
                            </div>
                        )
                    })}
                </div>
               </div>
               <footer><MyFooterNav /></footer>

        </>
    )
}
export default MyDashBoard