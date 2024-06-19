import React from 'react';

const Product = ({ name, price, quantity, image }) => {
  return (
    <div className='product_wrapper'>
      <div className='image_details_wrapper'>
        <div className='image'>
          <img src={image} alt='name' />
        </div>
        <div className='details'>
          <div className='name'>{name}</div>
          <div className='price_quantity'>
            <span className='price'>{price}</span>
            <div className='quantity_wrapper'>
              <div>-</div>
              <div>{quantity}</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
