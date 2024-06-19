import React from 'react';
import Order from './Order';

const FrequentlyOrdered = () => {
  return (
    <div className='freq_wrapper'>
      <div className='heading'>Frequently Ordered</div>
      <div className='freq_orders'>
        <Order name='Fanta' quantity='1' price='89' />
        <Order name='Fanta' quantity='1' price='89' />
        <Order name='Fanta' quantity='1' price='89' />
      </div>
    </div>
  );
};

export default FrequentlyOrdered;
