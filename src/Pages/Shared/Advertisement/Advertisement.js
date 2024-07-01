import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Advertisement = () => {
  const { advertise, setAdvertise } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://rephonex-server.onrender.com/advertise`)
      .then((res) => res.json())
      .then((data) => setAdvertise(data));
  }, [setAdvertise]);

  return (
    <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel>
        {advertise?.map((ad) => (
          <div
            key={ad._id}
            className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'
          >
            <Link to={`/details/${ad._id}`}>
              <img src={ad.picture} alt='...' />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Advertisement;
