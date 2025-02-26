import React from 'react'
import { IoMdClose } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import './ProductCard.css'
const ProductCard = (props) => {
  const {category, title,  image, price, rating, description, setIsVisible} = props;
  return (
    <div className="product-card-container">
      <div className="product">
      <div className="top">
          <h2>{category}</h2>
          <IoMdClose onClick={()=> setIsVisible(false)} className='icon'/>
      </div>
      <div className="bottom">
          <img src={image} alt="product-img" />
          <div className="product-details">
              <div>
                  <strong className='title'>Product Name</strong>
                  <p>{title}</p>
              </div>
              <div>
                  <strong className='title'>Product Price</strong>
                  <p>{price}</p>
              </div>
              <div>
                  <strong className='title'>Product Despriction</strong>
                  <p>{description}</p>
              </div>
              <div>
                  <strong className='title'>Product Rating</strong>
                  <p>{rating.rate}<IoStarSharp className='icon'/></p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard