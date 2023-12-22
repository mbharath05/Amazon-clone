import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Horizontal from './images/horizontalbanner.png';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className="checkout_ad" src={Horizontal} alt=''></img>
        <div className='checkout_title'>
          <h3>Hello,{user?.email}</h3>
        <h2>Your Shopping Basket</h2>
        </div>
        {basket.map(item=>(
          <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}/>
        ))}
      </div>
     <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
