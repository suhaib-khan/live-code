import React from 'react';
import Products from './Products';
import FrequentlyOrdered from './FrequentlyOrdered';
import BillingInfo from './BillingInfo';
import Header from './Header';

const Checkout = () => {
  return (
    <div className='checkout_wrapper'>
      <Header />
      <Products />
      <FrequentlyOrdered />
      <BillingInfo />
    </div>
  );
};

export default Checkout;
