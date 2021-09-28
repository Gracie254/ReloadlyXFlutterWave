import React from 'react'
import image1 from '../StoreComponents/images/image3.png'
import { FiMinus, FiPlus} from 'react-icons/fi'
const MakePurchase = () => {
    return (
        <>
        <div className="details-component">
            <div className="image-container">
        <img src={image1} alt="" />
        </div>
        <div className="content-container">
        <h2>Description</h2>
        <h3>Price</h3>
        
        <div className="color-options">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
        <div className="quantity">
            <div><FiMinus /></div>
            <div>1</div>
            <div> <FiPlus /></div>
            
           
        </div>
        <button className="btn">Add to Cart</button>
        </div>
        </div>
        <div className="about-section">
            <h1>About Product</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam aperiam ea qui dolorem placeat esse minus facere. Ratione nihil laboriosam natus veritatis accusamus in eius aliquid error maxime nemo, doloremque tempore temporibus velit quaerat ut. Culpa nemo porro eaque non possimus quos aliquid repellat omnis aut, deleniti iusto esse maxime quisquam reiciendis cupiditate perferendis, ratione qui, illum nesciunt facilis itaque officia unde? Totam ducimus esse dolorem accusantium veritatis adipisci.</p>

        </div>
        <div className="reviews">
            <div className=""></div>
            <p>Name</p>
            <p>Rating</p>
            <p>Comment</p>
        </div>
        <div className="ratings">

        </div>

        <div className="related">

        </div>
        <div className="footer">

        </div>
        </>
    )
}

export default MakePurchase