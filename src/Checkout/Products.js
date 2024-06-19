import React from 'react';
import Product from './Product';
import CaribbeanBurgerImage from '../assets/carribean.png';
import CajunBurgerImage from '../assets/cajunburger.png';

const Products = () => {
  return (
    <div className='products_wrapper'>
      <Product
        name='Caribbean Spicy Zinger Burger'
        price='319'
        quantity='1'
        image={CaribbeanBurgerImage}
      />
      <Product
        name='Cajun Veg Burger'
        price='219'
        quantity='2'
        image={CajunBurgerImage}
      />
    </div>
  );
};

export default Products;
