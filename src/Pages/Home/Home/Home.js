import React, { useContext } from 'react';
import Banner from '../Banner/Banner';

import Phones from '../Phones/Phones';
import Post from '../Post/Post';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import Advertisement from '../../Shared/Advertisement/Advertisement';
import useSales from '../../../hooks/useSales';

const Home = () => {
  const { validUser, advertise, user } = useContext(GlobalContext);
  const [isSale] = useSales(user?.email);

  return (
    <div>
      <Banner></Banner>
      <div className='grid grid-cols-4 mt-5 lg:mx-8'>
        <div
          className={`${
            advertise || validUser[0]?.person === 'Seller'
              ? 'col-span-1'
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
              ? 'col-span-3'
              : 'col-span-4'
          }`}
        >
          <Phones></Phones>
        </div>
      </div>
    </div>
  );
};

export default Home;
