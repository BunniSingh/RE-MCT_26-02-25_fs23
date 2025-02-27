import React, { useEffect, useState } from 'react'
import './Products.css'
import { IoStarSharp } from "react-icons/io5";
import ProductCard from '../../components/ProductCard/ProductCard';
const Products = () => {
    let [category, setCategory] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('electronics');
    let [showCategory, setShowCategory] = useState([]);
    let [product, setProduct] = useState({});
    let [isVisible, setIsVisible] = useState(false);

    let fetchCategory = async () => {
        const responce = await fetch('https://fakestoreapi.com/products/categories');
        let data = await responce.json();
        setCategory(data);
    }
    let fetchProduts = async () => {
        const responce = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
        let data = await responce.json();
        setShowCategory(data);
    }

    let showProduct = (id) => {
        let idx = showCategory.findIndex(ele => ele.id === id);
        setProduct(showCategory[idx]);
        setIsVisible(true);
    }
    useEffect(() => {
        fetchCategory()
    }, [])
    useEffect(() => {
        fetchProduts()
    }, [selectedCategory])
    
  return (
    <div className="produts-container">
        {isVisible && <ProductCard {...product} setIsVisible = {setIsVisible}/>}
        <div className="left">
            {
                category.map((ele, idx)=>{
                    return <p key={idx} onClick={()=> setSelectedCategory(ele)}>{ele}</p>
                })
            }
        </div>
        <div className="right">
            {
                showCategory.map((ele) =>{
                    let {id, title, image, price, rating} = ele;
                    return <div key={id} onClick={()=> showProduct(id)} className="item">
                        <img src={image} alt="product-img" />
                        <div className="details">
                            <h4>{title}</h4>
                            <p>${price}</p>
                            <div className="rating">
                                <span>{rating.rate}</span>
                                <IoStarSharp className='icon'/>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Products