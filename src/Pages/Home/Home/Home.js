import React, { useContext } from 'react';
import Banner from '../Banner/Banner';

import Phones from '../Phones/Phones';
import Post from '../Post/Post';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import Advertisement from '../../Shared/Advertisement/Advertisement';
import MobilePost from '../Post/MobilePost';

const Home = () => {
  const { validUser, advertise } = useContext(GlobalContext);

  return (
    <div>
      <Banner></Banner>
      <div className='grid grid-cols-4 mt-5 mx-8'>
        <div
          className={`${
            advertise || validUser[0]?.person === 'Seller'
              ? 'lg:col-span-1 md:col-span-1 md:inline-block lg:inline-block hidden'
              : 'hidden'
          }`}
        >
          {validUser[0]?.person === 'Seller' && (
            <div className='mx-8 mt-8 mb-14'>
              <Post></Post>
            </div>
          )}
          {advertise && <Advertisement></Advertisement>}
        </div>
        <div
          className={`${
            advertise || validUser[0]?.person === 'Seller'
              ? 'lg:col-span-3 md:col-span-3 col-span-4'
              : 'col-span-4'
          }`}
        >
          {validUser[0]?.person === 'Seller' && (
            <div className='mx-8 mt-8 mb-14 md:hidden lg:hidden inline-block'>
              <MobilePost></MobilePost>
            </div>
          )}
          <Phones></Phones>
        </div>
      </div>
    </div>
  );
};

export default Home;
