import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,price,title,rating}) {
    const [{basket},dispatch]=useStateValue();
    const RemoveFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
  return (
    <div>
        <div className='checkoutproduct'>
            <img className='checkoutproduct_image' src={image}/>
            <div className='checkoutproduct_info'>
                <p className='checkoutproduct_title'>{title}</p>
                <p className='checkoutproduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                    <div className='checkoutproduct_rating'>
                    {Array(rating).fill().map((_,i)=>(
                    <><p>⭐</p></>
              ))}
                    </div>
                </p>
                <button onClick={RemoveFromBasket}>Remove From Basket</button>
            </div>
        </div>
      
    </div>
  )
}

export default CheckoutProduct
