import React from 'react';
import Fanta from '../assets/drink.png';

const Order = ({ name, price, quantity }) => {
  return (
    <div className='order_wrapper'>
      <div className='image'>
        <img src={Fanta} alt='fanta' />
      </div>
      <div className='name_price'>
        <div className='name'>
          {name} - {quantity}
        </div>

        <div className='price'>{price}</div>
      </div>
    </div>
  );
};

export default Order;
