import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating,amount}) {
  const [{basket},dispatch]=useStateValue();
  console.log('this is the basket >>>',basket);

  const addToBasket=()=>{
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        }
      });
  };
  return (
    <div className='Product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <p className='product_rating'>
              {Array(rating).fill().map((_,i)=>(
                    <><p>⭐</p></>
              ))}
                
            </p>
            <img className='product_image' src={image} alt='graphics card'></img>
            <button className='product_button' onClick={addToBasket}>Add To Cart</button>
        </div>
      
    </div>
  )
}

export default Product
