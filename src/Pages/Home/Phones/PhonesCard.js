import React from 'react';
import { Link } from 'react-router-dom';

const PhonesCard = ({ phone }) => {
  const {
    _id,

    phone_name,
    picture,
    posted_date,
    resale_price,
  } = phone;
  return (
    <div>
      <div className='card w-80 bg-base-300 shadow-xl mb-10'>
        <figure>
          <img className='h-[200px]' src={picture} alt='' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{phone_name}</h2>
          <p className='text-left'>Post: {posted_date}</p>
          <p className='text-left font-semibold'>Price: ${resale_price}</p>
          <div className='card-actions justify-end'>
            <Link to={`/details/${_id}`}>
              <button className='btn btn-primary'>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesCard;
