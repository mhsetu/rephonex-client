import React from 'react';
import Banner from '../Banner/Banner';
import Advertisement from '../../Shared/Advertisement/Advertisement';
import Phones from '../Phones/Phones';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='grid grid-cols-4 mt-5 mx-8'>
        <div className='col-span-1'>
          <Advertisement></Advertisement>
        </div>
        <div className='col-span-3'>
          <Phones></Phones>
        </div>
      </div>
    </div>
  );
};

export default Home;
