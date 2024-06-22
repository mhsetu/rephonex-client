import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GlobalContext } from '../../../Context Provider/ContextProvider';


const PhoneDetails = () => {
  const { validUser } = useContext(GlobalContext);

  const {
    ram,
    camera,
    _id,
    brand,
    location,
    original_price,
    phone_name,
    phone_description,
    picture,
    posted_date,
    resale_price,
    seller_name,
    usage_duration,
  } = useLoaderData();

  return (
    <div>
      <div className='bg-white mt-5'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Phone Specifications
            </h2>
            <p className='mt-4 text-gray-500'>{phone_description}</p>

            <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>{brand}</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Original Price:{' '}
                  <span className='font-semibold'> ${original_price}</span>
                </p>
                <p className='mt-2 text-sm text-gray-500'>
                  ResalePrice:{' '}
                  <span className='font-semibold'> ${resale_price}</span>
                </p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Phone Model</p>
                <p className='mt-2 text-sm text-gray-500'>{phone_name}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Seller Name</p>
                <p className='mt-2 text-sm text-gray-500'>{seller_name}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Camera & RAM</p>
                <p className='mt-2 text-sm text-gray-500'>Ram: {ram}</p>
                <p className='mt-2 text-sm text-gray-500'>Camera: {camera}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>
                  Phone Usage Duration{' '}
                </p>
                <p className='mt-2 text-sm text-gray-500'>{usage_duration}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Location of owner </p>
                <p className='mt-2 text-sm text-gray-500'>{location}</p>
              </div>
            </dl>
            {validUser[0]?.person === 'Seller' ? (
              <button className='btn btn-primary mt-8 px-12'>Advertise</button>
            ) : (
              ''
            )}
            {/* <button className='btn btn-primary mt-8 px-12'>Advertise</button> */}
          </div>
          <div>
            <img
              src={picture}
              alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
              className='rounded-lg bg-gray-100'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
